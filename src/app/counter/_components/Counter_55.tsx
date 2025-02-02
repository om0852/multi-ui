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

const Counter_55: React.FC<CounterProps> = ({
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
    <div className={`bg-gray-800 p-6 rounded-2xl shadow-xl ${className}`}>
      <div className="flex flex-col space-y-4">
        {/* LCD Display */}
        <div className="bg-[#9EA587] p-4 rounded-lg shadow-inner">
          <motion.div
            key={count}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-5xl text-[#2D2E27] text-right"
            style={{ fontFamily: "'Calculator', monospace" }}
          >
            {count.toString().padStart(4, " ")}
          </motion.div>
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-700 text-white py-3 rounded-lg text-2xl font-bold
                     border-b-4 border-gray-900 active:border-b-0 active:mt-1"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-700 text-white py-3 rounded-lg text-2xl font-bold
                     border-b-4 border-gray-900 active:border-b-0 active:mt-1"
            onClick={increment}
          >
            +
          </motion.button>
        </div>

        {/* Solar Panel Detail */}
        <div className="flex justify-end">
          <div className="grid grid-cols-4 gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter_55; 