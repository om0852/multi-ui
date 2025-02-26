"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_82: React.FC<CountdownProps> = ({
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
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const PaperNumber = ({ value, label }: { value: number; label: string }) => {
    const digits = value.toString().padStart(2, "0").split("");
    
    return (
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {digits.map((digit, index) => (
            <div key={`${index}-${digit}`} className="relative w-16 h-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={digit}
                  className="absolute inset-0 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden"
                  initial={{ rotateX: -90, y: -20, opacity: 0 }}
                  animate={{ rotateX: 0, y: 0, opacity: 1 }}
                  exit={{ rotateX: 90, y: 20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-4xl font-bold text-gray-800">{digit}</span>
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-50"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:16px_16px]" />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-500 mt-3">{label}</span>
      </div>
    );
  };

  return (
    <div className={`bg-gray-50 p-12 rounded-xl shadow-lg ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-gray-700">Paper Timer</h2>
        <div className="flex items-center space-x-6">
          <PaperNumber value={hours} label="HOURS" />
          <span className="text-4xl font-light text-gray-400 mt-[-1rem]">:</span>
          <PaperNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-light text-gray-400 mt-[-1rem]">:</span>
          <PaperNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_82; 