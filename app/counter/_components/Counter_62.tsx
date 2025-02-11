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

const Counter_62: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [splash, setSplash] = useState(false);

  const increment = () => {
    setSplash(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setSplash(false), 500);
  };

  const decrement = () => {
    setSplash(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setSplash(false), 500);
  };

  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          {/* Paint splashes */}
          {splash && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  initial={{
                    scale: 0,
                    x: 0,
                    y: 0,
                    opacity: 0.8,
                  }}
                  animate={{
                    scale: [1, 2],
                    x: Math.cos(i * 72 * Math.PI / 180) * 50,
                    y: Math.sin(i * 72 * Math.PI / 180) * 50,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: randomColor(),
                  }}
                />
              ))}
            </>
          )}

          {/* Main display */}
          <motion.div
            className="relative bg-gray-50 p-8 rounded-xl shadow-inner"
            animate={{
              scale: splash ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              key={count}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl font-bold"
              style={{
                background: `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {count}
            </motion.div>
          </motion.div>
        </div>

        {/* Paint brush buttons */}
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
            onClick={decrement}
          >
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center
                         text-white text-2xl transform rotate-45">
              -
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                         w-4 h-8 bg-gray-700 rounded-b-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
            onClick={increment}
          >
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center
                         text-white text-2xl transform rotate-45">
              +
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                         w-4 h-8 bg-gray-700 rounded-b-lg" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_62; 