"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_33: React.FC<CountdownProps> = ({
  to,
  interval = 1,
  className = "",
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let timer: NodeJS.Timeout;
    const tick = () => {
      const remainingTime = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remainingTime));
      if (remainingTime <= 0 && onComplete) {
        clearInterval(timer);
        onComplete();
      }
    };

    tick();
    timer = setInterval(tick, interval * 1000);
    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative"
      initial={{ rotateY: 180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-32 bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 rounded-xl relative overflow-hidden shadow-xl">
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              opacity: [0, 0.2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="h-full flex items-center justify-center"
            >
              <span className="text-5xl font-bold text-white tracking-tight">
                {String(value).padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.span
          className="text-sm font-medium text-purple-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen bg-gray-900 flex items-center justify-center ${className}`}>
      <motion.div
        className="p-12 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl shadow-2xl border border-purple-500/20"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.h2
          className="text-3xl font-bold text-center bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Countdown Timer
        </motion.h2>
        
        <div className="flex gap-6">
          <TimeBlock value={hours} label="HOURS" />
          <motion.span
            className="text-4xl text-purple-400 self-center mb-8"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            :
          </motion.span>
          <TimeBlock value={minutes} label="MINUTES" />
          <motion.span
            className="text-4xl text-purple-400 self-center mb-8"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            :
          </motion.span>
          <TimeBlock value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_33;
