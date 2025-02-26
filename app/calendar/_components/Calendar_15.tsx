"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Day = {
  date: Date;
  currentMonth: boolean;
};

type CalendarProps = {
  initialDate?: Date;
  onSelectDate?: (date: Date | null) => void;
};

const AnimatedCalendar: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isYearSelectorOpen, setIsYearSelectorOpen] = useState(false);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const daysInMonth = endOfMonth.getDate();
  const firstDayIndex = startOfMonth.getDay(); // Day of the week the month starts on

  const days: Day[] = [];

  // Previous month's days to fill empty spaces at the start
  const prevMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    days.unshift({
      date: new Date(prevMonthEnd.getFullYear(), prevMonthEnd.getMonth(), prevMonthEnd.getDate() - i),
      currentMonth: false,
    });
  }

  // Current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
      currentMonth: true,
    });
  }

  // Next month's days to fill empty spaces at the end
  const remainingSpaces = 42 - days.length; // Total slots for a 6x7 grid
  for (let i = 1; i <= remainingSpaces; i++) {
    days.push({
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i),
      currentMonth: false,
    });
  }

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
    <div className="w-96 mx-auto bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-blue-200 text-blue-800 rounded-lg hover:bg-blue-300"
        >
          &lt;
        </button>
        <div className="relative">
          <button
            onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            className="text-lg font-bold hover:underline"
          >
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </button>
          {isYearSelectorOpen && (
            <motion.div
              className="absolute top-8 left-0 bg-white border rounded shadow-lg max-h-48 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="block w-full px-4 py-2 text-left hover:bg-blue-100"
                >
                  {year}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-blue-200 text-blue-800 rounded-lg hover:bg-blue-300"
        >
          &gt;
        </button>
      </motion.div>

      {/* Weekday Labels */}
      <motion.div
        className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
          <div key={index} className="p-2">
            {day}
          </div>
        ))}
      </motion.div>

      {/* Days Grid */}
      <motion.div
        className="grid grid-cols-7 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {days.map(({ date, currentMonth }, index) => (
          <motion.button
            key={index}
            onClick={() => handleDateSelect(date)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg text-center font-medium transition-colors 
              ${
                currentMonth
                  ? selectedDate?.toDateString() === date.toDateString()
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-200"
                  : "bg-gray-50 text-gray-400"
              }`}
          >
            {date.getDate()}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedCalendar;
