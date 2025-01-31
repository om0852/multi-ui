"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_72: React.FC<CountdownProps> = ({
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

  const FlipCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-32">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ rotateX: -90, position: "absolute" }}
            animate={{ rotateX: 0 }}
            exit={{ rotateX: 90 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full bg-orange-900 rounded-lg shadow-lg flex items-center justify-center perspective-1000"
          >
            <div className="text-4xl font-bold font-mono text-orange-100">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="absolute w-full h-[1px] bg-black/20 top-1/2" />
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="text-sm font-bold text-orange-800 mt-2">{label}</span>
    </div>
  );

  return (
    <div className={`bg-orange-100 p-10 rounded-xl shadow-2xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold text-orange-900">Retro Flip Clock</h2>
        <div className="flex space-x-6">
          <FlipCard value={hours} label="HOURS" />
          <FlipCard value={minutes} label="MINUTES" />
          <FlipCard value={seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
};

export default Countdown_72; 