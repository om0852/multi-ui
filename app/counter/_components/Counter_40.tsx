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

const Counter_40: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isGlowing, setIsGlowing] = useState(false);

  const increment = () => {
    if (count < max) {
      setCount(prev => Math.min(prev + step, max));
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(prev => Math.max(prev - step, min));
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-orange-400 to-orange-600 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.3)",
                scale: 1 + i * 0.1,
              }}
              animate={{
                rotate: isGlowing ? 360 : 0,
                opacity: isGlowing ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{
                duration: 1,
                ease: "linear",
                times: [0, 0.5, 1],
              }}
            />
          ))}
          <motion.div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center"
            animate={{
              boxShadow: isGlowing
                ? "0 0 30px rgba(255, 165, 0, 0.6)"
                : "0 0 10px rgba(255, 165, 0, 0.3)",
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-200 to-orange-300" />
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="relative z-10 text-5xl font-bold text-orange-800"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex gap-4">
          <motion.button
            onClick={decrement}
            className="px-6 py-3 bg-white rounded-lg text-orange-600 text-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            -
          </motion.button>
          <motion.button
            onClick={increment}
            className="px-6 py-3 bg-white rounded-lg text-orange-600 text-xl shadow-lg"
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

export default Counter_40; 