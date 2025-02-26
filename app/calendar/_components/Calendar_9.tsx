"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Day = {
  date: Date;
  currentMonth: boolean;
  x: number;
  y: number;
};

type CalendarProps = {
  initialDate?: Date;
  onSelectDate?: (date: Date | null) => void;
};

const RadialCircularCalendar: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [days, setDays] = useState<Day[]>([]);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());

  useEffect(() => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const daysInMonth = endOfMonth.getDate();
    const radius = 150;

    // Generate days with positions precomputed
    const generatedDays: Day[] = Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
      const angle = (360 / daysInMonth) * i;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      return { date, currentMonth: true, x, y };
    });

    setDays(generatedDays);
  }, [currentDate]);

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
    setSelectedYear(year);
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setShowYearSelector(false);
  };

  const gridVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <div className="relative w-96 h-96 mx-auto rounded-full bg-gradient-to-tl from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Center Controls */}
      <div className="absolute flex flex-col items-center text-gray-200 z-10">
        <h2
          onClick={() => setShowYearSelector(true)} // Trigger year selection menu
          className="text-xl font-bold cursor-pointer"
        >
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>

        {/* Year Selector Popup */}
        {showYearSelector && (
          <div className="absolute w-[250px] top-[-100px]  left-[-50%] transform translate-x-[20%] p-4 bg-gray-800 rounded-lg z-[100] shadow-lg">
            <h3 className="text-white text-lg">Select Year</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {Array.from({ length: 10 }, (_, i) => selectedYear - 5 + i).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="px-2 py-1 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 mt-3">
          <button
            onClick={handlePrevMonth}
            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Dates in Circular Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDate.toString()} // Triggers animation when the month changes
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.7 }}
          className="relative top-[-5%] left-[-6%] w-full h-full"
        >
          {days.map(({ date, x, y }, index) => (
            <motion.button
              key={index}
              onClick={() => handleDateSelect(date)}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% - ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
              className={`w-12 h-12 flex items-center justify-center text-base font-medium rounded-full transition-transform duration-300
                bg-gray-300 text-gray-800 hover:scale-110
                ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? "bg-gradient-to-br from-red-500 to-yellow-500 text-white ring-4 ring-gray-800"
                    : "hover:bg-gray-400"
                }`}
            >
              {date.getDate()}
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RadialCircularCalendar;
