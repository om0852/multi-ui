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

const Counter_28: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    createParticles();
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    createParticles();
  };

  const createParticles = () => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * -100,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticles([]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <div className={`bg-gradient-to-br from-rose-400 to-pink-500 p-10 rounded-xl overflow-hidden ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <motion.div
            className="w-36 h-36 bg-gradient-to-br from-rose-300/80 to-pink-400/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-full" />
          </motion.div>
          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/30 rounded-full"
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="flex space-x-4">
          <motion.button
            onClick={decrement}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-rose-300/30 rounded-full blur-md" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-rose-300/80 to-pink-400/80 rounded-full flex items-center justify-center text-white text-2xl border border-white/30">
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
            <div className="absolute inset-0 bg-rose-300/30 rounded-full blur-md" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-rose-300/80 to-pink-400/80 rounded-full flex items-center justify-center text-white text-2xl border border-white/30">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-rose-100 text-sm font-light tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_28; 