"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_68: React.FC<CountdownProps> = ({
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

  const SplitFlapNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      <div className="w-32 h-40 bg-gray-800 rounded-lg p-2">
        <div className="relative h-full bg-black rounded overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="text-5xl font-mono font-bold text-yellow-500">
                {value.toString().padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>
          {/* Split line */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gray-800 shadow-lg" />
          {/* Reflections */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
      <div className="absolute -bottom-2 inset-x-0">
        <div className="mx-auto w-28 h-1 bg-gray-800 rounded-full shadow-lg" />
      </div>
      <div className="mt-6 text-center">
        <span className="text-sm font-medium text-yellow-500/80 uppercase tracking-wider">
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
        <h2 className="text-3xl font-bold text-yellow-500">Split-Flap Display</h2>
        <div className="flex space-x-8">
          <SplitFlapNumber value={hours} label="Hours" />
          <SplitFlapNumber value={minutes} label="Minutes" />
          <SplitFlapNumber value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_68; 