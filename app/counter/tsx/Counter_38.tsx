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

const Counter_38: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isSpinning, setIsSpinning] = useState(false);

  const increment = () => {
    if (count < max) {
      setCount(prev => Math.min(prev + step, max));
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 1000);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(prev => Math.max(prev - step, min));
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 1000);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: isSpinning ? 360 : 0,
            }}
            transition={{ duration: 1, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-16 bg-slate-600"
                style={{
                  left: "calc(50% - 8px)",
                  top: "-8px",
                  transformOrigin: "50% 100%",
                  transform: `rotate(${i * 45}deg)`,
                }}
              >
                <div className="w-4 h-4 rounded-full bg-slate-500" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-8 border-slate-600"
            animate={{
              rotate: isSpinning ? -360 : 0,
            }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                className="text-5xl font-bold text-slate-200"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex gap-4">
          <motion.button
            onClick={decrement}
            className="px-6 py-3 bg-slate-700 rounded-lg text-white text-xl shadow-lg border border-slate-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            -
          </motion.button>
          <motion.button
            onClick={increment}
            className="px-6 py-3 bg-slate-700 rounded-lg text-white text-xl shadow-lg border border-slate-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count >= max}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_38; 