"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

type Day = {
  date: Date;
  currentMonth: boolean;
};

type CalendarProps = {
  initialDate?: Date;
  onSelectDate?: (date: Date | null) => void;
};

const CalendarContainer = styled.div`
  width: 24rem;
  margin: 0 auto;
  background: #1c1917;
  border-radius: 0;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    0 0 0 1px #ca8a04;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const ArtDecoPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(45deg, #ca8a04 25%, transparent 25%),
    linear-gradient(-45deg, #ca8a04 25%, transparent 25%);
  background-size: 8px 8px;
  opacity: 0.1;
  mask-image: radial-gradient(circle at 50% 50%, black, transparent 70%);
`;

const GoldAccent = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(45deg, transparent 48%, #ca8a04 49%, #eab308 50%, transparent 51%),
    linear-gradient(-45deg, transparent 48%, #ca8a04 49%, #eab308 50%, transparent 51%);
  background-size: 40px 40px;
  opacity: 0.2;
  pointer-events: none;
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const HeaderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MonthButton = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eab308;
  font-size: 1.25rem;
  background: transparent;
  border: 1px solid #ca8a04;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, #ca8a04, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #eab308;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: 1px solid #ca8a04;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, #ca8a04, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const DecoIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  color: #eab308;
  transform-origin: center;
  animation: shine 3s ease-in-out infinite;

  @keyframes shine {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; filter: drop-shadow(0 0 5px #eab308); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #1c1917;
  border: 1px solid #ca8a04;
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #1c1917;
  }

  &::-webkit-scrollbar-thumb {
    background: #ca8a04;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #eab308;
  border: none;
  background: transparent;
  font-family: 'Playfair Display', serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, #ca8a04, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const CalendarBody = styled.div`
  background: rgba(28, 25, 23, 0.8);
  padding: 1.25rem;
  border: 1px solid #ca8a04;
`;

const WeekdayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 1rem;
`;

const WeekdayLabel = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #eab308;
  font-family: 'Playfair Display', serif;
`;

const DaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const DayButton = styled(motion.button)<{ isSelected: boolean; isCurrentMonth: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  border: 1px solid transparent;
  background: transparent;
  font-family: 'Playfair Display', serif;
  overflow: hidden;

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: transparent;
        color: #eab308;
        border-color: #ca8a04;
        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, #ca8a04, transparent);
          opacity: 0.2;
        }
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #eab308;
        &:hover {
          border-color: #ca8a04;
          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, transparent, #ca8a04, transparent);
            opacity: 0.1;
          }
        }
      `;
    }
    return `
      color: #78716c;
    `;
  }}
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border: 1px solid #ca8a04;
`;

const Calendar_38: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isYearSelectorOpen, setIsYearSelectorOpen] = useState(false);

  const getDaysInMonth = (date: Date): Day[] => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const days: Day[] = [];
    
    const firstDay = start.getDay() || 7;
    for (let i = 1; i < firstDay; i++) {
      const prevDate = new Date(date.getFullYear(), date.getMonth(), 1 - i);
      days.unshift({ date: prevDate, currentMonth: false });
    }
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      days.push({
        date: new Date(date.getFullYear(), date.getMonth(), i),
        currentMonth: true,
      });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(date.getFullYear(), date.getMonth() + 1, i),
        currentMonth: false,
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelectDate?.(date);
  };

  const handleYearSelect = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setIsYearSelectorOpen(false);
  };

  return (
    <CalendarContainer>
      <ArtDecoPattern />
      <GoldAccent />
      <Header>
        <HeaderControls>
          <MonthButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevMonth}
          >
            ←
          </MonthButton>
          <div className="relative">
            <MonthYearButton
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            >
              <DecoIcon>⚜️</DecoIcon>
              {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
            </MonthYearButton>
            <AnimatePresence>
              {isYearSelectorOpen && (
                <YearSelector
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                    <YearOption
                      key={year}
                      onClick={() => handleYearSelect(year)}
                    >
                      {year}
                    </YearOption>
                  ))}
                </YearSelector>
              )}
            </AnimatePresence>
          </div>
          <MonthButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextMonth}
          >
            →
          </MonthButton>
        </HeaderControls>
      </Header>

      <CalendarBody>
        <WeekdayGrid>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <WeekdayLabel key={index}>{day}</WeekdayLabel>
          ))}
        </WeekdayGrid>

        <DaysGrid
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.02 }
            }
          }}
        >
          {days.map(({ date, currentMonth }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative"
            >
              <DayButton
                onClick={() => handleDateSelect(date)}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                isSelected={selectedDate?.toDateString() === date.toDateString()}
                isCurrentMonth={currentMonth}
              >
                {date.getDate()}
                {selectedDate?.toDateString() === date.toDateString() && (
                  <SelectedIndicator
                    initial={false}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </DayButton>
            </motion.div>
          ))}
        </DaysGrid>
      </CalendarBody>
    </CalendarContainer>
  );
};

export default Calendar_38; 