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

const Counter_41: React.FC<CounterProps> = ({
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
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsFlipping(false), 500);
  };

  const decrement = () => {
    setIsFlipping(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsFlipping(false), 500);
  };

  return (
    <div className={`bg-gradient-to-br from-purple-900 to-indigo-900 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="perspective-[1000px] relative">
          <motion.div
            key={count}
            initial={{ rotateX: -180, opacity: 0 }}
            animate={{ 
              rotateX: isFlipping ? [0, -180, 0] : 0,
              opacity: 1
            }}
            transition={{ 
              duration: 0.5,
              rotateX: { type: "spring", stiffness: 300 }
            }}
            className="bg-gradient-to-r from-purple-400 to-indigo-400 p-8 rounded-lg
                     shadow-[0_0_20px_rgba(167,139,250,0.5)]
                     preserve-3d relative"
          >
            <div className="text-7xl font-bold text-white transform-style-preserve-3d">
              {count}
            </div>
            {/* Reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1, rotateZ: -10 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-purple-500 rounded-lg text-white font-bold
                     shadow-lg shadow-purple-500/30 hover:bg-purple-400
                     transition-colors duration-200"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotateZ: 10 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-indigo-500 rounded-lg text-white font-bold
                     shadow-lg shadow-indigo-500/30 hover:bg-indigo-400
                     transition-colors duration-200"
            onClick={increment}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_41;