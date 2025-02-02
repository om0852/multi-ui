"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_67: React.FC<CountdownProps> = ({
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

  const CubeNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="relative w-32 h-32 perspective-1000">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          className="relative w-full h-full"
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          exit={{ rotateX: 90 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front face */}
          <div className="absolute inset-0 bg-indigo-600 rounded-lg flex items-center justify-center transform-gpu">
            <span className="text-4xl font-bold text-white">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          {/* Top face */}
          <div className="absolute inset-0 bg-indigo-700 rounded-lg flex items-center justify-center origin-top transform-gpu -translate-z-16 rotateX-90">
            <span className="text-4xl font-bold text-white transform rotateX-180">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          {/* Bottom face */}
          <div className="absolute inset-0 bg-indigo-500 rounded-lg flex items-center justify-center origin-bottom transform-gpu translate-z-16 rotateX-90">
            <span className="text-4xl font-bold text-white">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 text-center">
        <span className="text-sm font-medium text-indigo-300 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <div className={`bg-indigo-900 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white">Cube Timer</h2>
        <div className="flex space-x-12">
          <CubeNumber value={hours} label="Hours" />
          <CubeNumber value={minutes} label="Minutes" />
          <CubeNumber value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_67; 