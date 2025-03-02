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

const Counter_65: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isScanning, setIsScanning] = useState(false);

  const increment = () => {
    setIsScanning(true);
    setCount((prev) => Math.min(prev + step, max));
    setTimeout(() => setIsScanning(false), 1000);
  };

  const decrement = () => {
    setIsScanning(true);
    setCount((prev) => Math.max(prev - step, min));
    setTimeout(() => setIsScanning(false), 1000);
  };

  return (
    <div className={`bg-gray-900 p-8 rounded-xl border-2 border-gray-700 ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Radar Display */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full border-4 border-green-500/30" />
          <div className="absolute inset-[15%] rounded-full border-4 border-green-500/20" />
          <div className="absolute inset-[30%] rounded-full border-4 border-green-500/10" />
          
          {/* Scanning line */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[2px] h-[50%] bg-green-500 origin-bottom"
            animate={{
              rotate: isScanning ? [0, 360] : 0,
            }}
            transition={{
              duration: 2,
              ease: "linear",
            }}
            style={{
              transformOrigin: "bottom",
              boxShadow: "0 0 10px #22c55e",
            }}
          />

          {/* Count Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              key={count}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-mono text-green-500"
              style={{ textShadow: "0 0 10px #22c55e" }}
            >
              {count.toString().padStart(3, '0')}
            </motion.div>
          </div>
        </div>

        {/* Mission Status */}
        <div className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700">
          <div className="flex justify-between items-center text-xs font-mono text-green-400">
            <span>MISSION STATUS:</span>
            <span className="flex items-center">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500 mr-2"
                animate={{
                  opacity: isScanning ? [1, 0.5, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
              {isScanning ? "SCANNING" : "STANDBY"}
            </span>
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-gray-800 text-green-500 rounded-lg
                     border-2 border-green-500/30 font-mono text-sm
                     shadow-lg shadow-green-500/20"
            onClick={decrement}
          >
            DECREASE
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-gray-800 text-green-500 rounded-lg
                     border-2 border-green-500/30 font-mono text-sm
                     shadow-lg shadow-green-500/20"
            onClick={increment}
          >
            INCREASE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_65; 