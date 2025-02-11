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

const Counter_57: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [powerUp, setPowerUp] = useState(false);

  const increment = () => {
    setPowerUp(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setPowerUp(false), 500);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  return (
    <div className={`bg-[#1A1B26] p-8 rounded-lg border-4 border-[#2E2F3E] ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Score Display */}
        <div className="relative">
          <AnimatePresence>
            {powerUp && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -20 }}
                exit={{ opacity: 0 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-400"
              >
                +1UP!
              </motion.div>
            )}
          </AnimatePresence>
          <div className="bg-[#2E2F3E] p-4 rounded relative overflow-hidden">
            {/* Scanlines effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent
                          opacity-20 animate-scan" />
            <motion.div
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold text-[#5AF7FF] pixel-font"
              style={{ textShadow: "2px 2px 0px #2E2F3E" }}
            >
              {count.toString().padStart(4, "0")}
            </motion.div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-red-500 rounded-lg border-b-4 border-red-700
                     text-white text-2xl font-bold shadow-lg
                     active:border-b-0 active:translate-y-1"
            onClick={decrement}
          >
            -
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-green-500 rounded-lg border-b-4 border-green-700
                     text-white text-2xl font-bold shadow-lg
                     active:border-b-0 active:translate-y-1"
            onClick={increment}
          >
            +
          </motion.button>
        </div>

        {/* Pixel Art Decorations */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-4 h-4 bg-yellow-400 rounded-sm"
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        .pixel-font {
          font-family: 'Press Start 2P', monospace;
        }
      `}</style>
    </div>
  );
};

export default Counter_57; 