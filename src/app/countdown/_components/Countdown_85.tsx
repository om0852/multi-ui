"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_85: React.FC<CountdownProps> = ({
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

  const HUDNumber = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500/20 rounded blur-md" />
        <motion.div
          className="relative bg-black/80 border-2 border-emerald-500/50 rounded p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-0 left-1/2 h-1 w-8 bg-emerald-500/50 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/2 h-1 w-8 bg-emerald-500/50 -translate-x-1/2 translate-y-1/2" />
          <div className="absolute left-0 top-1/2 w-1 h-8 bg-emerald-500/50 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-1 h-8 bg-emerald-500/50 translate-x-1/2 -translate-y-1/2" />
          <motion.div
            className="relative z-10 font-mono text-4xl font-bold text-emerald-500 tabular-nums tracking-wider"
            key={value}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {value.toString().padStart(2, "0")}
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(16,185,129,0.1)_50%,transparent_51%)] bg-[length:100%_4px]" />
        </motion.div>
      </div>
      <div className="relative mt-2">
        <span className="text-xs font-mono text-emerald-500/70 tracking-[0.2em]">{label}</span>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-[1px] bg-emerald-500/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className={`bg-black/90 p-12 rounded-xl border border-emerald-500/20 ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative">
          <h2 className="text-2xl font-mono font-bold text-emerald-500 tracking-[0.2em]">
            SYSTEM TIME
          </h2>
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-emerald-500/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div className="flex items-center space-x-6">
          <HUDNumber value={hours} label="HOURS" />
          <span className="text-4xl font-mono text-emerald-500/50 mt-[-2rem]">:</span>
          <HUDNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-mono text-emerald-500/50 mt-[-2rem]">:</span>
          <HUDNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_85; 