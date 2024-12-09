"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Day = {
  date: Date;
  currentMonth: boolean;
};

type CalendarProps = {
  initialDate?: Date;
  onSelectDate?: (date: Date | null) => void;
};

const Calendar: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const startDayOfWeek = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  // Calculate all days to display in the calendar grid
  const days: Day[] = [];

  // Previous month days
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(startOfMonth);
    date.setDate(date.getDate() - i - 1);
    days.push({ date, currentMonth: false });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i), currentMonth: true });
  }

  // Next month days
  const remainingDays = (7 - (days.length % 7)) % 7;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i), currentMonth: false });
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleYearChange = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelectDate?.(date);
  };

  return (
    <div className="p-6 w-full max-w-2xl mx-auto bg-gray-800 text-gray-100 shadow-xl rounded-2xl">
      {/* Header */}
      <motion.div 
        className="flex justify-between items-center mb-8 pb-4 border-b border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-gray-700 text-gray-100 rounded-full shadow-md hover:bg-gray-600"
        >
          &#8592; Previous
        </button>
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </motion.h2>
          <input
            type="number"
            value={currentDate.getFullYear()}
            onChange={(e) => handleYearChange(Number(e.target.value))}
            className="mt-2 w-24 text-center text-gray-100 bg-gray-700 rounded-lg border border-gray-600"
          />
        </div>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-gray-700 text-gray-100 rounded-full shadow-md hover:bg-gray-600"
        >
          Next &#8594;
        </button>
      </motion.div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-3 text-center text-sm font-semibold text-gray-400">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {day}
          </motion.div>
        ))}
      </div>

      {/* Calendar Grid */}
      <motion.div 
        className="grid grid-cols-7 gap-2 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {days.map(({ date, currentMonth }, index) => (
          <motion.button
            key={index}
            onClick={() => handleDateSelect(date)}
            className={`p-4 text-center rounded-lg text-lg font-medium transition-all 
              ${currentMonth ? 'bg-gray-700 text-gray-100' : 'bg-gray-600 text-gray-500'} 
              ${selectedDate?.toDateString() === date.toDateString() ? 'scale-110 shadow-lg bg-green-500 text-gray-900' : 'hover:bg-gray-500'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {date.getDate()}
          </motion.button>
        ))}
      </motion.div>

      {/* Selected Date Display */}
      {selectedDate && (
        <motion.div 
          className="mt-8 text-center text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Selected Date: <span className="text-green-400">{selectedDate.toDateString()}</span>
        </motion.div>
      )}
    </div>
  );
};

export default Calendar;
