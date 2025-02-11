"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  interval?: number;
  className?: string;
  formatter?: (value: number) => string;
  onComplete?: (finalValue: number) => void;
}

const Counter_15: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 5,
  interval = 0.5,
  className = "",
  formatter = (value) => value.toFixed(0),
  onComplete,
}) => {
  const [visibleValue, setVisibleValue] = useState<number>(from);

  useEffect(() => {
    let counterValue = from;
    const totalIncrements = duration / interval;
    const incrementValue = (to - from) / totalIncrements;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      counterValue += incrementValue;
      setVisibleValue(Math.round(counterValue));

      if (stepCount >= totalIncrements) {
        setVisibleValue(to);
        clearInterval(timer);
        if (onComplete) onComplete(to);
      }
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [from, to, duration, interval, onComplete]);

  return (
    <div className={`relative ${className}`} style={{ width: "100px", height: "150px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleValue}
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 180, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute flex items-center justify-center text-4xl font-bold w-full h-full"
        >
          {formatter(visibleValue)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Counter_15;
