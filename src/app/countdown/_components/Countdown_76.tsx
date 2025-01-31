"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_76: React.FC<CountdownProps> = ({
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

  const CubeNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-24 [transform-style:preserve-3d] group">
        <motion.div
          className="absolute inset-0 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700"
          animate={{
            rotateX: value % 2 === 0 ? 0 : 180,
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl font-bold text-white">
            {value.toString().padStart(2, "0")}
          </span>
          <div className="absolute inset-0 bg-blue-700 rounded-lg [transform:rotateX(180deg)] [backface-visibility:hidden] flex items-center justify-center">
            <span className="text-4xl font-bold text-white transform rotate-180">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
      <span className="text-sm font-medium text-blue-600 mt-2">{label}</span>
    </div>
  );

  return (
    <div className={`bg-white p-10 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">3D Cube Timer</h2>
        <div className="flex items-center space-x-6">
          <CubeNumber value={hours} label="HOURS" />
          <span className="text-4xl font-bold text-blue-400 mt-[-1rem]">:</span>
          <CubeNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-bold text-blue-400 mt-[-1rem]">:</span>
          <CubeNumber value={seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
};

export default Countdown_76; 