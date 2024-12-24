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

const AnimatedCircularCalendar: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const daysInMonth = endOfMonth.getDate();
    const radius = 140;

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

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="relative w-96 h-96 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      {/* Center Controls */}
      <div className="absolute flex flex-col items-center text-white z-10">
        <h2 className="text-lg font-bold">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2 mt-2">
          <button
            onClick={handlePrevMonth}
            className="px-2 py-1 bg-white text-purple-800 rounded-full hover:bg-gray-200 shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 bg-white text-purple-800 rounded-full hover:bg-gray-200 shadow-md"
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
          transition={{ duration: 0.5 }}
          className="relative top-[-3vh] left-[-3vh] w-full h-full"
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02, duration: 0.4 }}
              className={`w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-full transition-transform duration-300 
                bg-white text-gray-900 hover:scale-110
                ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? "bg-gradient-to-br from-green-400 to-blue-500 text-white ring-2 ring-white"
                    : "hover:bg-blue-100"
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

export default AnimatedCircularCalendar;
