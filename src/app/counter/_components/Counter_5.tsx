"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Counter_5Props {
  from?: number; // Starting value
  to: number; // Ending value
  duration?: number; // Total duration for the counter
  interval?: number; // Time between each increment
  className?: string; // Custom class for styling
  formatter?: (value: number) => string; // Function to format the number
  onComplete?: (finalValue: number) => void; // Function called when counter completes
}

const Counter_5: React.FC<Counter_5Props> = ({
  from = 0,
  to,
  duration = 5,
  interval = 0.5,
  className = "",
  formatter = (value) => value.toFixed(0),
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(from);
  const [visibleValue, setVisibleValue] = useState<number>(from);

  useEffect(() => {
    let counterValue = from;
    const totalIncrements = duration / interval;
    const incrementValue = (to - from) / totalIncrements;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      counterValue += incrementValue;

      const roundedValue = Math.round(counterValue);
      setVisibleValue(roundedValue);

      if (stepCount >= totalIncrements) {
        setCurrentValue(to);
        setVisibleValue(to);
        clearInterval(timer);

        if (onComplete) {
          onComplete(to);
        }
      }
    }, interval * 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [from, to, duration, interval, onComplete]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        fontFamily: "sans-serif",
        color: "#fff",
        borderRadius: "10px",
        backgroundColor: "#1E3A8A",
        padding: "10px 20px",
        width: "100px",
        height: "150px",
        perspective: 1000, // For 3D effect
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleValue}
          initial={{ translateY: "100%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          exit={{ translateY: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 text-4xl font-bold shadow-md rounded-lg"
        >
          {formatter(visibleValue)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Counter_5;
