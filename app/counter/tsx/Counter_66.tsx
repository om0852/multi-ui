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

const Counter_66: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isChanging, setIsChanging] = useState(false);

  const increment = () => {
    setIsChanging(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsChanging(false), 500);
  };

  const decrement = () => {
    setIsChanging(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsChanging(false), 500);
  };

  return (
    <div className={`bg-gradient-to-b from-gray-700 to-gray-800 p-8 rounded-3xl ${className}`}>
      <div className="flex flex-col items-center">
        {/* TV Set */}
        <div className="relative w-64 h-56 bg-gray-900 rounded-2xl overflow-hidden
                     border-8 border-gray-800 shadow-xl">
          {/* TV Screen */}
          <div className="absolute inset-0 bg-black">
            {/* Scan lines effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)]
                         bg-[length:100%_4px]" />
            
            {/* Screen content */}
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: isChanging ? [0, -10, 0] : 0
                }}
                className="text-6xl font-mono text-green-400"
                style={{ 
                  textShadow: "0 0 10px #4ade80, 0 0 20px #4ade80",
                  filter: "brightness(1.2) contrast(1.1)"
                }}
              >
                {count}
              </motion.div>
            </div>

            {/* CRT flicker effect */}
            <motion.div
              className="absolute inset-0 bg-white/5"
              animate={{
                opacity: [0.1, 0.12, 0.1],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* TV Details */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-700" />
            ))}
          </div>
        </div>

        {/* TV Stand */}
        <div className="w-32 h-8 bg-gray-800 mt-2 rounded-lg" />

        {/* Control Panel */}
        <div className="flex space-x-8 mt-6">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-700
                     flex items-center justify-center shadow-lg
                     text-gray-400 hover:text-gray-300"
            onClick={decrement}
          >
            <div className="w-8 h-2 bg-gray-600 rounded-full" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-700
                     flex items-center justify-center shadow-lg
                     text-gray-400 hover:text-gray-300"
            onClick={increment}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-2 h-8 bg-gray-600 rounded-full" />
              <div className="w-8 h-2 bg-gray-600 rounded-full absolute" />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_66; 