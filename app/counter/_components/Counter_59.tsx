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

const Counter_59: React.FC<CounterProps> = ({
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

  // Clouds animation
  const cloudVariants = {
    animate: {
      x: ["0%", "100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className={`bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-2xl overflow-hidden ${className}`}>
      <div className="relative">
        {/* Animated clouds */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            variants={cloudVariants}
            animate="animate"
            className="absolute top-0 w-full"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${40 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 20}px`,
                  left: `${i * 30}%`,
                  top: `${Math.random() * 40}px`,
                  opacity: 0.7,
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center space-y-6">
          {/* Temperature display */}
          <motion.div
            className="bg-white/20 backdrop-blur-md p-8 rounded-2xl
                     border border-white/30 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              key={count}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-end"
            >
              <span className="text-6xl font-light text-white">
                {count}
              </span>
              <span className="text-2xl text-white/80 mb-2 ml-1">°</span>
            </motion.div>
          </motion.div>

          {/* Control buttons */}
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full
                       border border-white/30 text-white
                       hover:bg-white/30 transition-colors"
              onClick={decrement}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full
                       border border-white/30 text-white
                       hover:bg-white/30 transition-colors"
              onClick={increment}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          </div>

          {/* Weather icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl"
          >
            {count > 0 ? "☀️" : "❄️"}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Counter_59; 