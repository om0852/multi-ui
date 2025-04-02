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

const Counter_64: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isPlaying, setIsPlaying] = useState(false);

  const increment = () => {
    setIsPlaying(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsPlaying(false), 800);
  };

  const decrement = () => {
    setIsPlaying(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsPlaying(false), 800);
  };

  // Generate bars for the equalizer effect
  const bars = [...Array(12)].map((_, i) => ({
    height: isPlaying ? Math.random() * 100 : 30 + Math.sin(i * 0.5) * 20,
    delay: i * 0.05,
  }));

  return (
    <div className={`bg-gradient-to-br from-violet-900 to-purple-900 p-8 rounded-2xl shadow-xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Vinyl record display */}
        <div className="relative">
          <motion.div
            className="w-48 h-48 bg-black rounded-full shadow-2xl
                     flex items-center justify-center relative overflow-hidden"
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: isPlaying ? Infinity : 0,
            }}
          >
            {/* Vinyl grooves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-gray-800 rounded-full"
                style={{
                  margin: `${i * 8}%`,
                }}
              />
            ))}
            
            {/* Center label */}
            <div className="absolute inset-[30%] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full
                         flex items-center justify-center shadow-inner">
              <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                {count}
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Equalizer bars */}
        <div className="flex items-end space-x-1 h-16">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="w-3 bg-gradient-to-t from-purple-400 to-pink-400 rounded-t"
              animate={{
                height: `${bar.height}%`,
              }}
              transition={{
                duration: 0.4,
                delay: bar.delay,
                repeat: isPlaying ? Infinity : 0,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Control buttons */}
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full
                     text-white text-2xl shadow-lg flex items-center justify-center
                     border-2 border-purple-300/30"
            onClick={decrement}
          >
            ⏮
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full
                     text-white text-2xl shadow-lg flex items-center justify-center
                     border-2 border-purple-300/30"
            onClick={increment}
          >
            ⏭
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_64; 