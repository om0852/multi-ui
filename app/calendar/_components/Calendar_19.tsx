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
    <div className="w-64 mx-auto bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 rounded-xl shadow-lg p-3">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          &lt;
        </button>
        <div className="relative z-20">
          <button
            onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            className="text-sm font-semibold hover:underline"
          >
            {currentDate.toLocaleString("default", { month: "short" })} {currentDate.getFullYear()}
          </button>
          {isYearSelectorOpen && (
            <motion.div
              className="absolute top-8 left-0 bg-white border rounded shadow-lg max-h-32 overflow-y-auto z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="block w-full px-2 py-1 text-left hover:bg-pink-100"
                >
                  {year}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          &gt;
        </button>
      </motion.div>

      {/* Weekday Labels */}
      <motion.div
        className="grid grid-cols-7 text-center text-xs font-bold text-gray-700 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {"Mo Tu We Th Fr Sa Su".split(" ").map((day, index) => (
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
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`flex items-center justify-center h-8 w-8 rounded-lg text-xs font-medium transition-all 
                ${
                  currentMonth
                    ? selectedDate?.toDateString() === date.toDateString()
                      ? "bg-red-500 text-white"
                      : "bg-purple-200 text-purple-800 hover:bg-purple-300"
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
          className="mt-3 text-center text-sm font-bold text-purple-900"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Selected: {selectedDate.toDateString()}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedCalendar;
