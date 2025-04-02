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

const Counter_22: React.FC<CounterProps> = ({
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
    <div className={`bg-gray-100 p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          className="relative w-32 h-32 rounded-2xl bg-gray-100 shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span
            key={count}
            className="text-5xl font-semibold bg-gradient-to-br from-gray-600 to-gray-800 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {count}
          </motion.span>
        </motion.div>
        <div className="flex space-x-6">
          <motion.button
            onClick={decrement}
            className="w-16 h-16 rounded-2xl bg-gray-100 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] flex items-center justify-center text-2xl text-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              boxShadow: "inset 5px 5px 15px #bebebe, inset -5px -5px 15px #ffffff",
            }}
            disabled={count <= min}
          >
            -
          </motion.button>
          <motion.button
            onClick={increment}
            className="w-16 h-16 rounded-2xl bg-gray-100 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] flex items-center justify-center text-2xl text-gray-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              boxShadow: "inset 5px 5px 15px #bebebe, inset -5px -5px 15px #ffffff",
            }}
            disabled={count >= max}
          >
            +
          </motion.button>
        </div>
        <div className="text-gray-500 text-sm font-medium">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_22; 