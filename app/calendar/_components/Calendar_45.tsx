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
  background: linear-gradient(135deg, #18181b, #450a0a);
  border-radius: 0.5rem;
  box-shadow: 
    0 8px 32px rgba(239, 68, 68, 0.3),
    0 0 0 1px rgba(239, 68, 68, 0.2),
    inset 0 0 20px rgba(239, 68, 68, 0.2);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const LavaEffect = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(185, 28, 28, 0.4) 0%, transparent 50%);
  filter: blur(20px);
  animation: lavaFlow 8s ease-in-out infinite;

  @keyframes lavaFlow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }
`;

const EmberParticles = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(1px 1px at 20% 20%, #fca5a5 100%, transparent 100%),
    radial-gradient(1px 1px at 40% 40%, #f87171 100%, transparent 100%),
    radial-gradient(1px 1px at 60% 60%, #ef4444 100%, transparent 100%),
    radial-gradient(1px 1px at 80% 80%, #dc2626 100%, transparent 100%);
  background-size: 200px 200px;
  animation: embers 4s linear infinite;
  opacity: 0.6;

  @keyframes embers {
    0% { transform: translateY(0); }
    100% { transform: translateY(-200px); }
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
  color: #fca5a5;
  font-size: 1.25rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.5rem;
  text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    box-shadow: 
      0 0 20px rgba(239, 68, 68, 0.3),
      inset 0 0 10px rgba(239, 68, 68, 0.2);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fca5a5;
  padding: 0.75rem 1.25rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    box-shadow: 
      0 0 20px rgba(239, 68, 68, 0.3),
      inset 0 0 10px rgba(239, 68, 68, 0.2);
  }
`;

const VolcanoIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5));
  animation: erupt 2s ease-in-out infinite;

  @keyframes erupt {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5)); }
    50% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.8)); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(24, 24, 27, 0.95);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.5rem;
  box-shadow: 
    0 4px 20px rgba(239, 68, 68, 0.2),
    inset 0 0 10px rgba(239, 68, 68, 0.1);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(239, 68, 68, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(239, 68, 68, 0.3);
    border-radius: 2px;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #fca5a5;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    box-shadow: 
      0 0 10px rgba(239, 68, 68, 0.2),
      inset 0 0 5px rgba(239, 68, 68, 0.2);
  }
`;

const CalendarBody = styled.div`
  background: rgba(24, 24, 27, 0.6);
  border-radius: 0.5rem;
  padding: 1.25rem;
  border: 1px solid rgba(239, 68, 68, 0.3);
  backdrop-filter: blur(10px);
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
  color: #fca5a5;
  text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
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
  border: 1px solid transparent;
  background: transparent;
  overflow: hidden;

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: rgba(239, 68, 68, 0.2);
        color: #fca5a5;
        border-color: #ef4444;
        box-shadow: 
          0 0 15px rgba(239, 68, 68, 0.3),
          inset 0 0 5px rgba(239, 68, 68, 0.2);
        text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
      `;
    }
    if (isCurrentMonth) {
      return `
        color: #fca5a5;
        &:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
        }
      `;
    }
    return `
      color: #7f1d1d;
    `;
  }}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(239, 68, 68, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const SelectedIndicator = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border-radius: 0.25rem;
  border: 1px solid #ef4444;
  box-shadow: 
    0 0 10px rgba(239, 68, 68, 0.3),
    inset 0 0 5px rgba(239, 68, 68, 0.2);
`;

const Calendar_45: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <LavaEffect />
      <EmberParticles />
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
              <VolcanoIcon>🌋</VolcanoIcon>
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
                  <SelectedIndicator
                    initial={false}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.05, 1],
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

export default Calendar_45; 