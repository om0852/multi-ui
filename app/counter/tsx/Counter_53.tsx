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

const Counter_53: React.FC<CounterProps> = ({
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
    <div className={`bg-black p-8 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          className="text-7xl font-bold"
          style={{
            textShadow: "0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0",
            color: "#FF10F0"
          }}
          animate={{
            textShadow: [
              "0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0",
              "0 0 15px #FF10F0, 0 0 25px #FF10F0, 0 0 35px #FF10F0",
              "0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {count}
        </motion.div>

        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
            style={{
              boxShadow: "0 0 10px #FF10F0, 0 0 20px #FF10F0",
              border: "2px solid #FF10F0",
              color: "#FF10F0"
            }}
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
            style={{
              boxShadow: "0 0 10px #FF10F0, 0 0 20px #FF10F0",
              border: "2px solid #FF10F0",
              color: "#FF10F0"
            }}
            onClick={increment}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_53; 