"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LedDigitalClock: React.FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number): string => num.toString().padStart(2, "0");

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div className={`flex items-center justify-center h-screen bg-black ${className || ''}`}>
      <div className="text-center">
        {/* Digital Clock Display */}
        <motion.div
          className="text-8xl font-bold text-green-400 drop-shadow-lg"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {hours}:{minutes}:{seconds}
        </motion.div>

        {/* Clock Frame */}
       </div>
    </div>
  );
};

export default LedDigitalClock;
