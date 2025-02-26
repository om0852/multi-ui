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

const Counter_56: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [liked, setLiked] = useState(false);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setLiked(true);
    setTimeout(() => setLiked(false), 1000);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setLiked(false);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <AnimatePresence>
            {liked && (
              <motion.div
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: -20 }}
                exit={{ scale: 0, y: -40 }}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2"
              >
                ❤️
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            key={count}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-semibold text-gray-700 dark:text-gray-200"
          >
            {count}
          </motion.div>
        </div>

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500"
            onClick={decrement}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full ${liked ? 'bg-blue-500 text-white' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-500'}`}
            onClick={increment}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" />
            </svg>
          </motion.button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Share the love!
        </div>
      </div>
    </div>
  );
};

export default Counter_56; 