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

const Counter_14: React.FC<CounterProps> = ({
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
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute flex items-center justify-center text-4xl font-bold w-full h-full"
        >
          {formatter(visibleValue)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Counter_14;
