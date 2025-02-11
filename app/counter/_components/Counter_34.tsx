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

interface Raindrop {
  id: number;
  x: number;
  delay: number;
}

const Counter_34: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);
  const [isRaining, setIsRaining] = useState(false);

  const createRain = () => {
    const drops = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 160,
      delay: Math.random() * 0.5,
    }));
    setRaindrops(drops);
    setIsRaining(true);
    setTimeout(() => setIsRaining(false), 1000);
  };

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    createRain();
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    createRain();
  };

  useEffect(() => {
    if (!isRaining) {
      setRaindrops([]);
    }
  }, [isRaining]);

  return (
    <div className={`bg-gradient-to-br from-sky-100 to-sky-200 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          {/* Cloud Base */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg"
            animate={{
              scale: isRaining ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-4 left-6 w-12 h-12 bg-white rounded-full" />
            <div className="absolute -top-2 left-2 w-10 h-10 bg-white rounded-full" />
            <div className="absolute -top-3 right-4 w-14 h-14 bg-white rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 rounded-full" />
            
            {/* Rain Animation */}
            <AnimatePresence>
              {isRaining && raindrops.map((drop) => (
                <motion.div
                  key={drop.id}
                  className="absolute bottom-0 w-0.5 h-3 bg-sky-400 rounded-full"
                  style={{ left: drop.x }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 100, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: drop.delay,
                    ease: "linear",
                  }}
                />
              ))}
            </AnimatePresence>

            {/* Counter Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-4xl font-bold text-sky-500">{count}</span>
              </motion.div>
            </AnimatePresence>
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
            <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-md" />
            <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 text-xl shadow-lg border border-sky-100">
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
            <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-md" />
            <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 text-xl shadow-lg border border-sky-100">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-sky-600 text-sm font-medium">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_34; 