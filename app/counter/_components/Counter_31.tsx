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

interface InkDrop {
  id: number;
  scale: number;
  rotate: number;
}

const Counter_31: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [inkDrops, setInkDrops] = useState<InkDrop[]>([]);

  const createInkDrop = () => {
    const newDrop = {
      id: Date.now(),
      scale: Math.random() * 0.5 + 0.5,
      rotate: Math.random() * 360,
    };
    setInkDrops((prev) => [...prev.slice(-4), newDrop]);
  };

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    createInkDrop();
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    createInkDrop();
  };

  return (
    <div className={`bg-white p-10 rounded-xl shadow-lg ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          {inkDrops.map((drop) => (
            <motion.div
              key={drop.id}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, rotate: drop.rotate }}
              animate={{ scale: drop.scale }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50,5 C55,5 65,25 65,45 C65,65 55,85 50,85 C45,85 35,65 35,45 C35,25 45,5 50,5Z"
                  className="fill-neutral-900"
                  transform={`rotate(${drop.rotate}, 50, 50)`}
                />
              </svg>
            </motion.div>
          ))}
          <motion.div
            className="relative w-full h-full rounded-full bg-white border-2 border-neutral-900 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="text-5xl font-bold text-neutral-900"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.span>
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
            <div className="relative px-6 py-3 bg-white border-2 border-neutral-900 rounded-lg text-neutral-900 text-xl font-medium transition-colors group-hover:bg-neutral-900 group-hover:text-white">
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
            <div className="relative px-6 py-3 bg-white border-2 border-neutral-900 rounded-lg text-neutral-900 text-xl font-medium transition-colors group-hover:bg-neutral-900 group-hover:text-white">
              +
            </div>
          </motion.button>
        </div>
        <div className="text-neutral-600 text-sm font-medium">
          Min: {min} | Max: {max} | Step: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_31; 