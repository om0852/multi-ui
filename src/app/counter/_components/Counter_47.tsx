"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_47: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [glitch, setGlitch] = useState(false);

  const increment = () => {
    setGlitch(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setGlitch(false), 500);
  };

  const decrement = () => {
    setGlitch(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setGlitch(false), 500);
  };

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-black p-10 rounded-lg relative overflow-hidden ${className}`}>
      {/* Hologram effect background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative flex flex-col items-center space-y-8">
        <div className="relative">
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-1 bg-cyan-500/20 blur-sm"
            />
          </div>

          {/* Main counter display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="relative"
            >
              <motion.div
                animate={glitch ? {
                  x: [0, -2, 2, -2, 0],
                  y: [0, 1, -1, 1, 0],
                } : {}}
                transition={{ duration: 0.2 }}
                className="text-8xl font-mono text-cyan-500 relative"
                style={{ textShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
              >
                {count.toString().padStart(2, "0")}
                
                {/* Glitch layers */}
                <motion.div
                  animate={glitch ? {
                    x: [-2, 2, -2],
                    opacity: [0, 1, 0],
                  } : {}}
                  className="absolute inset-0 text-red-500 opacity-0"
                  style={{ textShadow: "2px 0 #00ffff" }}
                >
                  {count.toString().padStart(2, "0")}
                </motion.div>
                <motion.div
                  animate={glitch ? {
                    x: [2, -2, 2],
                    opacity: [0, 1, 0],
                  } : {}}
                  className="absolute inset-0 text-blue-500 opacity-0"
                  style={{ textShadow: "-2px 0 #ff00ff" }}
                >
                  {count.toString().padStart(2, "0")}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Control buttons */}
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-black border border-cyan-500 rounded text-cyan-500
                     hover:bg-cyan-500/10 transition-colors relative overflow-hidden"
            onClick={decrement}
          >
            <span className="relative z-10">-</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-black border border-cyan-500 rounded text-cyan-500
                     hover:bg-cyan-500/10 transition-colors relative overflow-hidden"
            onClick={increment}
          >
            <span className="relative z-10">+</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_47; 