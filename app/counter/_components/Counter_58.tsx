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

const Counter_58: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCursor(c => !c);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const increment = () => {
    const newCount = Math.min(count + step, max);
    setHistory(prev => [...prev, `$ increment(${count}) → ${newCount}`]);
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = Math.max(count - step, min);
    setHistory(prev => [...prev, `$ decrement(${count}) → ${newCount}`]);
    setCount(newCount);
  };

  return (
    <div className={`bg-black p-6 rounded-lg font-mono text-sm ${className}`}>
      <div className="flex flex-col space-y-2">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-400 text-xs ml-2">counter@localhost:~</span>
        </div>

        {/* Command History */}
        <div className="space-y-1">
          <AnimatePresence>
            {history.slice(-5).map((cmd, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400"
              >
                {cmd}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Current Value Display */}
        <div className="flex items-center text-white">
          <span className="text-green-400">→</span>
          <span className="ml-2">
            {count}
            {cursor && <span className="ml-1 opacity-50">_</span>}
          </span>
        </div>

        {/* Control Buttons */}
        <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-800">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1 bg-gray-800 text-gray-300 rounded
                     hover:bg-gray-700 hover:text-white transition-colors"
            onClick={decrement}
          >
            DEC
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1 bg-gray-800 text-gray-300 rounded
                     hover:bg-gray-700 hover:text-white transition-colors"
            onClick={increment}
          >
            INC
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_58;