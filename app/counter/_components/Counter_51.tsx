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

const Counter_51: React.FC<CounterProps> = ({
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
    <div className={`bg-[#0A0F2C] p-10 rounded-3xl relative overflow-hidden ${className}`}>
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating asteroids */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12"
          initial={{
            x: -50,
            y: Math.random() * 200,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: ["calc(-10% + 20px)", "calc(110% - 20px)"],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-full
                       shadow-lg transform rotate-45" />
        </motion.div>
      ))}

      <div className="relative flex flex-col items-center space-y-8">
        <motion.div
          className="bg-[#1A1F3C] p-8 rounded-2xl border border-indigo-500/30
                   shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            key={count}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <span className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500
                          bg-clip-text text-transparent"
                  style={{ textShadow: "0 0 20px rgba(99,102,241,0.3)" }}>
              {count}
            </span>
            {/* Orbit ring */}
            <motion.div
              className="absolute -inset-4 border-2 border-indigo-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-indigo-500/20 rounded-lg border border-indigo-500/30
                     text-indigo-300 backdrop-blur-sm hover:bg-indigo-500/30
                     transition-colors relative overflow-hidden group"
            onClick={decrement}
          >
            <span className="relative z-10">-</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-indigo-500/20 rounded-lg border border-indigo-500/30
                     text-indigo-300 backdrop-blur-sm hover:bg-indigo-500/30
                     transition-colors relative overflow-hidden group"
            onClick={increment}
          >
            <span className="relative z-10">+</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_51; 