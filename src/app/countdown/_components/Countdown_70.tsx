"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_70: React.FC<CountdownProps> = ({
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
      if (remaining <= 0 && onComplete) onComplete();
    }, interval);
    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const SlideNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      <div className="w-32 h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-1">
        <div className="relative h-full bg-black rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              className="absolute inset-0"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900">
                <span className="text-5xl font-bold text-emerald-400">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent opacity-50" />
        </div>
      </div>
      {/* Base reflection */}
      <div className="absolute -bottom-4 inset-x-4">
        <div className="h-4 bg-gradient-to-b from-emerald-400/20 to-transparent rounded-b-xl" />
      </div>
      <div className="mt-8 text-center">
        <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <div className={`bg-gray-900 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-emerald-400">Slide Timer</h2>
        <div className="flex space-x-8">
          <SlideNumber value={hours} label="Hours" />
          <SlideNumber value={minutes} label="Minutes" />
          <SlideNumber value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_70; 