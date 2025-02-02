"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_77: React.FC<CountdownProps> = ({
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

  const WaveNumber = ({ value, label }: { value: number; label: string }) => {
    const digits = value.toString().padStart(2, "0").split("");
    
    return (
      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {digits.map((digit, index) => (
            <motion.div
              key={`${index}-${digit}`}
              className="w-12 h-20 bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg flex items-center justify-center overflow-hidden relative"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <span className="text-4xl font-bold text-white">{digit}</span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-teal-300/30"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
        <span className="text-sm font-medium text-teal-600 mt-2">{label}</span>
      </div>
    );
  };

  return (
    <div className={`bg-white p-10 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-2xl font-bold text-teal-600">Wave Timer</h2>
        <div className="flex items-center space-x-6">
          <WaveNumber value={hours} label="HOURS" />
          <span className="text-4xl font-bold text-teal-400 mt-[-1rem]">:</span>
          <WaveNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-bold text-teal-400 mt-[-1rem]">:</span>
          <WaveNumber value={seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
};

export default Countdown_77; 