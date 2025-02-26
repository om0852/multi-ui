"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_69: React.FC<CountdownProps> = ({
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

  const RollingNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      <div className="w-32 h-40 bg-gradient-to-b from-rose-500 to-pink-600 rounded-xl p-1">
        <div className="h-full bg-black rounded-lg overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1
              }}
            >
              <span className="text-5xl font-bold bg-gradient-to-b from-rose-300 to-rose-100 text-transparent bg-clip-text">
                {value.toString().padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>
          {/* Overlay gradients */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm font-medium text-rose-300 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <div className={`bg-black p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text">
          Rolling Numbers
        </h2>
        <div className="flex space-x-8">
          <RollingNumber value={hours} label="Hours" />
          <RollingNumber value={minutes} label="Minutes" />
          <RollingNumber value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_69; 