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

const Counter_44: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isPressed, setIsPressed] = useState<"inc" | "dec" | null>(null);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    setIsPressed("inc");
    setTimeout(() => setIsPressed(null), 100);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    setIsPressed("dec");
    setTimeout(() => setIsPressed(null), 100);
  };

  return (
    <div className={`bg-[#2A2B2E] p-8 rounded-lg border-4 border-[#1A1B1E] ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Score display */}
        <div className="bg-[#0F380F] p-6 rounded border-2 border-[#306230] shadow-inner">
          <motion.div
            key={count}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-6xl tracking-wider"
            style={{
              color: "#8BAC0F",
              textShadow: "2px 2px 0px #306230",
              fontFamily: "'Press Start 2P', monospace",
            }}
          >
            {count.toString().padStart(4, "0")}
          </motion.div>
        </div>

        {/* Control buttons */}
        <div className="flex space-x-8">
          <motion.button
            animate={{
              scale: isPressed === "dec" ? 0.9 : 1,
              backgroundColor: isPressed === "dec" ? "#9C4A00" : "#E86A17",
            }}
            className="w-16 h-16 rounded-full border-4 border-[#9C4A00] 
                     text-white text-2xl font-bold shadow-lg
                     active:border-t-2 active:border-l-2 active:shadow-inner"
            onClick={decrement}
            style={{
              boxShadow: "inset -2px -2px 0px #9C4A00, inset 2px 2px 0px #FFA559",
            }}
          >
            -
          </motion.button>
          <motion.button
            animate={{
              scale: isPressed === "inc" ? 0.9 : 1,
              backgroundColor: isPressed === "inc" ? "#9C4A00" : "#E86A17",
            }}
            className="w-16 h-16 rounded-full border-4 border-[#9C4A00]
                     text-white text-2xl font-bold shadow-lg
                     active:border-t-2 active:border-l-2 active:shadow-inner"
            onClick={increment}
            style={{
              boxShadow: "inset -2px -2px 0px #9C4A00, inset 2px 2px 0px #FFA559",
            }}
          >
            +
          </motion.button>
        </div>

        {/* Decorative pixels */}
        <div className="flex space-x-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-[#8BAC0F] rounded-sm"
              style={{
                opacity: Math.random() > 0.5 ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter_44; 