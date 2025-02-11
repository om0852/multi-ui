"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    container: "w-16 h-20",
    value: "text-2xl",
    label: "text-xs",
    separator: "text-2xl"
  },
  md: {
    container: "w-24 h-28",
    value: "text-3xl",
    label: "text-sm",
    separator: "text-3xl"
  },
  lg: {
    container: "w-32 h-36",
    value: "text-4xl",
    label: "text-base",
    separator: "text-4xl"
  }
};

const Countdown_48: React.FC<CountdownProps> = ({
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
        onComplete();
      }
    };

    tick();
    timer = setInterval(tick, interval * 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor(timeLeft / 1000 / 60 / 60);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <motion.div
      className={`${sizeClasses[size].container} bg-gray-900 rounded-xl flex flex-col items-center justify-center border-4 border-gray-700`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.span
        className={`${sizeClasses[size].value} font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className={`${sizeClasses[size].label} text-gray-500`}>{label}</span>
    </motion.div>
  );

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Countdown Timer
        </motion.h2>

        <div className="flex items-center gap-4">
          <TimeUnit value={hours} label="HRS" />
          <motion.span
            className={`${sizeClasses[size].separator} text-gray-400 font-light`}
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.span>
          <TimeUnit value={minutes} label="MIN" />
          <motion.span
            className={`${sizeClasses[size].separator} text-gray-400 font-light`}
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2.5,
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

export default Countdown_48;
