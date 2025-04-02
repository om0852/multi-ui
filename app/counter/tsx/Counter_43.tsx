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

const Counter_43: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0 });

  const increment = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setCount((prev) => Math.max(prev - step, min));
  };

  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          className="bg-blue-500 p-8 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="block text-6xl font-medium text-white"
          >
            {count}
          </motion.span>
        </motion.div>
        
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ elevation: 8 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 bg-red-500 rounded-full text-white text-2xl
                     shadow-md overflow-hidden"
            onClick={decrement}
          >
            <span className="relative z-10">-</span>
            <motion.div
              key={count + "dec"}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-white/30 w-4 h-4 rounded-full"
              style={{
                left: ripplePos.x - 8,
                top: ripplePos.y - 8,
              }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ elevation: 8 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 bg-green-500 rounded-full text-white text-2xl
                     shadow-md overflow-hidden"
            onClick={increment}
          >
            <span className="relative z-10">+</span>
            <motion.div
              key={count + "inc"}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-white/30 w-4 h-4 rounded-full"
              style={{
                left: ripplePos.x - 8,
                top: ripplePos.y - 8,
              }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_43; 