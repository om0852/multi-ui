"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_36: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);

  const increment = () => {
    if (count < max) {
      setCount(prev => Math.min(prev + step, max));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(prev => Math.max(prev - step, min));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-sky-400 to-sky-600 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 bg-sky-300/30 rounded-full"
            animate={{
              scale: isAnimating ? [1, 1.2, 1] : 1,
              opacity: isAnimating ? [0.5, 0.8, 0.5] : 0.5,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="relative w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden"
            animate={{
              y: isAnimating ? [0, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute bottom-0 w-full bg-sky-400"
              style={{
                height: `${(count / max) * 100}%`,
              }}
              animate={{
                height: `${(count / max) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-sky-300/50 rounded-full" />
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="relative z-10 text-5xl font-bold text-sky-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex gap-4">
          <motion.button
            onClick={decrement}
            className="px-6 py-3 bg-white rounded-lg text-sky-600 text-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            -
          </motion.button>
          <motion.button
            onClick={increment}
            className="px-6 py-3 bg-white rounded-lg text-sky-600 text-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_36; 