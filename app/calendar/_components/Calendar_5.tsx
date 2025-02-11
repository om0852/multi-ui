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
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
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
    <div className="flex flex-col bg-white shadow-lg rounded-lg w-[450px] h-[350px] font-roboto">
      {/* Day Info Section */}
      <div className="flex flex-col justify-center items-center bg-pink-500 text-white shadow-md z-10 p-4">
        <div className="text-lg font-medium uppercase">{currentDate.toLocaleString('default', { month: 'long' })}</div>
        <div className="text-8xl font-light">{currentDate.getDate()}</div>
      </div>

      {/* Calendar Section */}
      <div className="flex-grow flex flex-col bg-white p-4">
        <div className="flex justify-between items-center text-pink-500">
          <button
            onClick={handlePrevMonth}
            className="text-lg font-medium hover:text-pink-700"
          >
            &lt;
          </button>
          <span
            onClick={() => setShowYearPicker(!showYearPicker)}
            className="cursor-pointer text-lg font-medium"
          >
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </span>
          <button
            onClick={handleNextMonth}
            className="text-lg font-medium hover:text-pink-700"
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mt-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-gray-500 font-medium text-center">{day}</div>
          ))}

          {/* Calendar Grid */}
          {days.map(({ date, currentMonth }, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-10 w-10 rounded-lg cursor-pointer transition-all
                ${selectedDate?.toDateString() === date.toDateString()
                  ? 'bg-pink-500 text-white'
                  : currentMonth
                  ? 'text-gray-800 hover:bg-pink-100'
                  : 'text-gray-400 hover:bg-gray-200'}`}
              onClick={() => handleDateSelect(date)}
            >
              {date.getDate()}
            </div>
          ))}
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
                      ${year === currentDate.getFullYear() ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-pink-100'}`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
