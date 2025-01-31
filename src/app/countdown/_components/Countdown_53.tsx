"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_53: React.FC<CountdownProps> = ({
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
      className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="text-6xl font-light text-white mb-2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        key={value}
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <div className="text-sm text-white/70 uppercase tracking-wider">{label}</div>
    </motion.div>
  );

  return (
    <div className={`min-h-[400px] relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 -z-10" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 -z-10" />
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h2
          className="text-4xl font-thin text-white text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>
        <div className="flex justify-center items-center space-x-8">
          <TimeUnit value={hours} label="Hours" />
          <div className="text-white text-6xl font-thin animate-pulse">:</div>
          <TimeUnit value={minutes} label="Minutes" />
          <div className="text-white text-6xl font-thin animate-pulse">:</div>
          <TimeUnit value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_53; 