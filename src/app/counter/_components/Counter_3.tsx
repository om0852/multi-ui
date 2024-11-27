"use client";

import React, { useEffect, useState } from "react";
import { motion, animate, Easing } from "framer-motion";

export interface BouncyCounterProps {
  from?: number; // Starting value (default: 0)
  to: number; // Ending value (required)
  duration?: number; // Animation duration in seconds (default: 2)
  easing?: Easing | Easing[]; // Easing type (default: easeOutBounce)
  formatter?: (value: number) => string; // Format the displayed value
  className?: string; // For styling
  onStart?: () => void; // Called when animation starts
  onEnd?: () => void; // Called when animation ends
  onComplete?: (finalValue: number, range: { from: number; to: number }) => void; // Callback with final value
}

const BouncyCounter: React.FC<BouncyCounterProps> = ({
  from = 0,
  to,
  duration = 2.5,
  easing = "easeOut", // Changed to a string for default easing
  formatter = (value) => value.toFixed(0), // Default formatter
  className = "",
  onStart,
  onEnd,
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(from);

  useEffect(() => {
    if (onStart) onStart(); // Trigger onStart when animation begins

    const controls = animate(from, to, {
      duration,
      ease: easing,
      onUpdate: (value) => setCurrentValue(value),
      onComplete: () => {
        if (onComplete) onComplete(to, { from, to });
        if (onEnd) onEnd(); // Trigger onEnd when animation completes
      },
    });

    return () => controls.stop(); // Cleanup on unmount
  }, [from, to, duration, easing, onStart, onEnd, onComplete]);

  return (
    <motion.div
      aria-live="polite"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bouncy-counter ${className} relative inline-block font-bold text-3xl`}
      style={{
        color: "white",
        textShadow: "0 0 5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.7)",
        border: "2px solid #1e90ff",
        padding: "10px 20px",
        borderRadius: "10px",
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
      }}
    >
      {formatter(currentValue)}
    </motion.div>
  );
};

export default BouncyCounter;
