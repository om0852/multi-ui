"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_83: React.FC<CountdownProps> = ({
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

  const HoloNumber = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300" />
        <motion.div
          className="relative w-24 h-32 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[holo_3s_linear_infinite]" />
          <motion.span
            className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 text-transparent bg-clip-text relative z-10"
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </motion.div>
      </div>
      <span className="text-sm font-medium text-cyan-300 mt-3">{label}</span>
    </motion.div>
  );

  return (
    <div className={`bg-black p-12 rounded-xl ${className}`}>
      <style jsx global>{`
        @keyframes holo {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 text-transparent bg-clip-text">
          Holographic Timer
        </h2>
        <div className="flex items-center space-x-6">
          <HoloNumber value={hours} label="HOURS" />
          <span className="text-4xl font-light text-cyan-500/30 mt-[-1rem]">:</span>
          <HoloNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-light text-cyan-500/30 mt-[-1rem]">:</span>
          <HoloNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_83; 