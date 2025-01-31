"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_66: React.FC<CountdownProps> = ({
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

  const BookPage = ({ value, label }: { value: number; label: string }) => (
    <div className="relative w-32 h-48 perspective-1000">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          className="absolute inset-0"
          initial={{ rotateY: -180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 180, opacity: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-4 backface-hidden">
            <div className="h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-md flex flex-col items-center justify-center border-r border-amber-200 shadow-inner">
              <motion.span
                className="text-4xl font-serif text-amber-800"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                {value.toString().padStart(2, "0")}
              </motion.span>
              <span className="text-sm text-amber-600 mt-2 font-serif">{label}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-amber-800/5 rounded-lg transform rotateY-180 backface-hidden" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-amber-100/50 to-transparent rounded-r-lg" />
    </div>
  );

  return (
    <div className={`bg-amber-50 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-serif text-amber-800">Book Timer</h2>
        <div className="flex space-x-8">
          <BookPage value={hours} label="HOURS" />
          <BookPage value={minutes} label="MINUTES" />
          <BookPage value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_66; 