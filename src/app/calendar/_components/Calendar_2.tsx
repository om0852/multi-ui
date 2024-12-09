"use client"
import React, { useState } from 'react';

type Day = {
  date: Date;
  currentMonth: boolean;
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
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

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto bg-gray-50 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
        >
          &lt;
        </button>
        <h2 className="text-xl font-bold text-gray-700">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
        >
          &gt;
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} className="uppercase tracking-wider">{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mt-2">
        {days.map(({ date, currentMonth }, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(date)}
            className={`p-2 text-center rounded-md text-sm font-semibold transition-colors 
              ${currentMonth ? 'text-gray-900' : 'text-gray-400'} 
              ${selectedDate?.toDateString() === date.toDateString() ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="mt-4 text-center text-sm text-gray-700">
          <span className="font-medium">Selected Date:</span> {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
};

export default Calendar;