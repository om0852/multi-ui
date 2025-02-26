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
  background: #2e1065;
  border: 4px solid #7e22ce;
  border-radius: 0.5rem;
  box-shadow: 
    0 0 0 4px #2e1065,
    0 0 0 8px #7e22ce,
    inset 0 0 20px rgba(126, 34, 206, 0.5);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  image-rendering: pixelated;
`;

const PixelPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(45deg, #2e1065 25%, transparent 25%),
    linear-gradient(-45deg, #2e1065 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #2e1065 75%),
    linear-gradient(-45deg, transparent 75%, #2e1065 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
  opacity: 0.1;
  animation: pixelate 2s steps(2) infinite;

  @keyframes pixelate {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.15; }
  }
`;

const ScanLines = styled.div`
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  animation: scan 10s linear infinite;

  @keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(20px); }
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
  color: #e9d5ff;
  font-size: 1.25rem;
  background: #581c87;
  border: 2px solid #7e22ce;
  border-radius: 0.25rem;
  text-shadow: 2px 2px #2e1065;
  image-rendering: pixelated;
  
  &:hover {
    background: #7e22ce;
    box-shadow: 
      0 0 10px rgba(126, 34, 206, 0.5),
      inset 0 0 5px rgba(126, 34, 206, 0.5);
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e9d5ff;
  padding: 0.75rem 1.25rem;
  background: #581c87;
  border: 2px solid #7e22ce;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 2px 2px #2e1065;
  image-rendering: pixelated;
  
  &:hover {
    background: #7e22ce;
    box-shadow: 
      0 0 10px rgba(126, 34, 206, 0.5),
      inset 0 0 5px rgba(126, 34, 206, 0.5);
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const GameIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  filter: drop-shadow(2px 2px #2e1065);
  animation: bounce 0.5s steps(2) infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #2e1065;
  border: 2px solid #7e22ce;
  border-radius: 0.25rem;
  box-shadow: 
    0 4px 20px rgba(126, 34, 206, 0.3),
    inset 0 0 10px rgba(126, 34, 206, 0.2);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2e1065;
    border: 2px solid #7e22ce;
  }

  &::-webkit-scrollbar-thumb {
    background: #7e22ce;
    border: 2px solid #2e1065;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #e9d5ff;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  text-shadow: 2px 2px #2e1065;
  image-rendering: pixelated;
  
  &:hover {
    background: #7e22ce;
    box-shadow: 
      0 0 10px rgba(126, 34, 206, 0.3),
      inset 0 0 5px rgba(126, 34, 206, 0.2);
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const CalendarBody = styled.div`
  background: #581c87;
  border-radius: 0.25rem;
  padding: 1.25rem;
  border: 2px solid #7e22ce;
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
  color: #e9d5ff;
  text-shadow: 2px 2px #2e1065;
`;

const DaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const DayButton = styled(motion.button)<{ isSelected: boolean; isCurrentMonth: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  border: 2px solid transparent;
  background: transparent;
  text-shadow: 2px 2px #2e1065;
  image-rendering: pixelated;

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: #7e22ce;
        color: #e9d5ff;
        border-color: #a855f7;
        box-shadow: 
          0 0 10px rgba(126, 34, 206, 0.5),
          inset 0 0 5px rgba(126, 34, 206, 0.5);
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #e9d5ff;
        &:hover {
          background: #7e22ce;
          border-color: #a855f7;
          box-shadow: 0 0 10px rgba(126, 34, 206, 0.3);
        }
      `;
    }
    return `
      color: #581c87;
    `;
  }}

  &:active {
    transform: translate(2px, 2px);
  }
`;

const SelectEffect = styled(motion.div)`
  position: absolute;
  inset: -2px;
  border: 2px solid #a855f7;
  border-radius: 0.25rem;
  box-shadow: 
    0 0 10px rgba(126, 34, 206, 0.5),
    inset 0 0 5px rgba(126, 34, 206, 0.5);
`;

const Calendar_47: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <PixelPattern />
      <ScanLines />
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
              <GameIcon>🎮</GameIcon>
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
                hidden: { opacity: 0, scale: 0.8, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0 }
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
                  <SelectEffect
                    initial={false}
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "steps(2)"
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

export default Calendar_47; 