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

const Counter_25: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  return (
    <div className={`bg-black/90 p-12 rounded-xl border border-emerald-500/20 ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <h2 className="text-xl font-mono font-bold text-emerald-500 tracking-[0.2em]">
            SYSTEM COUNT
          </h2>
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-emerald-500/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="absolute inset-0 bg-emerald-500/20 rounded blur-md" />
          <motion.div
            className="relative bg-black/80 border-2 border-emerald-500/50 rounded p-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute top-0 left-1/2 h-1 w-12 bg-emerald-500/50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 h-1 w-12 bg-emerald-500/50 -translate-x-1/2 translate-y-1/2" />
            <div className="absolute left-0 top-1/2 w-1 h-12 bg-emerald-500/50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute right-0 top-1/2 w-1 h-12 bg-emerald-500/50 translate-x-1/2 -translate-y-1/2" />
            <motion.div
              key={count}
              className="relative z-10 font-mono text-5xl font-bold text-emerald-500 tabular-nums tracking-wider"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {count}
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(16,185,129,0.1)_50%,transparent_51%)] bg-[length:100%_4px]" />
          </motion.div>
        </motion.div>
        <div className="flex space-x-6">
          <motion.button
            onClick={decrement}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={count <= min}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded blur-sm" />
            <div className="relative px-8 py-3 bg-black/80 border border-emerald-500/50 rounded text-emerald-500 font-mono text-xl">
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
            <div className="absolute inset-0 bg-emerald-500/20 rounded blur-sm" />
            <div className="relative px-8 py-3 bg-black/80 border border-emerald-500/50 rounded text-emerald-500 font-mono text-xl">
              +
            </div>
          </motion.button>
        </div>
        <div className="font-mono text-emerald-500/70 text-sm tracking-[0.2em]">
          MIN: {min} | MAX: {max} | STEP: {step}
        </div>
      </div>
    </div>
  );
};

export default Counter_25; 