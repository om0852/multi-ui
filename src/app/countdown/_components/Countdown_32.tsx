"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_32: React.FC<CountdownProps> = ({
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

  const TimeDigit = ({ value }: { value: number }) => (
    <motion.div
      className="relative w-16 h-24"
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
        <motion.span
          key={value}
          className="text-4xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-black/10"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );

  const Separator = () => (
    <motion.div
      className="mx-2 text-3xl font-bold text-emerald-400"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    >
      :
    </motion.div>
  );

  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <motion.div
        className="bg-gray-900/90 backdrop-blur-lg p-12 rounded-2xl shadow-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="flex flex-col space-y-8">
          <motion.h2
            className="text-center text-2xl font-bold text-emerald-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Time Remaining
          </motion.h2>
          
          <div className="flex items-center justify-center">
            <TimeDigit value={hours} />
            <Separator />
            <TimeDigit value={minutes} />
            <Separator />
            <TimeDigit value={seconds} />
          </div>

          <div className="flex justify-center space-x-4">
            {["Hours", "Minutes", "Seconds"].map((label) => (
              <motion.span
                key={label}
                className="text-sm text-emerald-400/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_32;
