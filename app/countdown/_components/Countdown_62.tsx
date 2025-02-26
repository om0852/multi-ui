"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_62: React.FC<CountdownProps> = ({
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

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="bg-zinc-800 p-4 rounded-lg"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.span
        className="block text-5xl font-light text-white mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        key={value}
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-xs text-zinc-400 uppercase tracking-wider">{label}</span>
    </motion.div>
  );

  return (
    <div className={`bg-zinc-900 p-10 rounded-lg ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-light text-white">Minimal Dark</h2>
        <div className="grid grid-cols-3 gap-4">
          <TimeBlock value={hours} label="hours" />
          <TimeBlock value={minutes} label="minutes" />
          <TimeBlock value={seconds} label="seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_62; 