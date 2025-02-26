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

const Countdown_46: React.FC<CountdownProps> = ({
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
      className={`${sizeClasses[size].container} bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex flex-col items-center justify-center border-2 border-indigo-500`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
    >
      <motion.span
        className={`${sizeClasses[size].value} font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400`}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className={`${sizeClasses[size].label} text-indigo-200/80`}>{label}</span>
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
          className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>

        <div className="flex items-center gap-4">
          <TimeUnit value={hours} label="HRS" />
          <motion.span
            className={`${sizeClasses[size].separator} text-purple-300 font-light self-start`}
            animate={{
              opacity: [1, 0.3, 1],
              rotateZ: [0, 180, 360],
              scale: [1, 1.1, 1]
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
            className={`${sizeClasses[size].separator} text-purple-300 font-light self-start`}
            animate={{
              opacity: [1, 0.3, 1],
              rotateZ: [0, 180, 360],
              scale: [1, 1.1, 1]
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

export default Countdown_46;
