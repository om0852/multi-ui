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

const Counter_69: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isWorking, setIsWorking] = useState(false);

  const increment = () => {
    setIsWorking(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsWorking(false), 1000);
  };

  const decrement = () => {
    setIsWorking(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsWorking(false), 1000);
  };

  return (
    <div className={`bg-gradient-to-br from-amber-900 to-yellow-900 p-8 rounded-xl
                   border-8 border-yellow-800/50 shadow-xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Main Display */}
        <div className="relative w-64 h-64">
          {/* Background Gears */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 80 - i * 20,
                height: 80 - i * 20,
                top: 40 + i * 30,
                left: 40 + i * 30,
              }}
              animate={{
                rotate: isWorking ? 360 : 0,
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: isWorking ? Infinity : 0,
              }}
            >
              <div className="w-full h-full rounded-full border-8 border-yellow-600
                           bg-gradient-to-br from-yellow-700 to-amber-800
                           shadow-inner flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-900 rounded-full" />
                {[...Array(8)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute w-3 h-8 bg-yellow-600"
                    style={{
                      transform: `rotate(${j * 45}deg)`,
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Counter Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-20 bg-black rounded-lg border-4 border-yellow-600
                         flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.6)_70%)]" />
              <motion.span
                key={count}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-mono text-yellow-500"
                style={{ textShadow: "0 0 10px rgba(234,179,8,0.5)" }}
              >
                {count.toString().padStart(3, '0')}
              </motion.span>
            </div>
          </div>

          {/* Decorative Rivets */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-yellow-600 rounded-full
                       border-2 border-yellow-700 shadow-inner"
              style={{
                top: i < 2 ? 0 : "calc(100% - 1rem)",
                left: i % 2 === 0 ? 0 : "calc(100% - 1rem)",
              }}
            />
          ))}
        </div>

        {/* Control Levers */}
        <div className="flex space-x-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotateZ: -20 }}
            className="relative"
            onClick={decrement}
          >
            <div className="w-8 h-24 bg-gradient-to-b from-yellow-600 to-yellow-800
                         rounded-t-full rounded-b-lg shadow-lg
                         border-2 border-yellow-700">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2
                           w-10 h-10 bg-yellow-600 rounded-full
                           border-4 border-yellow-700 shadow-inner" />
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotateZ: 20 }}
            className="relative"
            onClick={increment}
          >
            <div className="w-8 h-24 bg-gradient-to-b from-yellow-600 to-yellow-800
                         rounded-t-full rounded-b-lg shadow-lg
                         border-2 border-yellow-700">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2
                           w-10 h-10 bg-yellow-600 rounded-full
                           border-4 border-yellow-700 shadow-inner" />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_69; 