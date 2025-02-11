"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_60: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress ring
    setProgress((count / (max || 100)) * 100);
  }, [count, max]);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  return (
    <div className={`bg-black p-8 rounded-full ${className}`}>
      <div className="relative w-48 h-48">
        {/* Progress Ring */}
        <svg className="w-full h-full -rotate-90 transform">
          {/* Background ring */}
          <circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-gray-800"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress ring */}
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-green-500"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-light text-white mb-1"
          >
            {count}
          </motion.div>
          <div className="text-xs text-gray-400">STEPS</div>

          {/* Control buttons */}
          <div className="flex space-x-8 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center
                       text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              onClick={decrement}
            >
              -
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center
                       text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              onClick={increment}
            >
              +
            </motion.button>
          </div>
        </div>

        {/* Time display */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>

        {/* Heart rate animation */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2
                   text-red-500 flex items-center space-x-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-xs">75</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Counter_60; 