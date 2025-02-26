"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_59: React.FC<CountdownProps> = ({
  to,
  interval = 1000,
  className = "",
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const remaining = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remaining));
      if (remaining <= 0 && onComplete) {
        onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const NeumorphicUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="bg-[#e0e5ec] p-8 rounded-2xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] relative">
        <motion.div
          className="text-4xl font-bold text-gray-700"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          key={value}
        >
          {value.toString().padStart(2, "0")}
        </motion.div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#e0e5ec] px-4 py-1 rounded-full text-xs font-medium text-gray-600 uppercase tracking-wider shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const Separator = () => (
    <div className="self-center -mt-6">
      <div className="w-2 h-2 bg-gray-400 rounded-full mb-2" />
      <div className="w-2 h-2 bg-gray-400 rounded-full" />
    </div>
  );

  return (
    <div className={`bg-[#e0e5ec] p-16 rounded-3xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-gray-700 px-8 py-4 rounded-xl shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]">
          Countdown Timer
        </h2>
        <div className="flex items-center space-x-8">
          <NeumorphicUnit value={hours} label="hours" />
          <Separator />
          <NeumorphicUnit value={minutes} label="minutes" />
          <Separator />
          <NeumorphicUnit value={seconds} label="seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_59; 