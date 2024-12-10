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

const Calendar_4: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showYearPicker, setShowYearPicker] = useState(false);

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
    setShowYearPicker(false);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelectDate?.(date);
  };

  return (
    <div className="relative p-6 w-full max-w-xl mx-auto bg-white shadow-lg rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
        >
          &#8592;
        </button>
        <div className="flex flex-col items-center">
          <h2
            className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-blue-500"
            onClick={() => setShowYearPicker(!showYearPicker)}
          >
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h2>
        </div>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>

      {/* Year Picker */}
      {showYearPicker && (
        <motion.div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-10 overflow-y-auto max-h-60"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 40 }).map((_, i) => {
              const year = currentDate.getFullYear() - 20 + i;
              return (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`p-2 rounded-md text-sm font-medium transition-all 
                    ${year === currentDate.getFullYear() ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-blue-100'}`}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar_4 Grid */}
      <div className="grid grid-cols-7 gap-1 mt-2">
        {days.map(({ date, currentMonth }, index) => (
          <motion.button
            key={index}
            onClick={() => handleDateSelect(date)}
            className={`p-2 rounded-lg text-sm font-medium transition-all 
                ${currentMonth ? 'text-gray-800 bg-gray-100' : 'text-gray-400 bg-gray-50'} 
              ${selectedDate?.toDateString() === date.toDateString() ? 'bg-teal-600 text-white hover:text-white' : 'hover:bg-teal-100'}`}
                
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {date.getDate()}
          </motion.button>
        ))}
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <motion.div
          className="mt-4 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Selected Date: <span className="font-medium text-blue-500">{selectedDate.toDateString()}</span>
        </motion.div>
      )}
    </div>
  );
};

export default Calendar_4;
