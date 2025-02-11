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
  background: linear-gradient(135deg, #854d0e, #92400e);
  border-radius: 1rem;
  box-shadow: 
    0 8px 32px rgba(133, 77, 14, 0.3),
    0 0 0 4px #b45309,
    inset 0 0 32px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const GearPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.1)' stroke-width='2'%3E%3Cpath d='M12 15a3 3 0 100-6 3 3 0 000 6z'/%3E%3Cpath d='M13.41 10.59l2.83-2.83'/%3E%3Cpath d='M10.59 13.41l-2.83 2.83'/%3E%3Cpath d='M13.41 13.41l2.83 2.83'/%3E%3Cpath d='M10.59 10.59l-2.83-2.83'/%3E%3C/svg%3E");
  opacity: 0.2;
  animation: rotate 60s linear infinite;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
  color: #fbbf24;
  font-size: 1.25rem;
  background: #92400e;
  border: 2px solid #b45309;
  border-radius: 50%;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(251, 191, 36, 0.2);
  
  &:hover {
    background: #b45309;
    transform: rotate(15deg);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fbbf24;
  padding: 0.75rem 1.25rem;
  background: #92400e;
  border: 2px solid #b45309;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(251, 191, 36, 0.2);
  font-family: 'Courier New', monospace;
  
  &:hover {
    background: #b45309;
  }
`;

const GearIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  animation: spin 4s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #92400e;
  border: 2px solid #b45309;
  border-radius: 0.5rem;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(251, 191, 36, 0.2);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #92400e;
  }

  &::-webkit-scrollbar-thumb {
    background: #b45309;
    border: 2px solid #92400e;
    border-radius: 4px;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #fbbf24;
  background: transparent;
  border: none;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  
  &:hover {
    background: #b45309;
  }
`;

const CalendarBody = styled.div`
  background: rgba(146, 64, 14, 0.8);
  border: 2px solid #b45309;
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(251, 191, 36, 0.2);
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
  color: #fbbf24;
  font-family: 'Courier New', monospace;
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
  border: 1px solid #b45309;
  background: #92400e;
  font-family: 'Courier New', monospace;
  border-radius: 50%;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(251, 191, 36, 0.1);

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: #b45309;
        color: #fbbf24;
        border-color: #fbbf24;
        box-shadow: 
          0 0 8px rgba(251, 191, 36, 0.4),
          inset 0 2px 4px rgba(251, 191, 36, 0.2);
        transform: scale(1.1);
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #fbbf24;
        &:hover {
          background: #b45309;
          border-color: #fbbf24;
          transform: rotate(15deg);
        }
      `;
    }
    return `
      color: #d97706;
      border-color: #92400e;
      box-shadow: none;
    `;
  }}
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  inset: -2px;
  border: 2px solid #fbbf24;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.4);
`;

const Calendar_34: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <GearPattern />
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
              <GearIcon>⚙️</GearIcon>
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
                hidden: { opacity: 0, scale: 0.8, rotate: -45 },
                visible: { opacity: 1, scale: 1, rotate: 0 }
              }}
              className="relative"
            >
              <DayButton
                onClick={() => handleDateSelect(date)}
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
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
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
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

export default Calendar_34; 