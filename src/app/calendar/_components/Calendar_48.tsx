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
  background: linear-gradient(135deg, #292524, #44403c);
  border-radius: 0.5rem;
  box-shadow: 
    0 8px 32px rgba(234, 179, 8, 0.3),
    0 0 0 2px #854d0e,
    inset 0 0 20px rgba(234, 179, 8, 0.2);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  font-family: "Copperplate", "Times New Roman", serif;
`;

const GearPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, #854d0e 2px, transparent 2px),
    radial-gradient(circle at 80% 80%, #854d0e 2px, transparent 2px),
    radial-gradient(circle at 50% 50%, #854d0e 3px, transparent 3px);
  background-size: 40px 40px;
  opacity: 0.1;
`;

const RotatingGear = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 4px solid #854d0e;
  border-radius: 50%;
  opacity: 0.2;

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border: 2px solid #854d0e;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: repeating-conic-gradient(
      from 0deg,
      #854d0e 0deg 30deg,
      transparent 30deg 60deg
    );
    border-radius: 50%;
    animation: rotate 20s linear infinite;
  }

  &:nth-child(1) {
    top: -20px;
    left: -20px;
    animation: rotate 15s linear infinite;
  }

  &:nth-child(2) {
    bottom: -20px;
    right: -20px;
    animation: rotate 15s linear infinite reverse;
  }

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
  color: #fef3c7;
  font-size: 1.25rem;
  background: linear-gradient(135deg, #854d0e, #713f12);
  border: 2px solid #eab308;
  border-radius: 50%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #713f12, #854d0e);
    box-shadow: 
      0 0 10px rgba(234, 179, 8, 0.3),
      inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fef3c7;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #854d0e, #713f12);
  border: 2px solid #eab308;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #713f12, #854d0e);
    box-shadow: 
      0 0 10px rgba(234, 179, 8, 0.3),
      inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }
`;

const ClockIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  animation: tick 1s steps(2) infinite;

  @keyframes tick {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #292524, #44403c);
  border: 2px solid #eab308;
  border-radius: 0.25rem;
  box-shadow: 
    0 4px 20px rgba(234, 179, 8, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.1);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #292524;
    border: 1px solid #854d0e;
  }

  &::-webkit-scrollbar-thumb {
    background: #854d0e;
    border: 1px solid #eab308;
    border-radius: 4px;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #fef3c7;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  &:hover {
    background: linear-gradient(135deg, #854d0e, #713f12);
    box-shadow: 
      0 0 10px rgba(234, 179, 8, 0.2),
      inset 0 1px 2px rgba(255, 255, 255, 0.2);
  }
`;

const CalendarBody = styled.div`
  background: linear-gradient(135deg, #292524, #1c1917);
  border-radius: 0.25rem;
  padding: 1.25rem;
  border: 2px solid #eab308;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
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
  color: #fef3c7;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const DaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const DayButton = styled(motion.button)<{ isSelected: boolean; isCurrentMonth: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  border: 1px solid transparent;
  background: transparent;
  color: #fef3c7;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: linear-gradient(135deg, #854d0e, #713f12);
        border-color: #eab308;
        box-shadow: 
          0 0 10px rgba(234, 179, 8, 0.3),
          inset 0 1px 2px rgba(255, 255, 255, 0.2);
      `;
    }
    if (isCurrentMonth) {
      return `
        &:hover {
          background: linear-gradient(135deg, #854d0e90, #713f1290);
          border-color: #eab308;
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.2);
        }
      `;
    }
    return `
      color: #78716c;
    `;
  }}
`;

const GearIndicator = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border: 1px solid #eab308;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border: 1px solid #eab308;
    border-radius: 50%;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Calendar_48: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
      <RotatingGear />
      <RotatingGear />
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
              <ClockIcon>⏰</ClockIcon>
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
                  <GearIndicator
                    initial={false}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 4,
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

export default Calendar_48; 