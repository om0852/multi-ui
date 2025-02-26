"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_38: React.FC<CountdownProps> = ({
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
      className="relative"
      initial={{ scale: 0, rotateY: -180 }}
      animate={{ scale: 1, rotateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
    >
      <motion.div 
        className="w-28 h-36 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center backdrop-blur-lg relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="absolute inset-0 bg-white/10"
          animate={{
            background: [
              "rgba(255,255,255,0.1)",
              "rgba(255,255,255,0.2)",
              "rgba(255,255,255,0.1)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            className="text-5xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <span className="text-xs font-semibold text-emerald-200 mt-2">{label}</span>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen bg-gray-900 flex items-center justify-center ${className}`}>
      <motion.div
        className="p-12 rounded-3xl bg-gray-800/50 backdrop-blur-xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <motion.h2
          className="text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>
        
        <div className="flex gap-6">
          <TimeUnit value={hours} label="HOURS" />
          <motion.div
            className="text-6xl text-emerald-400 self-center font-thin"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.6, 1],
              rotateZ: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.div>
          <TimeUnit value={minutes} label="MINUTES" />
          <motion.div
            className="text-6xl text-emerald-400 self-center font-thin"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.6, 1],
              rotateZ: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.div>
          <TimeUnit value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_38;
