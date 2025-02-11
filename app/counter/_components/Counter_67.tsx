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

const Counter_67: React.FC<CounterProps> = ({
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
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const decrement = () => {
    setIsSpinning(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div className={`bg-gradient-to-b from-red-900 to-red-950 p-8 rounded-2xl
                   border-8 border-yellow-600 shadow-2xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Slot Machine Display */}
        <div className="relative w-64 bg-black rounded-xl p-6
                     border-4 border-yellow-600 shadow-inner">
          {/* Top Decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4
                       w-20 h-8 bg-yellow-600 rounded-full" />
          
          {/* Display Window */}
          <div className="relative h-32 bg-black rounded-lg overflow-hidden
                       border-2 border-yellow-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-[10%] bg-yellow-500"
                  style={{ top: `${i * 10}%` }}
                />
              ))}
            </div>

            {/* Number Display */}
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                key={count}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  rotateX: isSpinning ? [0, 360] : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="text-6xl font-bold text-yellow-500"
                style={{
                  textShadow: "0 0 10px rgba(234,179,8,0.5)",
                }}
              >
                {count}
              </motion.div>
            </div>

            {/* Slot Machine Lights */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  animate={{
                    opacity: isSpinning ? [0.3, 1, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Slot Machine Lever */}
        <div className="flex justify-between w-full px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ y: 20 }}
            className="w-16 h-32 relative"
            onClick={decrement}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2
                         w-8 h-8 bg-red-500 rounded-full
                         border-4 border-yellow-600" />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2
                         w-4 h-24 bg-gradient-to-b from-red-600 to-red-700
                         rounded-full" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ y: 20 }}
            className="w-16 h-32 relative"
            onClick={increment}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2
                         w-8 h-8 bg-red-500 rounded-full
                         border-4 border-yellow-600" />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2
                         w-4 h-24 bg-gradient-to-b from-red-600 to-red-700
                         rounded-full" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_67; 