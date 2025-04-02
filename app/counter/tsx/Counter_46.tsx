"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const Counter_46: React.FC<CounterProps> = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  className = "",
}) => {
  const [count, setCount] = useState(initialValue);
  const dragX = useMotionValue(0);
  const dragThreshold = 50;

  // Transform drag distance to opacity for visual feedback
  const handleDragEnd = () => {
    const x = dragX.get();
    if (x > dragThreshold) {
      increment();
    } else if (x < -dragThreshold) {
      decrement();
    }
    dragX.set(0);
  };

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") increment();
      if (e.key === "ArrowLeft") decrement();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`bg-white dark:bg-zinc-900 p-10 rounded-2xl ${className}`}>
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ x: dragX }}
          className="touch-none cursor-grab active:cursor-grabbing"
        >
          <div className="relative">
            {/* Left indicator */}
            <motion.div
              className="absolute -left-6 top-1/2 -translate-y-1/2 text-sm text-zinc-400"
              style={{ opacity: useTransform(dragX, [-50, 0], [1, 0]) }}
            >
              -
            </motion.div>

            <motion.div
              className="bg-zinc-100 dark:bg-zinc-800 px-12 py-8 rounded-2xl"
              style={{
                boxShadow: useTransform(
                  dragX,
                  [-100, 0, 100],
                  [
                    "8px 8px 24px rgba(0,0,0,0.1)",
                    "0px 0px 0px rgba(0,0,0,0.1)",
                    "-8px 8px 24px rgba(0,0,0,0.1)",
                  ]
                ),
              }}
            >
              <motion.span
                key={count}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="block text-7xl font-light tracking-tight text-zinc-800 dark:text-zinc-100"
              >
                {count}
              </motion.span>
            </motion.div>

            {/* Right indicator */}
            <motion.div
              className="absolute -right-6 top-1/2 -translate-y-1/2 text-sm text-zinc-400"
              style={{ opacity: useTransform(dragX, [0, 50], [0, 1]) }}
            >
              +
            </motion.div>
          </div>
        </motion.div>

        <div className="text-sm text-zinc-400 dark:text-zinc-500">
          Drag to change • Use arrow keys
        </div>
      </div>
    </div>
  );
};

export default Counter_46; 