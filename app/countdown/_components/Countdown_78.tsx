"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_78: React.FC<CountdownProps> = ({
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

  const GlassCard = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={value}
        >
          <span className="text-5xl font-light text-white">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs font-medium text-white/70 mt-2">{label}</span>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className={`bg-gradient-to-br from-violet-900 to-fuchsia-900 p-12 rounded-3xl ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-light text-white/90">Glass Timer</h2>
        <div className="flex items-center space-x-6">
          <GlassCard value={hours} label="HOURS" />
          <span className="text-4xl font-light text-white/50">:</span>
          <GlassCard value={minutes} label="MINUTES" />
          <span className="text-4xl font-light text-white/50">:</span>
          <GlassCard value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_78; 