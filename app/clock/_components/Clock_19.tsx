"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BinaryClock: React.FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const toBinary = (num: number, digits: number = 6): boolean[] => {
    const binary = num.toString(2).padStart(digits, '0');
    return binary.split('').map(bit => bit === '1');
  };

  const hours = toBinary(time.getHours());
  const minutes = toBinary(time.getMinutes());
  const seconds = toBinary(time.getSeconds());

  const Dot: React.FC<{ active: boolean }> = ({ active }) => (
    <motion.div
      className={`w-4 h-4 rounded-full ${active ? 'bg-green-400' : 'bg-gray-600'}`}
      initial={{ scale: 0.8 }}
      animate={{ scale: active ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    />
  );

  return (
    <div className={`flex items-center justify-center h-screen bg-gray-900 ${className || ''}`}>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col gap-2">
          {hours.map((active, i) => (
            <Dot key={`h${i}`} active={active} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {minutes.map((active, i) => (
            <Dot key={`m${i}`} active={active} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {seconds.map((active, i) => (
            <Dot key={`s${i}`} active={active} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinaryClock;

