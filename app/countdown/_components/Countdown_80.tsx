"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_80: React.FC<CountdownProps> = ({
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

  const MatrixNumber = ({ value, label }: { value: number; label: string }) => {
    const digits = value.toString().padStart(2, "0").split("");
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="flex space-x-1">
            {digits.map((digit, index) => (
              <motion.div
                key={`${index}-${digit}`}
                className="w-14 h-20 bg-black border border-green-500/20 rounded flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.span
                  className="text-4xl font-mono text-green-500 relative z-10"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={digit}
                >
                  {digit}
                </motion.span>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    initial={{ y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <span className="text-green-500/20 text-lg font-mono">
                      {Math.floor(Math.random() * 10)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
        <span className="text-xs font-mono text-green-500/70 mt-2">{label}</span>
      </div>
    );
  };

  return (
    <div className={`bg-black p-12 rounded-xl border border-green-500/20 ${className}`}>
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-mono text-green-500">Matrix Timer</h2>
        <div className="flex items-center space-x-6">
          <MatrixNumber value={hours} label="HOURS" />
          <span className="text-4xl font-mono text-green-500/50 mt-[-1rem]">:</span>
          <MatrixNumber value={minutes} label="MINUTES" />
          <span className="text-4xl font-mono text-green-500/50 mt-[-1rem]">:</span>
          <MatrixNumber value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </div>
  );
};

export default Countdown_80; 