"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_54: React.FC<CountdownProps> = ({
  to,
  interval = 1000,
  className = "",
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const remaining = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remaining));
      if (remaining <= 0 && onComplete) {
        onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const FlipCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-32 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ rotateX: -180, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 180, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full transform-style-3d">
              <div className="absolute w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg flex items-center justify-center text-4xl font-bold text-white border-t-2 border-gray-700">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="absolute w-full h-1/2 top-0 bg-black/20 rounded-t-lg" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="mt-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`bg-gray-900 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-12">Countdown Timer</h2>
        <div className="flex space-x-8">
          <FlipCard value={hours} label="Hours" />
          <div className="text-4xl font-bold text-gray-600 self-center -mt-8">:</div>
          <FlipCard value={minutes} label="Minutes" />
          <div className="text-4xl font-bold text-gray-600 self-center -mt-8">:</div>
          <FlipCard value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_54; 