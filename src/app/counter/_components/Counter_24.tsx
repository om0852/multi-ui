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

const Counter_24: React.FC<CounterProps> = ({
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
    <div className={`bg-red-100 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="absolute inset-0 bg-yellow-500 rounded-lg translate-x-2 translate-y-2" />
          <motion.div
            className="relative bg-red-500 rounded-lg p-8 border-4 border-b-8 border-r-8 border-red-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              key={count}
              className="text-5xl font-bold text-white font-['Press_Start_2P'] tabular-nums"
              style={{ textShadow: "3px 3px 0 #991b1b" }}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {count}
            </motion.div>
            <div className="absolute top-3 left-3 w-2 h-2 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>
        <div className="flex space-x-6">
          <motion.button
            onClick={decrement}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-yellow-500 rounded-lg translate-x-1 translate-y-1" />
            <div className="relative px-8 py-4 bg-red-500 rounded-lg border-4 border-b-8 border-r-8 border-red-700 text-white font-['Press_Start_2P'] text-xl">
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
            <div className="absolute inset-0 bg-yellow-500 rounded-lg translate-x-1 translate-y-1" />
            <div className="relative px-8 py-4 bg-red-500 rounded-lg border-4 border-b-8 border-r-8 border-red-700 text-white font-['Press_Start_2P'] text-xl">
              +
            </div>
          </motion.button>
        </div>
        <div className="font-['Press_Start_2P'] text-red-500 text-xs tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_24; 