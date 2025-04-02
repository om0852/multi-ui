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

const Counter_61: React.FC<CounterProps> = ({
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
    }, 300);
  };

  const decrement = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCount((prev) => Math.max(prev - step, min));
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className={`bg-[#F5EBE0] p-8 rounded-xl shadow-xl ${className}`}>
      <div className="flex flex-col items-center space-y-6">
        <div className="relative perspective-[1000px]">
          {/* Book cover */}
          <div className="relative w-48 h-64 bg-[#8B4513] rounded-lg shadow-2xl
                       transform-style-preserve-3d">
            {/* Book spine effect */}
            <div className="absolute inset-y-0 left-0 w-4 bg-[#6B3410] rounded-l-lg transform -translate-x-2" />
            
            {/* Page display */}
            <div className="absolute inset-4 bg-[#FFF8DC] rounded shadow-inner overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={count}
                  initial={{ rotateY: isFlipping ? -180 : 0 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 180 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center transform-style-preserve-3d"
                >
                  <span className="text-6xl font-serif text-[#4A3728]">{count}</span>
                  {/* Page texture */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGOERDIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUYwREMiPjwvcmVjdD4KPC9zdmc+')] opacity-50" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Book decorations */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2
                         w-16 h-2 bg-[#C4A484] rounded"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2
                         w-16 h-2 bg-[#C4A484] rounded"></div>
          </div>
        </div>

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#8B4513] text-[#FFF8DC] rounded-lg
                     shadow-md hover:bg-[#6B3410] transition-colors"
            onClick={decrement}
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#8B4513] text-[#FFF8DC] rounded-lg
                     shadow-md hover:bg-[#6B3410] transition-colors"
            onClick={increment}
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Counter_61; 