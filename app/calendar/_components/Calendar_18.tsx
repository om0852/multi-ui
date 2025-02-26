"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-72 mx-auto bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 rounded-lg shadow-md p-4">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          &lt;
        </button>
        <div className="relative z-10">
          <button
            onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            className="text-base font-semibold hover:underline"
          >
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </button>
          {isYearSelectorOpen && (
            <motion.div
              className="absolute top-6 left-0 bg-white border rounded shadow-lg max-h-32 overflow-y-auto z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="block w-full px-3 py-1 text-left hover:bg-teal-100"
                >
                  {year}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          &gt;
        </button>
      </motion.div>

      {/* Weekday Labels */}
      <motion.div
        className="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
          <div key={index} className="p-1">
            {day}
          </div>
        ))}
      </motion.div>

      {/* Days Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentDate.toString()}
          className="grid grid-cols-7 gap-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.03, duration: 0.5 },
            },
          }}
        >
          {days.map(({ date, currentMonth }, index) => (
            <motion.button
              key={index}
              onClick={() => handleDateSelect(date)}
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-medium transition-colors 
                ${
                  currentMonth
                    ? selectedDate?.toDateString() === date.toDateString()
                      ? "bg-green-500 text-white"
                      : "bg-blue-200 text-blue-800 hover:bg-blue-300"
                    : "bg-gray-100 text-gray-400"
                }`}
            >
              {date.getDate()}
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Selected Date Display */}
      {selectedDate && (
        <motion.div
          className="mt-4 text-center text-base font-bold text-teal-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Selected Date: {selectedDate.toDateString()}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedCalendar;
