"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_74: React.FC<CountdownProps> = ({
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
      if (remaining <= 0 && onComplete) onComplete();
    }, interval);
    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="group relative"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200" />
      <div className="relative bg-white dark:bg-gray-900 px-7 py-4 rounded-xl">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          key={value}
        >
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">
            {label}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className={`p-8 ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Modern Countdown
        </h2>
        <div className="flex items-center space-x-4">
          <TimeCard value={hours} label="HOURS" />
          <span className="text-4xl font-bold text-gray-300 dark:text-gray-700">:</span>
          <TimeCard value={minutes} label="MINUTES" />
          <span className="text-4xl font-bold text-gray-300 dark:text-gray-700">:</span>
          <TimeCard value={seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
};

export default Countdown_74; 