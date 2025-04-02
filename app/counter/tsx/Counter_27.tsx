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

const Counter_27: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  return (
    <div className={`bg-gradient-to-br from-indigo-100 to-purple-100 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative perspective-[1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              className="w-40 h-40 [transform-style:preserve-3d]"
              initial={{ rotateX: -180 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center [backface-visibility:hidden]">
                <span className="text-5xl font-bold text-white">{count}</span>
                <div className="absolute inset-0 bg-black/10 rounded-xl" />
                <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <span className="text-5xl font-bold text-white transform rotate-180">{count}</span>
                <div className="absolute inset-0 bg-black/10 rounded-xl" />
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/30 rounded-full" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-sm" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white text-xl shadow-lg">
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
            <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-sm" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white text-xl shadow-lg">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-indigo-600 text-sm font-medium">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_27; 