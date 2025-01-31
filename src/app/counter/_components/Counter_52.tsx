"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_52: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
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
    <div className={`bg-slate-900 p-8 rounded-lg ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl" />
          <motion.div
            className="relative bg-slate-800/80 p-6 rounded-lg border border-blue-500/30"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 left-4 h-1 w-20 bg-blue-500/50" />
            <div className="absolute bottom-0 right-4 h-1 w-20 bg-blue-500/50" />
            <motion.div
              key={count}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-mono text-blue-400"
            >
              {count.toString().padStart(3, "0")}
            </motion.div>
          </motion.div>
        </div>

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-blue-500/20 rounded border border-blue-500/30 text-blue-400"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-blue-500/20 rounded border border-blue-500/30 text-blue-400"
            onClick={increment}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_52; 