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

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const Counter_30: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isAttracting, setIsAttracting] = useState(false);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setIsAttracting(true);
    createParticles();
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setIsAttracting(true);
    createParticles();
  };

  const createParticles = () => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 360,
      y: Math.random() * 360,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 0.5 + 0.5,
    }));
    setParticles(newParticles);
  };

  useEffect(() => {
    if (isAttracting) {
      const timer = setTimeout(() => {
        setIsAttracting(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAttracting]);

  return (
    <div className={`bg-gradient-to-br from-violet-900 to-indigo-900 p-10 rounded-xl overflow-hidden ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-2xl pulse" />
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center border border-white/20"
            animate={{
              scale: isAttracting ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full" />
          </motion.div>
          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute bg-white rounded-full"
                style={{
                  width: particle.size,
                  height: particle.size,
                }}
                initial={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 1,
                }}
                animate={{
                  x: isAttracting ? 80 : particle.x,
                  y: isAttracting ? 80 : particle.y,
                  opacity: isAttracting ? 0 : 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: particle.duration,
                  ease: "easeInOut",
                }}
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
            <div className="absolute inset-0 bg-violet-500/20 rounded-lg blur-md" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg text-white text-xl border border-white/20">
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
            <div className="absolute inset-0 bg-violet-500/20 rounded-lg blur-md" />
            <div className="relative px-6 py-3 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg text-white text-xl border border-white/20">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-violet-200 text-sm font-light tracking-wider">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        .pulse {
          animation: pulse 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Counter_30; 