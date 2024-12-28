"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_36: React.FC<CountdownProps> = ({
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

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative perspective-1000"
      initial={{ rotateX: 90 }}
      animate={{ rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 shadow-2xl transform-gpu hover:scale-105 transition-transform duration-300">
        <motion.div
          className="text-6xl font-bold text-white text-center mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {String(value).padStart(2, "0")}
        </motion.div>
        <motion.div
          className="text-sm font-semibold text-indigo-200 text-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {label}
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-xl"
          animate={{
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen bg-gray-900 flex items-center justify-center ${className}`}>
      <motion.div
        className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Countdown Timer
        </motion.h1>
        
        <div className="flex gap-8">
          <TimeCard value={hours} label="HOURS" />
          <motion.div
            className="text-5xl font-bold text-purple-400 self-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            :
          </motion.div>
          <TimeCard value={minutes} label="MINUTES" />
          <motion.div
            className="text-5xl font-bold text-purple-400 self-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            :
          </motion.div>
          <TimeCard value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_36;
