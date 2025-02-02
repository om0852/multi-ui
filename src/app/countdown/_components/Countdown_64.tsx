"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_64: React.FC<CountdownProps> = ({
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

  const NeonNumber = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="absolute inset-0 bg-purple-500 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      <motion.div
        className="relative bg-black p-6 rounded-lg border border-purple-500"
        animate={{
          boxShadow: ["0 0 20px rgba(168, 85, 247, 0.4)", "0 0 40px rgba(168, 85, 247, 0.2)"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.span
          className="block text-6xl font-bold text-purple-500"
          style={{ textShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={value}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-purple-300 mt-2 block text-center">{label}</span>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`bg-black p-12 rounded-xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-purple-500" style={{ textShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }}>
          Neon Timer
        </h2>
        <div className="flex space-x-6">
          <NeonNumber value={hours} label="HOURS" />
          <NeonNumber value={minutes} label="MINUTES" />
          <NeonNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_64; 