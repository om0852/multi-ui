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

const Counter_63: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isSpinning, setIsSpinning] = useState(false);

  const increment = () => {
    setIsSpinning(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsSpinning(false), 500);
  };

  const decrement = () => {
    setIsSpinning(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsSpinning(false), 500);
  };

  return (
    <div className={`bg-gradient-to-br from-pink-100 to-red-100 p-8 rounded-3xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Lollipop display */}
        <div className="relative">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-pink-400 via-red-400 to-orange-400 rounded-full
                     flex items-center justify-center shadow-lg relative overflow-hidden"
            animate={{
              rotate: isSpinning ? 360 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Candy swirl pattern */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-4 bg-white/20"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </div>
            
            <motion.span
              key={count}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold text-white relative z-10"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
            >
              {count}
            </motion.span>
          </motion.div>
          
          {/* Lollipop stick */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full
                       w-4 h-24 bg-gradient-to-b from-orange-200 to-orange-300 rounded-b-xl" />
        </div>

        {/* Control buttons */}
        <div className="flex space-x-6 pt-16">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-full
                     text-white text-2xl shadow-lg flex items-center justify-center
                     border-4 border-white"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-full
                     text-white text-2xl shadow-lg flex items-center justify-center
                     border-4 border-white"
            onClick={increment}
          >
            +
          </motion.button>
        </div>

        {/* Decorative candies */}
        <div className="flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-red-400"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter_63; 