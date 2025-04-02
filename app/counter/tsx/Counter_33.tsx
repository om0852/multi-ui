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

const Counter_33: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isFolding, setIsFolding] = useState(false);

  const increment = () => {
    setIsFolding(true);
    setTimeout(() => {
      setCount((prev) => Math.min(prev + step, max));
      setIsFolding(false);
    }, 300);
  };

  const decrement = () => {
    setIsFolding(true);
    setTimeout(() => {
      setCount((prev) => Math.max(prev - step, min));
      setIsFolding(false);
    }, 300);
  };

  return (
    <div className={`bg-gradient-to-br from-stone-50 to-stone-100 p-10 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 bg-white rounded-lg shadow-md"
            animate={{
              rotateY: isFolding ? 90 : 0,
              originX: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200" />
            <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-white rounded-lg shadow-md overflow-hidden"
            animate={{
              rotateY: isFolding ? 0 : -90,
              originX: "100%",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100" />
            <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl font-bold text-stone-800">{count}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent rounded-lg pointer-events-none" />
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="relative px-6 py-3 bg-white rounded-lg shadow-md text-stone-800 text-xl font-medium transition-transform group-hover:-translate-y-0.5">
              -
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent rounded-lg" />
            </div>
          </motion.button>
          <motion.button
            onClick={increment}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            <div className="relative px-6 py-3 bg-white rounded-lg shadow-md text-stone-800 text-xl font-medium transition-transform group-hover:-translate-y-0.5">
              +
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent rounded-lg" />
            </div>
          </motion.button>
        </div>
        <div className="text-stone-600 text-sm font-medium">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_33; 