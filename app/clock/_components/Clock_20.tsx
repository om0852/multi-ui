"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FlipClock: React.FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number): string => num.toString().padStart(2, "0");

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const FlipCard: React.FC<{ value: string }> = ({ value }) => (
    <motion.div
      className="relative w-16 h-24 bg-gray-800 rounded-lg shadow-lg mx-1"
      initial={{ rotateX: 0 }}
      animate={{ rotateX: [0, -90, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.4 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
    </motion.div>
  );

  return (
    <div className={`flex items-center justify-center h-screen bg-gray-900 ${className || ''}`}>
      <div className="flex items-center">
        <FlipCard value={hours[0]} />
        <FlipCard value={hours[1]} />
        <div className="text-4xl font-bold text-white mx-2">:</div>
        <FlipCard value={minutes[0]} />
        <FlipCard value={minutes[1]} />
        <div className="text-4xl font-bold text-white mx-2">:</div>
        <FlipCard value={seconds[0]} />
        <FlipCard value={seconds[1]} />
      </div>
    </div>
  );
};

export default FlipClock;
