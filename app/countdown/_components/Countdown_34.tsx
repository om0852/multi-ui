"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_34: React.FC<CountdownProps> = ({
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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-xl backdrop-blur-lg"
        initial={{ rotateY: 180, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            className="block text-6xl font-bold text-white text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-2xl"
          animate={{
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
      <motion.span
        className="block text-sm font-medium text-gray-300 text-center mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );

  return (
    <div className={`min-h-screen bg-gray-900 flex items-center justify-center ${className}`}>
      <motion.div
        className="p-12 rounded-3xl bg-gray-800/50 backdrop-blur-xl shadow-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>
        
        <div className="flex gap-8">
          <TimeUnit value={hours} label="HOURS" />
          <motion.span
            className="text-5xl text-purple-400 self-center"
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
          <TimeUnit value={minutes} label="MINUTES" />
          <motion.span
            className="text-5xl text-purple-400 self-center"
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
          <TimeUnit value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_34;
