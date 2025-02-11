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

const Counter_26: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [ripple, setRipple] = useState(false);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setRipple(true);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setRipple(true);
  };

  return (
    <div className={`bg-gradient-to-br from-cyan-500 to-blue-600 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-cyan-400 rounded-full"
            initial={{ scale: 1 }}
            animate={{ scale: ripple ? 1.2 : 1, opacity: ripple ? 0 : 0.2 }}
            onAnimationComplete={() => setRipple(false)}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="relative w-32 h-32 bg-gradient-to-br from-cyan-300/80 to-blue-400/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="text-4xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.span>
            </AnimatePresence>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1/6 bg-white/20 rounded-full blur-sm" />
          </motion.div>
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-cyan-400/30 rounded-lg blur-md" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 rounded-lg text-white text-xl border border-white/20">
              -
            </div>
          </motion.button>
          <motion.button
            onClick={increment}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            <div className="absolute inset-0 bg-cyan-400/30 rounded-lg blur-md" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 rounded-lg text-white text-xl border border-white/20">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-cyan-100 text-sm font-light tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_26; 