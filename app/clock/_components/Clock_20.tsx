"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DecorativeDigitalClockProps {
  size?: "small" | "medium" | "large";
  containerClass?: string;
}

const sizeClasses = {
  small: "text-lg",
  medium: "text-2xl",
  large: "text-4xl",
};

const DecorativeDigitalClock: React.FC<DecorativeDigitalClockProps> = ({ size = "medium", containerClass = "" }) => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const formatTime = (num: number): string => num.toString().padStart(2, "0");

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div className={`flex items-center justify-center h-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${containerClass}`}>
      <motion.div
        className={`font-extrabold ${sizeClasses[size]} text-white drop-shadow-lg`}
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <div className="flex space-x-2">
          <div className="bg-white text-black p-2 rounded-full">{hours}</div>
          <div className="bg-white text-black p-2 rounded-full">{minutes}</div>
          <div className="bg-white text-black p-2 rounded-full">{seconds}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default DecorativeDigitalClock;
