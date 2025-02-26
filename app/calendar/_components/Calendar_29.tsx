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
  background: linear-gradient(135deg, #18181b, #27272a);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(244, 114, 182, 0.2);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(244, 114, 182, 0.3);
`;

const CyberPattern = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, rgba(244, 114, 182, 0.1) 1px, transparent 1px) 0 0 / 20px 20px,
    linear-gradient(0deg, rgba(244, 114, 182, 0.1) 1px, transparent 1px) 0 0 / 20px 20px;
  opacity: 0.3;
  pointer-events: none;
`;

const NeonGlow = styled.div`
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at center, rgba(244, 114, 182, 0.2) 0%, transparent 70%);
  filter: blur(40px);
  animation: pulse 4s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
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
  color: #f472b6;
  font-size: 1.25rem;
  background: rgba(244, 114, 182, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(244, 114, 182, 0.3);
  text-shadow: 0 0 10px rgba(244, 114, 182, 0.5);
  
  &:hover {
    background: rgba(244, 114, 182, 0.2);
    box-shadow: 0 0 15px rgba(244, 114, 182, 0.3);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f472b6;
  padding: 0.75rem 1.25rem;
  background: rgba(244, 114, 182, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(244, 114, 182, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 0 10px rgba(244, 114, 182, 0.5);
  
  &:hover {
    background: rgba(244, 114, 182, 0.2);
    box-shadow: 0 0 15px rgba(244, 114, 182, 0.3);
  }
`;

const CyberIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  filter: drop-shadow(0 0 5px rgba(244, 114, 182, 0.5));
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(24, 24, 27, 0.95);
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(244, 114, 182, 0.2);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;
  border: 1px solid rgba(244, 114, 182, 0.3);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(244, 114, 182, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(244, 114, 182, 0.3);
    border-radius: 2px;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #f472b6;
  border-radius: 0.25rem;
  font-family: monospace;
  
  &:hover {
    background: rgba(244, 114, 182, 0.2);
    box-shadow: 0 0 10px rgba(244, 114, 182, 0.2);
    text-shadow: 0 0 5px rgba(244, 114, 182, 0.5);
  }
  transition: all 0.2s;
`;

const CalendarBody = styled.div`
  background: rgba(24, 24, 27, 0.6);
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(244, 114, 182, 0.3);
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
  color: #f472b6;
  font-family: monospace;
  text-shadow: 0 0 5px rgba(244, 114, 182, 0.5);
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
  transition: all 0.2s;
  border: 1px solid transparent;
  background: rgba(24, 24, 27, 0.6);
  font-family: monospace;

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: rgba(244, 114, 182, 0.2);
        color: #f472b6;
        box-shadow: 0 0 15px rgba(244, 114, 182, 0.4);
        border-color: rgba(244, 114, 182, 0.5);
        text-shadow: 0 0 5px rgba(244, 114, 182, 0.5);
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #f472b6;
        &:hover {
          background: rgba(244, 114, 182, 0.1);
          border-color: rgba(244, 114, 182, 0.3);
          box-shadow: 0 0 10px rgba(244, 114, 182, 0.2);
          text-shadow: 0 0 5px rgba(244, 114, 182, 0.5);
        }
      `;
    }
    return `
      color: rgba(244, 114, 182, 0.4);
    `;
  }}
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border-radius: 0.25rem;
  border: 1px solid rgba(244, 114, 182, 0.5);
  box-shadow: 0 0 10px rgba(244, 114, 182, 0.3);
`;

const Calendar_29: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <CyberPattern />
      <NeonGlow />
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
              <CyberIcon>⚡</CyberIcon>
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

export default Calendar_29; 