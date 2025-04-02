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

const Counter_32: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isGlitching, setIsGlitching] = useState(false);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    triggerGlitch();
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    triggerGlitch();
  };

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <div className={`bg-gray-900 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-xl animate-pulse" />
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-[2px] bg-cyan-500/10"
                style={{ top: `${i * 10}%` }}
              />
            ))}
          </div>
          <motion.div
            className={`relative w-full h-full border border-cyan-500/50 rounded-lg flex items-center justify-center bg-gray-900/50 backdrop-blur-sm ${
              isGlitching ? "animate-glitch" : ""
            }`}
            animate={{
              boxShadow: isGlitching
                ? "0 0 20px rgba(34, 211, 238, 0.5), inset 0 0 20px rgba(34, 211, 238, 0.5)"
                : "0 0 10px rgba(34, 211, 238, 0.3), inset 0 0 10px rgba(34, 211, 238, 0.3)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl font-bold text-cyan-500 mix-blend-screen">
                  {count}
                </span>
                <motion.span
                  className="absolute inset-0 text-5xl font-bold text-red-500 mix-blend-screen"
                  animate={{
                    x: isGlitching ? [-2, 2, -2] : 0,
                    opacity: isGlitching ? [1, 0.5, 1] : 1,
                  }}
                  transition={{ duration: 0.2, repeat: isGlitching ? 2 : 0 }}
                >
                  {count}
                </motion.span>
                <motion.span
                  className="absolute inset-0 text-5xl font-bold text-blue-500 mix-blend-screen"
                  animate={{
                    x: isGlitching ? [2, -2, 2] : 0,
                    opacity: isGlitching ? [1, 0.5, 1] : 1,
                  }}
                  transition={{ duration: 0.2, repeat: isGlitching ? 2 : 0 }}
                >
                  {count}
                </motion.span>
              </motion.div>
            </AnimatePresence>
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
            <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md" />
            <div className="relative px-6 py-3 bg-gray-900 border border-cyan-500/50 rounded-lg text-cyan-500 text-xl">
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
            <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md" />
            <div className="relative px-6 py-3 bg-gray-900 border border-cyan-500/50 rounded-lg text-cyan-500 text-xl">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-cyan-500/70 text-sm font-light tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }
      `}</style>
    </div>
  );
};

export default Counter_32; 