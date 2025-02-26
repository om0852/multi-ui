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

const Counter_35: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isPlaying, setIsPlaying] = useState(false);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  return (
    <div className={`bg-gradient-to-br from-zinc-800 to-zinc-900 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 bg-black rounded-full shadow-lg overflow-hidden"
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-zinc-800 rounded-full"
                style={{
                  margin: `${(i + 1) * 8}%`,
                }}
              />
            ))}
            <div className="absolute inset-[30%] bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-inner">
              <AnimatePresence mode="wait">
                <motion.span
                  key={count}
                  className="text-3xl font-bold text-white"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            className="absolute -right-4 -top-4 origin-top-right"
            animate={{
              rotate: isPlaying ? [0, 15, 0] : 0,
            }}
            transition={{ duration: 1 }}
          >
            <div className="w-16 h-2 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full transform rotate-45" />
            <div className="absolute right-0 top-0 w-4 h-4 bg-zinc-500 rounded-full border-2 border-zinc-600" />
          </motion.div>
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md" />
            <div className="relative w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-amber-500 text-xl border border-zinc-700 shadow-lg">
              -
            </div>
          </motion.button>
          <motion.button
            onClick={increment}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md" />
            <div className="relative w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-amber-500 text-xl border border-zinc-700 shadow-lg">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-amber-500/70 text-sm font-light tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_35;