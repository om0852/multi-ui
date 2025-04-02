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

const Counter_39: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isBouncing, setIsBouncing] = useState(false);

  const increment = () => {
    if (count < max) {
      setCount(prev => Math.min(prev + step, max));
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 500);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(prev => Math.max(prev - step, min));
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 500);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-teal-400 to-teal-600 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 bg-teal-300/30 rounded-full blur-xl"
            animate={{
              scale: isBouncing ? [1, 1.2, 0.8, 1] : 1,
              y: isBouncing ? [0, -20, 20, 0] : 0,
            }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.8, 1] }}
          />
          <motion.div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center overflow-hidden"
            animate={{
              y: isBouncing ? [0, -20, 20, 0] : 0,
              scale: isBouncing ? [1, 0.9, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.8, 1] }}
          >
            <div className="absolute top-0 left-1/2 w-20 h-20 bg-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-md" />
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="relative z-10 text-5xl font-bold text-teal-800"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
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
            className="px-6 py-3 bg-white rounded-lg text-teal-600 text-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            -
          </motion.button>
          <motion.button
            onClick={increment}
            className="px-6 py-3 bg-white rounded-lg text-teal-600 text-xl shadow-lg"
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

export default Counter_39; 