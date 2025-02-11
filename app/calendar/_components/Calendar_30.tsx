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
  background: #2d3436;
  border-radius: 0.5rem;
  box-shadow: 
    0 0 0 4px #636e72,
    0 0 0 8px #2d3436;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  image-rendering: pixelated;
`;

const PixelPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(45deg, #636e72 25%, transparent 25%),
    linear-gradient(-45deg, #636e72 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #636e72 75%),
    linear-gradient(-45deg, transparent 75%, #636e72 75%);
  background-size: 4px 4px;
  opacity: 0.1;
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
  color: #dfe6e9;
  font-size: 1.25rem;
  background: #636e72;
  border: none;
  box-shadow: 
    0 4px 0 #2d3436,
    inset 0 2px 0 rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: #74b9ff;
    transform: translateY(2px);
    box-shadow: 
      0 2px 0 #2d3436,
      inset 0 2px 0 rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #dfe6e9;
  padding: 0.75rem 1.25rem;
  background: #636e72;
  border: none;
  box-shadow: 
    0 4px 0 #2d3436,
    inset 0 2px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.875rem;
  
  &:hover {
    background: #74b9ff;
    transform: translateY(2px);
    box-shadow: 
      0 2px 0 #2d3436,
      inset 0 2px 0 rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

const RetroIcon = styled.span`
  font-size: 1rem;
  display: inline-block;
  animation: bounce 0.5s infinite alternate;

  @keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-2px); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #2d3436;
  border: 4px solid #636e72;
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2d3436;
  }

  &::-webkit-scrollbar-thumb {
    background: #636e72;
    border: 2px solid #2d3436;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  color: #dfe6e9;
  background: #636e72;
  border: none;
  margin-bottom: 0.25rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.75rem;
  
  &:hover {
    background: #74b9ff;
    color: #2d3436;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const CalendarBody = styled.div`
  background: #636e72;
  padding: 1rem;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 -2px 0 rgba(255, 255, 255, 0.1);
`;

const WeekdayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 1rem;
`;

const WeekdayLabel = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #dfe6e9;
  font-family: 'Press Start 2P', monospace;
  text-transform: uppercase;
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
  border: none;
  background: #2d3436;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.75rem;
  box-shadow: 
    0 2px 0 #1e2022,
    inset 0 2px 0 rgba(255, 255, 255, 0.1);

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: #74b9ff;
        color: #2d3436;
        box-shadow: none;
        transform: translateY(2px);
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #dfe6e9;
        &:hover {
          background: #636e72;
          transform: translateY(1px);
          box-shadow: 
            0 1px 0 #1e2022,
            inset 0 2px 0 rgba(255, 255, 255, 0.1);
        }
        &:active {
          transform: translateY(2px);
          box-shadow: none;
        }
      `;
    }
    return `
      color: #636e72;
      box-shadow: none;
    `;
  }}
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  inset: 0;
  border: 2px solid #0984e3;
`;

const Calendar_30: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <Header>
        <HeaderControls>
          <MonthButton
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevMonth}
          >
            ←
          </MonthButton>
          <div className="relative">
            <MonthYearButton
              onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            >
              <RetroIcon>🎮</RetroIcon>
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
                whileTap={{ scale: 0.95 }}
                isSelected={selectedDate?.toDateString() === date.toDateString()}
                isCurrentMonth={currentMonth}
              >
                {date.getDate()}
                {selectedDate?.toDateString() === date.toDateString() && (
                  <SelectedIndicator
                    initial={false}
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
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

export default Calendar_30; 