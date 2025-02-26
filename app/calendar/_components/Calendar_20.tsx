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
  const firstDayIndex = startOfMonth.getDay();

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
  const remainingSpaces = 42 - days.length;
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
    <div className="w-72 mx-auto bg-teal-50 border rounded-lg shadow-md p-4">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handlePrevMonth}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          &lt;
        </button>
        <div className="relative">
          <button
            onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            className="text-lg font-semibold text-gray-700 hover:text-purple-500"
          >
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </button>
          {isYearSelectorOpen && (
            <motion.div
              className="absolute top-10 left-0 bg-gray-100 border rounded shadow-lg max-h-40 overflow-y-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="block w-full px-3 py-2 text-left hover:bg-purple-100"
                >
                  {year}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          &gt;
        </button>
      </motion.div>

      {/* Weekday Labels */}
      <motion.div
        className="grid grid-cols-7 text-center text-sm font-bold text-gray-500 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {"S M T W T F S".split(" ").map((day, index) => (
          <div key={index} className="py-1">
            {day}
          </div>
        ))}
      </motion.div>

      {/* Days Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentDate.toString()}
          className="grid grid-cols-7 gap-2"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
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
              className={`h-10 w-10 rounded-full text-sm font-medium transition-all flex items-center justify-center 
                ${
                  currentMonth
                    ? selectedDate?.toDateString() === date.toDateString()
                      ? "bg-purple-500 text-white"
                      : "bg-teal-100 text-teal-800 hover:bg-teal-200"
                    : "bg-gray-50 text-gray-400"
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
          className="mt-4 text-center text-sm font-semibold text-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Selected Date: {selectedDate.toDateString()}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedCalendar;
