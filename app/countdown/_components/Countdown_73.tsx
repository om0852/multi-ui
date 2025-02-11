"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_73: React.FC<CountdownProps> = ({
  to,
  interval = 1000,
  className = "",
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setIsMounted(true);
    const totalTime = to.getTime() - Date.now();
    const timer = setInterval(() => {
      const remaining = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remaining));
      setProgress((remaining / totalTime) * 100);
      if (remaining <= 0 && onComplete) onComplete();
    }, interval);
    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="transform -rotate-90"
        >
          <circle
            cx="150"
            cy="150"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="150"
            cy="150"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: 0 }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-gray-800 font-mono">
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-500 mt-2">Time Remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown_73; 