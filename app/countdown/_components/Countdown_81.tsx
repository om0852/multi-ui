"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_81: React.FC<CountdownProps> = ({
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

  const BubbleNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative w-24 h-24"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-20 blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-40 blur-lg scale-95" />
        <motion.div
          className="relative w-full h-full bg-gradient-to-br from-sky-400/80 to-blue-500/80 rounded-full backdrop-blur-sm flex items-center justify-center border border-white/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-3xl font-bold text-white">
            {value.toString().padStart(2, "0")}
          </span>
          <motion.div
            className="absolute -top-1 right-3 w-3 h-3 bg-white/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
      <span className="text-sm font-medium text-sky-300 mt-3">{label}</span>
    </div>
  );

  return (
    <div className={`bg-gradient-to-br from-sky-900 to-blue-900 p-12 rounded-3xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-sky-300">Bubble Timer</h2>
        <div className="flex items-center space-x-8">
          <BubbleNumber value={hours} label="HOURS" />
          <span className="text-4xl font-light text-sky-400/50 mt-[-2rem]">:</span>
          <BubbleNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-light text-sky-400/50 mt-[-2rem]">:</span>
          <BubbleNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_81; 