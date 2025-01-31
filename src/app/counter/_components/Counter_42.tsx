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

const Counter_42: React.FC<CounterProps> = ({
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
    <div className={`relative bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 p-12 rounded-2xl ${className}`}>
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-pink-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-indigo-300 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative flex flex-col items-center space-y-8">
        <motion.div
          className="backdrop-blur-xl bg-white/20 p-8 rounded-xl border border-white/30
                   shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.span
            key={count}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="block text-7xl font-light text-white"
            style={{ textShadow: "0 2px 10px rgba(255,255,255,0.3)" }}
          >
            {count}
          </motion.span>
        </motion.div>
        
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 backdrop-blur-md bg-white/10 rounded-lg
                     border border-white/30 text-white text-xl
                     hover:bg-white/20 transition-colors duration-200"
            onClick={decrement}
          >
            −
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 backdrop-blur-md bg-white/10 rounded-lg
                     border border-white/30 text-white text-xl
                     hover:bg-white/20 transition-colors duration-200"
            onClick={increment}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_42; 