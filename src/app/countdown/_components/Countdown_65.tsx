"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_65: React.FC<CountdownProps> = ({
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
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <motion.div
        className="w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center mb-3"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="text-4xl font-bold text-white"
          key={value}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </motion.div>
      <div className="text-center">
        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </motion.div>
  );

  return (
    <div className={`bg-gray-50 p-12 rounded-3xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">
          Modern Timer
        </h2>
        <div className="flex space-x-8">
          <TimeCard value={hours} label="hours" />
          <TimeCard value={minutes} label="minutes" />
          <TimeCard value={seconds} label="seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_65; 