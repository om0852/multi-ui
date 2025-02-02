"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_84: React.FC<CountdownProps> = ({
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

  const PixelNumber = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-500 rounded-lg translate-x-1 translate-y-1" />
        <motion.div
          className="relative bg-red-500 rounded-lg p-6 [image-rendering:pixelated] border-4 border-b-8 border-r-8 border-red-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="text-4xl font-bold text-white font-['Press_Start_2P'] tabular-nums"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
            key={value}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {value.toString().padStart(2, "0")}
          </motion.div>
          <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full" />
        </motion.div>
      </div>
      <span className="text-xs font-['Press_Start_2P'] text-red-500 mt-4 tracking-wider">{label}</span>
    </motion.div>
  );

  return (
    <div className={`bg-red-100 p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-['Press_Start_2P'] text-red-500 tracking-wider">
          Pixel Timer
        </h2>
        <div className="flex items-center space-x-6">
          <PixelNumber value={hours} label="HRS" />
          <span className="text-4xl font-['Press_Start_2P'] text-red-500 mt-[-2rem]">:</span>
          <PixelNumber value={minutes} label="MIN" />
          <span className="text-4xl font-['Press_Start_2P'] text-red-500 mt-[-2rem]">:</span>
          <PixelNumber value={seconds} label="SEC" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_84; 