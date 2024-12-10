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

const Calendar_2: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

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
    <div className="p-6 w-full max-w-lg mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-xl text-white">
      {/* Header */}
      <motion.div 
        className="flex justify-between items-center mb-6 border-b border-white pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 bg-white text-purple-700 rounded-full shadow-md hover:bg-purple-200"
        >
          &lt;
        </button>
        <div className="text-center">
          <motion.h2 
            className="text-2xl font-extrabold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </motion.h2>
          <input
            type="number"
            value={currentDate.getFullYear()}
            onChange={(e) => handleYearChange(Number(e.target.value))}
            className="mt-2 w-20 text-center text-purple-800 bg-white rounded-lg"
          />
        </div>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 bg-white text-purple-700 rounded-full shadow-md hover:bg-purple-200"
        >
          &gt;
        </button>
      </motion.div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-3 text-center text-sm font-medium">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="uppercase tracking-widest">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar_2 Grid */}
      <motion.div 
        className="grid grid-cols-7 gap-3 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {days.map(({ date, currentMonth }, index) => (
          <motion.button
            key={index}
            onClick={() => handleDateSelect(date)}
            className={`p-3 text-center rounded-lg text-sm font-semibold transition-all 
              ${currentMonth ? 'bg-white text-purple-800' : 'bg-white/50 text-gray-400'} 
              ${selectedDate?.toDateString() === date.toDateString() ? 'scale-110 shadow-xl bg-yellow-400 text-white' : 'hover:bg-purple-300'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {date.getDate()}
          </motion.button>
        ))}
      </motion.div>

      {/* Selected Date Display */}
      {selectedDate && (
        <motion.div 
          className="mt-6 text-center text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="underline">Selected Date:</span> {selectedDate.toDateString()}
        </motion.div>
      )}
    </div>
  );
};

export default Calendar_2;
