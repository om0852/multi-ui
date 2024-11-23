"use client";

import React, { useEffect, useState } from "react";
import { motion, animate, Easing } from "framer-motion";

export interface AnimatedCounterProps {
  from?: number; // Starting value (default: 0)
  to: number; // Ending value (required)
  duration?: number; // Animation duration in seconds (default: 2)
  easing?: Easing | Easing[]; // Easing type (default: "easeInOut")
  formatter?: (value: number) => string; // Format the displayed value
  className?: string; // For styling
  onComplete?: (finalValue: number, range: { from: number; to: number }) => void; // Callback with details
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  easing = "easeInOut",
  formatter = (value) => value.toFixed(0), // Default formatter for integers
  className = "",
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(from);

  useEffect(() => {
    // Ensure the easing is valid, fallback to "easeInOut" if invalid
    const easeOption: Easing | Easing[] =
      typeof easing === "string" || Array.isArray(easing) ? easing : "easeInOut";

    const controls = animate(from, to, {
      duration,
      ease: easeOption,
      onUpdate: (value) => setCurrentValue(value),
      onComplete: () => {
        if (onComplete) onComplete(to, { from, to });
      },
    });

    return () => controls.stop(); // Cleanup animation on unmount
  }, [from, to, duration, easing, onComplete]);

  return (
    <motion.div
      aria-live="polite"
      className={`animated-counter ${className}`}
    >
      {/* Ensure the formatter is properly applied */}
      {formatter(currentValue)}
    </motion.div>
  );
};

export default AnimatedCounter;
