"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_70: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [time, setTime] = useState(new Date());
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl
                   border-8 border-gray-700 shadow-xl ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Watch Face */}
        <div className="relative w-64 h-48 bg-black rounded-lg p-4
                     border-4 border-gray-600">
          {/* Digital Display */}
          <div className="h-full flex flex-col justify-between">
            {/* Time Display */}
            <div className="text-center font-mono text-green-500 text-sm opacity-70">
              {time.toLocaleTimeString()}
            </div>

            {/* Main Counter Display */}
            <motion.div
              key={count}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                filter: isChanging ? "brightness(1.5)" : "brightness(1)"
              }}
            >
              {/* Seven-segment style display */}
              <div className="font-mono text-6xl text-green-500
                           tracking-wider font-bold"
                   style={{ 
                     textShadow: "0 0 10px #22c55e",
                     fontFamily: "'Digital-7', monospace"
                   }}>
                {count.toString().padStart(3, '0')}
              </div>
            </motion.div>

            {/* Mode Indicator */}
            <div className="flex justify-between text-xs font-mono text-green-500/70">
              <span>COUNT</span>
              <span className="animate-pulse">●</span>
            </div>
          </div>

          {/* Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5" />
        </div>

        {/* Watch Band Top */}
        <div className="w-72 h-8 bg-gradient-to-b from-gray-700 to-gray-800
                     rounded-t-lg transform -translate-y-2" />

        {/* Control Buttons */}
        <div className="flex justify-between w-full px-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700
                     border-4 border-gray-600 shadow-lg
                     flex items-center justify-center"
            onClick={decrement}
          >
            <span className="text-green-500 text-xl">-</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700
                     border-4 border-gray-600 shadow-lg
                     flex items-center justify-center"
            onClick={increment}
          >
            <span className="text-green-500 text-xl">+</span>
          </motion.button>
        </div>

        {/* Watch Band Bottom */}
        <div className="w-72 h-8 bg-gradient-to-b from-gray-800 to-gray-700
                     rounded-b-lg transform translate-y-2" />
      </div>
    </div>
  );
};

export default Counter_70; 