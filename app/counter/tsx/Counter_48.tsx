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

const Counter_48: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const [isFlipping, setIsFlipping] = useState(false);

  const increment = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCount((prev) => Math.min(prev + step, max));
      setIsFlipping(false);
    }, 150);
  };

  const decrement = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCount((prev) => Math.max(prev - step, min));
      setIsFlipping(false);
    }, 150);
  };

  return (
    <div className={`bg-amber-50 p-10 rounded-lg shadow-md ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative perspective-[1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: 90 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-lg p-8 shadow-lg transform-style-preserve-3d relative ${isFlipping ? 'flipping' : ''}`}
              style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Paper texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUY1RjUiPjwvcmVjdD4KPC9zdmc+')] opacity-50" />
              
              {/* Fold effect */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/[0.02] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/[0.02] to-transparent" />
              </div>
              
              <span className="relative block text-7xl font-serif text-gray-800">
                {count}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Page corners */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-bl" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tl from-transparent via-transparent to-black/10 rounded-tr" />
        </div>

        <div className="flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white rounded-lg text-gray-600 font-medium
                     shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
            onClick={decrement}
          >
            <span className="relative z-10">-</span>
            {/* Paper texture for button */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUY1RjUiPjwvcmVjdD4KPC9zdmc+')] opacity-50" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white rounded-lg text-gray-600 font-medium
                     shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
            onClick={increment}
          >
            <span className="relative z-10">+</span>
            {/* Paper texture for button */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUY1RjUiPjwvcmVjdD4KPC9zdmc+')] opacity-50" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_48; 