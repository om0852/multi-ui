"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_71: React.FC<CountdownProps> = ({
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
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.span
        className="text-5xl font-mono font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={value}
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-xs text-cyan-400 mt-2">{label}</span>
    </motion.div>
  );

  return (
    <div className={`bg-gray-950 p-8 rounded-2xl shadow-2xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-cyan-400 tracking-wider">NEON TIMER</h2>
        <div className="flex space-x-8">
          <TimeUnit value={hours} label="HRS" />
          <div className="text-5xl text-cyan-400 self-start mt-1">:</div>
          <TimeUnit value={minutes} label="MIN" />
          <div className="text-5xl text-cyan-400 self-start mt-1">:</div>
          <TimeUnit value={seconds} label="SEC" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_71; 