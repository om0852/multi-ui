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
  background: linear-gradient(135deg, #0ea5e9, #0369a1);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(14, 165, 233, 0.2);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const WavePattern = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0.6;
  pointer-events: none;
`;

const Bubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 8s infinite;
  }

  &::before {
    left: 10%;
    animation-delay: -4s;
  }

  &::after {
    right: 20%;
    width: 25px;
    height: 25px;
    animation-delay: -2s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(100%) scale(0);
      opacity: 0;
    }
    50% {
      transform: translateY(0) scale(1);
      opacity: 0.3;
    }
  }
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
  color: white;
  font-size: 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const WaveIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  animation: wave 2s ease-in-out infinite;

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #0ea5e9;
    border-radius: 2px;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #0369a1;
  border-radius: 0.5rem;
  
  &:hover {
    background: rgba(14, 165, 233, 0.1);
    color: #0284c7;
  }
  transition: all 0.2s;
`;

const CalendarBody = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
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
  color: #0369a1;
`;

const DaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const DayButton = styled(motion.button)<{ isSelected: boolean; isCurrentMonth: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  transition: all 0.2s;
  border: 1px solid transparent;
  background: white;

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: linear-gradient(135deg, #0ea5e9, #0369a1);
        color: white;
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #374151;
        &:hover {
          background: rgba(14, 165, 233, 0.1);
          border-color: rgba(14, 165, 233, 0.2);
        }
      `;
    }
    return `
      color: #9ca3af;
    `;
  }}
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
`;

const Calendar_27: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <WavePattern />
      <Bubbles />
      <Header>
        <HeaderControls>
          <MonthButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevMonth}
          >
            ←
          </MonthButton>
          <div className="relative">
            <MonthYearButton
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            >
              <WaveIcon>🌊</WaveIcon>
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
            whileHover={{ scale: 1.1 }}
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
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
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

export default Calendar_27; 