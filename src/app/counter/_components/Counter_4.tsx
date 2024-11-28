"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Counter_4Props {
  from?: number; // Starting value
  to: number; // Ending value
  duration?: number; // Total duration for the counter
  interval?: number; // Time between each increment
  className?: string; // Custom class for styling
  formatter?: (value: number) => string; // Function to format the number
  onComplete?: (finalValue: number) => void; // Function called when counter completes
}

const Counter_4: React.FC<Counter_4Props> = ({
  from = 0,
  to,
  duration = 5, // Total duration for the counter
  interval = 0.5, // Time interval between each flip
  className = "",
  formatter = (value) => value.toFixed(0), // Default to integer formatting
  onComplete, // Callback for when the counter completes
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
          onComplete(to); // Call onComplete when the counter finishes
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
        backgroundColor: "#1E3A8A", // Blue background
        padding: "10px 20px",
        width: "100px",
        height: "150px",
        perspective: 1000, // Perspective for 3D flipping
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleValue} // Animate only when value changes
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-500 text-4xl font-bold shadow-md rounded-lg"
        >
          {formatter(visibleValue)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Counter_4;
