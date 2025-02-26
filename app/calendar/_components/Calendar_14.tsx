"use client";
import React, { useState } from "react";

type Day = {
  date: Date;
  currentMonth: boolean;
};

type CalendarProps = {
  initialDate?: Date;
  onSelectDate?: (date: Date | null) => void;
};

const FlatCalendar: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
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
    <div className="w-80 mx-auto bg-white rounded-lg shadow-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 bg-purple-300 text-purple-800 rounded hover:bg-purple-400"
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
            <div className="absolute top-8 left-0 bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
              {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="block w-full px-4 py-2 text-left hover:bg-purple-100"
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 bg-purple-300 text-purple-800 rounded hover:bg-purple-400"
        >
          &gt;
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
          <div key={index} className="p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map(({ date, currentMonth }, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(date)}
            className={`p-2 rounded text-sm font-medium text-center transition-colors 
              ${
                currentMonth
                  ? selectedDate?.toDateString() === date.toDateString()
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-purple-100"
                  : "bg-gray-50 text-gray-400"
              }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlatCalendar;
