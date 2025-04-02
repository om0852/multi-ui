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

const Counter_68: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isBubbling, setIsBubbling] = useState(false);

  const increment = () => {
    setIsBubbling(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsBubbling(false), 1000);
  };

  const decrement = () => {
    setIsBubbling(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsBubbling(false), 1000);
  };

  // Generate bubbles
  const bubbles = [...Array(8)].map((_, i) => ({
    size: Math.random() * 16 + 8,
    delay: i * 0.2,
    duration: Math.random() * 1 + 1,
  }));

  return (
    <div className={`bg-gradient-to-br from-emerald-900 to-teal-900 p-8 rounded-xl
                   border-4 border-emerald-700/50 shadow-xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Lab Equipment Display */}
        <div className="relative">
          {/* Test Tube Rack */}
          <div className="w-64 h-12 bg-gray-800 rounded-lg" />
          
          {/* Test Tube */}
          <div className="relative mx-auto w-32 h-64 overflow-hidden">
            <div className="absolute bottom-0 w-full h-full
                         bg-gradient-to-t from-emerald-400/90 to-emerald-300/90
                         rounded-b-3xl rounded-t-xl
                         border-4 border-gray-300/30">
              
              {/* Bubbles */}
              {isBubbling && bubbles.map((bubble, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 rounded-full bg-white/30"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: "-100%",
                    opacity: [0, 1, 0],
                    x: ["0%", bubble.size % 2 === 0 ? "50%" : "-50%", "0%"],
                  }}
                  transition={{
                    duration: bubble.duration,
                    delay: bubble.delay,
                    repeat: Infinity,
                  }}
                  style={{
                    width: bubble.size,
                    height: bubble.size,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}

              {/* Count Display */}
              <motion.div
                key={count}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <span className="text-6xl font-bold text-white mix-blend-overlay"
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
                  {count}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Measurement Lines */}
          <div className="absolute right-0 inset-y-0 w-6 flex flex-col justify-between py-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-1">
                <div className="w-2 h-[2px] bg-gray-300/50" />
                <div className="text-xs text-gray-300/50">{20 * (5 - i)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-emerald-800 text-emerald-100 rounded-lg
                     border-2 border-emerald-600/30 font-mono
                     shadow-lg shadow-emerald-900/30"
            onClick={decrement}
          >
            H-
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-emerald-800 text-emerald-100 rounded-lg
                     border-2 border-emerald-600/30 font-mono
                     shadow-lg shadow-emerald-900/30"
            onClick={increment}
          >
            H+
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_68; 