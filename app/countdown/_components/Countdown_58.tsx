"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_58: React.FC<CountdownProps> = ({
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

  const HologramUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-400/30 transition-colors duration-300" />
      <motion.div
        className="relative bg-black/80 border border-cyan-500/50 rounded-lg p-6 backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="text-5xl font-bold text-cyan-400 text-center mb-2"
          style={{
            textShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={value}
        >
          {value.toString().padStart(2, "0")}
        </motion.div>
        <div className="text-xs text-cyan-300 uppercase tracking-widest text-center">
          {label}
        </div>
        <div className="absolute inset-0 border border-cyan-400/20 rounded-lg" 
             style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
      </motion.div>
    </div>
  );

  return (
    <div className={`bg-gray-900 p-16 rounded-2xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
      }} />
      <motion.div
        className="relative flex flex-col items-center space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h2
          className="text-3xl font-bold text-cyan-400"
          style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          SYSTEM COUNTDOWN
        </motion.h2>
        <div className="flex space-x-8">
          <HologramUnit value={hours} label="Hours" />
          <div className="text-cyan-400 text-4xl font-thin self-center animate-pulse">:</div>
          <HologramUnit value={minutes} label="Minutes" />
          <div className="text-cyan-400 text-4xl font-thin self-center animate-pulse">:</div>
          <HologramUnit value={seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_58; 