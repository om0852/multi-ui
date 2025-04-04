"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Counter_49 = ({
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
    <div className={`bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl ${className}`}>
      <div className="relative">
        {/* Decorative leaves */}
        <motion.div
          className="absolute -top-4 -left-4 text-4xl transform rotate-45"
          animate={{
            rotate: [45, 50, 45],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌿
        </motion.div>
        <motion.div
          className="absolute -bottom-4 -right-4 text-4xl transform -rotate-45"
          animate={{
            rotate: [-45, -40, -45],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🌿
        </motion.div>

        <div className="flex flex-col items-center space-y-8">
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              key={count}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="block text-7xl font-light text-green-800"
            >
              {count}
            </motion.span>
          </motion.div>

          <div className="flex space-x-6">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-green-500 rounded-full text-white text-2xl shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-green-400 transition-colors relative overflow-hidden"
              onClick={decrement}
            >
              <span className="relative z-10">-</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-green-500 rounded-full text-white text-2xl shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-green-400 transition-colors relative overflow-hidden"
              onClick={increment}
            >
              <span className="relative z-10">+</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter_49;
