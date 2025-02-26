"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_39: React.FC<CountdownProps> = ({
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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
    >
      <motion.div 
        className="w-28 h-36 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-4 backdrop-blur-lg"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(52, 211, 153, 0.5)"
        }}
      >
        <motion.span 
          className="text-5xl font-bold text-white mb-2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
        <span className="text-xs font-semibold text-emerald-100">{label}</span>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-900 ${className}`}>
      <motion.div
        className="p-12 rounded-3xl bg-gray-800/50 backdrop-blur-xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-center bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Countdown
        </motion.h1>
        
        <div className="flex gap-6">
          <TimeBlock value={hours} label="HOURS" />
          <motion.div
            className="text-6xl font-bold text-emerald-400 self-center"
            animate={{
              y: [0, -10, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.div>
          <TimeBlock value={minutes} label="MINUTES" />
          <motion.div
            className="text-6xl font-bold text-emerald-400 self-center"
            animate={{
              y: [0, -10, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.div>
          <TimeBlock value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_39;
