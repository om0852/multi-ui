"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_75: React.FC<CountdownProps> = ({
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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="font-mono text-6xl font-light"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
      <span className="text-xs tracking-widest text-gray-500 mt-1">{label}</span>
    </div>
  );

  return (
    <div className={`bg-white dark:bg-gray-900 p-12 rounded-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center space-y-8"
      >
        <h2 className="font-mono text-lg tracking-[0.3em] text-gray-600 dark:text-gray-400">
          TIME REMAINING
        </h2>
        <div className="flex items-start space-x-8">
          <TimeUnit value={hours} label="HOURS" />
          <span className="font-mono text-6xl font-light mt-0">:</span>
          <TimeUnit value={minutes} label="MINUTES" />
          <span className="font-mono text-6xl font-light mt-0">:</span>
          <TimeUnit value={seconds} label="SECONDS" />
        </div>
        <motion.div
          className="w-full h-[1px] bg-gray-200 dark:bg-gray-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default Countdown_75; 