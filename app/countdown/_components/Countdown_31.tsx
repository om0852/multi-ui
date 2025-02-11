"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_31: React.FC<CountdownProps> = ({
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
      className="flex flex-col items-center mx-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="bg-gradient-to-b from-purple-600 to-indigo-800 w-20 h-24 rounded-xl flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="text-4xl font-bold text-white"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <motion.span 
        className="text-sm text-gray-400 mt-2 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <motion.div
        className="bg-gray-900 p-8 rounded-2xl shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex">
          <TimeUnit value={hours} label="HOURS" />
          <motion.div 
            className="text-4xl font-bold text-purple-500 mx-2 self-center mb-8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            :
          </motion.div>
          <TimeUnit value={minutes} label="MINUTES" />
          <motion.div 
            className="text-4xl font-bold text-purple-500 mx-2 self-center mb-8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            :
          </motion.div>
          <TimeUnit value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_31;
