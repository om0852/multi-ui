"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_60: React.FC<CountdownProps> = ({
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

  const MatrixDigit = ({ value, label }: { value: number; label: string }) => {
    const generateRandomChars = () => {
      const chars = "01";
      return Array.from({ length: 20 }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
      ).join("");
    };

    return (
      <div className="relative">
        <motion.div
          className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-8"
          whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-5xl font-mono font-bold text-green-500"
                style={{ textShadow: "0 0 10px rgba(34, 197, 94, 0.5)" }}
              >
                {value.toString().padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-1000, 1000] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-green-500 font-mono text-xs whitespace-pre leading-3"
              >
                {generateRandomChars()}
              </motion.div>
            </div>
          </div>
          <div className="mt-4 text-xs text-green-400 uppercase tracking-widest text-center">
            {label}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className={`bg-black p-16 rounded-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      <motion.div
        className="relative flex flex-col items-center space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h2
          className="text-3xl font-mono font-bold text-green-500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ textShadow: "0 0 10px rgba(34, 197, 94, 0.5)" }}
        >
          SYSTEM COUNTDOWN
        </motion.h2>
        <div className="flex space-x-8">
          <MatrixDigit value={hours} label="Hours" />
          <div className="text-green-500 text-4xl font-mono self-center animate-pulse">:</div>
          <MatrixDigit value={minutes} label="Minutes" />
          <div className="text-green-500 text-4xl font-mono self-center animate-pulse">:</div>
          <MatrixDigit value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_60; 