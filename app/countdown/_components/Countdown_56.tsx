"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_56: React.FC<CountdownProps> = ({
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

  const DigitalNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black p-4 rounded-lg">
        <motion.div
          className="font-mono text-5xl font-bold bg-gradient-to-b from-red-500 to-red-700 text-transparent bg-clip-text tracking-wider"
          style={{
            textShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
            WebkitTextStroke: "1px rgba(239, 68, 68, 0.3)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={value}
        >
          {value.toString().padStart(2, "0")}
        </motion.div>
      </div>
      <span className="mt-2 text-xs font-bold text-red-600">{label}</span>
    </div>
  );

  return (
    <div className={`bg-zinc-900 p-8 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-2xl font-bold text-red-500">DIGITAL COUNTDOWN</h2>
        <div className="flex items-center space-x-4">
          <DigitalNumber value={hours} label="HOURS" />
          <div className="text-red-500 text-4xl font-bold mb-6">:</div>
          <DigitalNumber value={minutes} label="MINUTES" />
          <div className="text-red-500 text-4xl font-bold mb-6">:</div>
          <DigitalNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_56; 