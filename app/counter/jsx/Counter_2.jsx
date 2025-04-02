"use client";

import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

const Counter_2 = ({
  from = 0,
  to,
  duration = 2,
  easing = "easeInOut",
  formatter = (value) => value.toFixed(0),
  className = "",
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    const easeOption =
      typeof easing === "string" || Array.isArray(easing) ? easing : "easeInOut";

    const controls = animate(from, to, {
      duration,
      ease: easeOption,
      onUpdate: (value) => setCurrentValue(value),
      onComplete: () => {
        if (onComplete) onComplete(to, { from, to });
      },
    });

    return () => controls.stop();
  }, [from, to, duration, easing, onComplete]);

  return (
    <motion.div aria-live="polite" className={`animated-counter ${className}`}>
      {formatter(currentValue)}
    </motion.div>
  );
};

export default Counter_2;
