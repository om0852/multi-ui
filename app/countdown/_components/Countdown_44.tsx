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

const Countdown_44: React.FC<CountdownProps> = ({
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

    timer = setInterval(tick, interval * 1000);
    tick();

    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor(timeLeft / 1000 / 60 / 60);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className={`${sizeClasses[size].container} bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl flex flex-col items-center justify-center`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.span
        className={`${sizeClasses[size].value} font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent`}
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className={`${sizeClasses[size].label} text-emerald-400/70`}>{label}</span>
    </motion.div>
  );

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>
        
        <div className="flex items-center gap-4">
          <TimeUnit value={hours} label="HRS" />
          <motion.span
            className={`${sizeClasses[size].separator} text-teal-400 font-light self-start mt-8`}
            animate={{
              opacity: [1, 0.3, 1],
              rotateX: [0, 180, 360]
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
            className={`${sizeClasses[size].separator} text-teal-400 font-light self-start mt-8`}
            animate={{
              opacity: [1, 0.3, 1],
              rotateX: [0, 180, 360]
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

export default Countdown_44;
