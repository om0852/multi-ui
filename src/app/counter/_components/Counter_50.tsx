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

const Counter_50: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isPlaying, setIsPlaying] = useState(true);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setIsPlaying(true);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setIsPlaying(true);
  };

  return (
    <div className={`bg-gradient-to-br from-purple-900 to-indigo-900 p-10 rounded-2xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          {/* Vinyl record */}
          <motion.div
            className="w-48 h-48 bg-black rounded-full relative"
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Record grooves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-gray-800 rounded-full"
                style={{
                  margin: `${(i + 1) * 8}px`,
                }}
              />
            ))}
            
            {/* Center label */}
            <div className="absolute inset-0 m-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full
                          flex items-center justify-center shadow-inner">
              <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold text-white"
              >
                {count}
              </motion.span>
            </div>

            {/* Record shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-transparent rounded-full" />
          </motion.div>

          {/* Tonearm */}
          <motion.div
            className="absolute -right-8 -top-8 w-24 h-4 bg-gradient-to-r from-gray-300 to-gray-400
                     origin-right rounded-full"
            animate={{
              rotate: isPlaying ? [20, 25, 20] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute right-0 top-1/2 w-3 h-3 bg-gray-300 rounded-full transform -translate-y-1/2" />
          </motion.div>
        </div>

        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-purple-500 rounded-full text-white text-xl
                     shadow-lg shadow-purple-500/30 flex items-center justify-center
                     hover:bg-purple-400 transition-colors"
            onClick={decrement}
          >
            ⏮
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-purple-500 rounded-full text-white text-xl
                     shadow-lg shadow-purple-500/30 flex items-center justify-center
                     hover:bg-purple-400 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? "⏸" : "▶"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-purple-500 rounded-full text-white text-xl
                     shadow-lg shadow-purple-500/30 flex items-center justify-center
                     hover:bg-purple-400 transition-colors"
            onClick={increment}
          >
            ⏭
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_50; 