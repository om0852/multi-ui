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

const Counter_37: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isPulsing, setIsPulsing] = useState(false);

  const increment = () => {
    if (count < max) {
      setCount(prev => Math.min(prev + step, max));
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 500);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(prev => Math.max(prev - step, min));
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 500);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-purple-900 to-purple-950 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"
            animate={{
              scale: isPulsing ? [1, 1.2, 1] : 1,
              opacity: isPulsing ? [0.5, 0.8, 0.5] : 0.5,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="relative w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(45deg, #2d1657 0%, #4a1f8c 100%)",
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
            }}
          >
            <div className="absolute inset-0 rounded-full border border-purple-500/30" />
            <div className="absolute inset-2 rounded-full border border-purple-500/20" />
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="relative z-10 text-5xl font-bold"
                style={{
                  color: "#fff",
                  textShadow: "0 0 10px rgba(147, 51, 234, 0.8)",
                }}
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
            className="px-6 py-3 bg-purple-700 rounded-lg text-white text-xl shadow-lg border border-purple-500/30"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            -
          </motion.button>
          <motion.button
            onClick={increment}
            className="px-6 py-3 bg-purple-700 rounded-lg text-white text-xl shadow-lg border border-purple-500/30"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)" }}
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

export default Counter_37; 