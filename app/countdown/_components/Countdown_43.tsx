"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    container: "w-20 h-24",
    value: "text-3xl",
    label: "text-xs", 
    separator: "text-3xl"
  },
  md: {
    container: "w-28 h-32",
    value: "text-4xl",
    label: "text-sm",
    separator: "text-4xl"
  },
  lg: {
    container: "w-36 h-40",
    value: "text-5xl",
    label: "text-base",
    separator: "text-5xl"
  }
};

const Countdown_43: React.FC<CountdownProps> = ({
  to,
  interval = 1,
  className = "",
  onComplete,
  size = "md"
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
      initial={{ opacity: 0, rotateX: -90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200
      }}
    >
      <motion.div 
        className={`${sizeClasses[size].container} bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl flex flex-col items-center justify-center backdrop-blur-lg border border-amber-400/20 relative overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.span 
          className={`${sizeClasses[size].value} font-bold text-white relative z-10`}
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
        <motion.span 
          className={`${sizeClasses[size].label} text-amber-200 font-medium tracking-wider relative z-10`}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`flex justify-center items-center min-h-screen ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>
        
        <div className="flex items-center gap-4">
          <TimeUnit value={hours} label="HRS" />
          <motion.span
            className={`${sizeClasses[size].separator} text-orange-400 font-light self-start mt-8`}
            animate={{
              opacity: [1, 0.3, 1],
              rotateY: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.span>
          <TimeUnit value={minutes} label="MIN" />
          <motion.span
            className={`${sizeClasses[size].separator} text-orange-400 font-light self-start mt-8`}
            animate={{
              opacity: [1, 0.3, 1],
              rotateY: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.span>
          <TimeUnit value={seconds} label="SEC" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_43;
