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

const Counter_23: React.FC<CounterProps> = ({
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
    <div className={`bg-gradient-to-br from-blue-600 to-purple-700 p-12 rounded-3xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-12 py-8">
            <motion.span
              key={count}
              className="block text-6xl font-light text-white"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {count}
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl" />
          </div>
        </motion.div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="relative group px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg px-6 py-3 text-white text-xl">
              -
            </div>
          </motion.button>
          <motion.button
            onClick={increment}
            className="relative group px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
            <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg px-6 py-3 text-white text-xl">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-white/70 text-sm font-light tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_23; 