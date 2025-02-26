"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const Countdown_41: React.FC<CountdownProps> = ({
  to,
  interval = 1,
  className = "",
  onComplete,
  size = 'md'
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  const sizeClasses = {
    sm: {
      container: 'w-20 h-24',
      time: 'text-3xl',
      label: 'text-xs',
      separator: 'text-3xl'
    },
    md: {
      container: 'w-28 h-32',
      time: 'text-4xl',
      label: 'text-sm',
      separator: 'text-4xl'
    },
    lg: {
      container: 'w-36 h-40',
      time: 'text-5xl',
      label: 'text-base',
      separator: 'text-5xl'
    }
  };

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
      initial={{ scale: 0, rotateX: -180 }}
      animate={{ scale: 1, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      <motion.div 
        className={`${sizeClasses[size].container} bg-gradient-to-tl from-violet-600 via-fuchsia-500 to-pink-500 rounded-2xl shadow-xl 
          backdrop-blur-lg border border-violet-400/20 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
          initial={false}
          animate={{
            background: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <motion.span 
            className={`${sizeClasses[size].time} font-bold text-white mb-1`}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
          <span className={`${sizeClasses[size].label} font-medium text-violet-200/80`}>
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Time Remaining
        </motion.h2>
        
        <div className="flex items-center gap-4">
          <TimeUnit value={hours} label="HRS" />
          <motion.span
            className={`${sizeClasses[size].separator} text-fuchsia-400 font-light self-start mt-8`}
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            :
          </motion.span>
          <TimeUnit value={minutes} label="MIN" />
          <motion.span
            className={`${sizeClasses[size].separator} text-fuchsia-400 font-light self-start mt-8`}
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1,
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

export default Countdown_41;
