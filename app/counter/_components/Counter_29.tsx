"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_29: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [shape, setShape] = useState<"circle" | "square" | "triangle">("circle");

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setShape((prev) => (prev === "circle" ? "square" : prev === "square" ? "triangle" : "circle"));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setShape((prev) => (prev === "circle" ? "triangle" : prev === "triangle" ? "square" : "circle"));
  };

  const getShapePath = (shape: "circle" | "square" | "triangle") => {
    switch (shape) {
      case "circle":
        return "M 50 0 A 50 50 0 1 1 50 100 A 50 50 0 1 1 50 0";
      case "square":
        return "M 0 0 L 100 0 L 100 100 L 0 100 Z";
      case "triangle":
        return "M 50 0 L 100 100 L 0 100 Z";
    }
  };

  return (
    <div className={`bg-gradient-to-br from-amber-100 to-orange-100 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="160" height="160" viewBox="0 0 100 100" className="absolute">
              <motion.path
                d={getShapePath(shape)}
                fill="none"
                stroke="rgba(251, 146, 60, 0.2)"
                strokeWidth="2"
                animate={{
                  d: getShapePath(shape),
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center"
            animate={{
              borderRadius: shape === "circle" ? "50%" : shape === "square" ? "0%" : "50% 0 50% 50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="text-5xl font-bold text-white"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.span>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-sm" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg text-white text-xl">
              -
            </div>
          </motion.button>
          <motion.button
            onClick={increment}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-sm" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg text-white text-xl">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-amber-700 text-sm font-medium">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_29; 