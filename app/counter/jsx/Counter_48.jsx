"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Counter_48 = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isFlipping, setIsFlipping] = useState(false);

  const increment = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCount((prev) => Math.min(prev + step, max));
      setIsFlipping(false);
    }, 150);
  };

  const decrement = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCount((prev) => Math.max(prev - step, min));
      setIsFlipping(false);
    }, 150);
  };

  return (
    <div className={`bg-amber-50 p-10 rounded-lg shadow-md ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative perspective-[1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: 90 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-lg transform-style-preserve-3d relative"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <span className="relative block text-7xl font-serif text-gray-800">
                {count}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white rounded-lg text-gray-600 font-medium shadow-md hover:shadow-lg transition-shadow"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white rounded-lg text-gray-600 font-medium shadow-md hover:shadow-lg transition-shadow"
            onClick={increment}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_48;