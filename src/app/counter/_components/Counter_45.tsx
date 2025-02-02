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

const Counter_45: React.FC<CounterProps> = ({
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

  const cloudVariants = {
    animate: {
      x: ["0%", "100%", "0%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className={`bg-gradient-to-b from-sky-400 to-blue-500 p-10 rounded-2xl overflow-hidden ${className}`}>
      <div className="relative">
        {/* Animated clouds */}
        <div className="absolute inset-0 opacity-50">
          <motion.div
            variants={cloudVariants}
            animate="animate"
            className="absolute top-0 left-0 w-full"
          >
            <svg className="fill-white/30" viewBox="0 0 100 20">
              <path d="M0 20 Q25 0 50 20 Q75 0 100 20 L100 0 L0 0 Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={cloudVariants}
            animate="animate"
            className="absolute bottom-0 left-0 w-full"
          >
            <svg className="fill-white/20" viewBox="0 0 100 20">
              <path d="M0 0 Q25 20 50 0 Q75 20 100 0 L100 20 L0 20 Z" />
            </svg>
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center space-y-8">
          <motion.div
            className="bg-white/20 backdrop-blur-lg p-8 rounded-full border border-white/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              key={count}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="block text-6xl font-light text-white"
              style={{ textShadow: "0 2px 10px rgba(255,255,255,0.3)" }}
            >
              {count}
            </motion.span>
          </motion.div>

          <div className="flex space-x-6">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30
                       text-white text-2xl shadow-lg hover:bg-white/30 transition-colors"
              onClick={decrement}
            >
              ☁️
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30
                       text-white text-2xl shadow-lg hover:bg-white/30 transition-colors"
              onClick={increment}
            >
              ☀️
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter_45;