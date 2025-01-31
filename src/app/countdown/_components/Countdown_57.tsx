"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_57: React.FC<CountdownProps> = ({
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

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-24 h-32 flex flex-col items-center justify-center"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        initial={{ rotateX: -180 }}
        animate={{ rotateX: 0 }}
        key={value}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        <motion.span
          className="text-4xl font-light text-gray-800"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
          {label}
        </span>
      </motion.div>
    </div>
  );

  return (
    <div className={`bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-light text-gray-800">Time Left</h2>
        <div className="flex space-x-6">
          <TimeCard value={hours} label="hours" />
          <TimeCard value={minutes} label="minutes" />
          <TimeCard value={seconds} label="seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_57; 