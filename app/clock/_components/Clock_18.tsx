"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MinimalistClock: React.FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number): string => num.toString().padStart(2, "0");

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());

  return (
    <div className={`flex items-center justify-center h-screen bg-white ${className || ''}`}>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-8xl font-light text-gray-800 tracking-widest">
          {hours}
          <span className="text-gray-400 mx-2">:</span>
          {minutes}
        </div>
        <div className="text-gray-500 mt-4 text-sm uppercase tracking-widest">
          {time.toLocaleDateString(undefined, { weekday: 'long' })}
        </div>
      </motion.div>
    </div>
  );
};

export default MinimalistClock;
