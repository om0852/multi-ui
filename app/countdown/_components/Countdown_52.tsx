"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_52: React.FC<CountdownProps> = ({
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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-black px-6 py-4 rounded-lg border border-blue-400">
        <motion.span
          className="block text-5xl font-mono font-bold text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={value}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-blue-300 mt-2 block text-center">{label}</span>
      </div>
    </motion.div>
  );

  return (
    <div className={`p-8 bg-gray-900 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-blue-400">Countdown Timer</h2>
        <div className="flex space-x-6">
          <TimeUnit value={hours} label="HOURS" />
          <div className="text-blue-400 text-4xl font-bold self-center animate-pulse">:</div>
          <TimeUnit value={minutes} label="MINUTES" />
          <div className="text-blue-400 text-4xl font-bold self-center animate-pulse">:</div>
          <TimeUnit value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_52; 