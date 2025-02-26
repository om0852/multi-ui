"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_55: React.FC<CountdownProps> = ({
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

  const CircularProgress = ({ value, max, label }: { value: number; max: number; label: string }) => {
    const radius = 50;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / max) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
            <circle
              stroke="#1a1a1a"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <motion.circle
              stroke="currentColor"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="text-emerald-500 transition-all duration-500 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              key={value}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-bold text-white"
            >
              {value.toString().padStart(2, "0")}
            </motion.span>
          </div>
        </div>
        <span className="mt-2 text-sm font-medium text-gray-400">{label}</span>
      </div>
    );
  };

  return (
    <div className={`bg-gray-800 p-12 rounded-2xl ${className}`}>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-12">Time Remaining</h2>
        <div className="flex space-x-12">
          <CircularProgress value={hours} max={24} label="HOURS" />
          <CircularProgress value={minutes} max={60} label="MINUTES" />
          <CircularProgress value={seconds} max={60} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_55; 