"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_63: React.FC<CountdownProps> = ({
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

  const Bubble = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50" />
      <motion.div
        className="relative w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.span
          className="text-4xl font-bold text-white"
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-blue-100 mt-1">{label}</span>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-600">Bubble Timer</h2>
        <div className="flex space-x-8">
          <Bubble value={hours} label="HOURS" />
          <Bubble value={minutes} label="MINUTES" />
          <Bubble value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_63; 