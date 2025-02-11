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

const Counter_54: React.FC<CounterProps> = ({
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
    <div className={`bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-teal-100 dark:from-rose-900/20 dark:to-teal-900/20 blur-2xl opacity-50" />
          <motion.div
            key={count}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative bg-white dark:bg-zinc-800 px-8 py-4 rounded-lg shadow-sm"
          >
            <span className="text-5xl font-light text-gray-800 dark:text-gray-200">
              {count}
            </span>
          </motion.div>
        </motion.div>

        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={decrement}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={increment}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_54; 