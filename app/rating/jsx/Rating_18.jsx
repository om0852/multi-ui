"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BatteryRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  batteryColor = "#22C55E",
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating;
  const percentage = (currentRating / max) * 100;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-48 h-24">
        <div className="absolute inset-0 rounded-2xl border-4 border-gray-300 overflow-hidden">
          <div className="h-full flex">
            {Array.from({ length: max }, (_, index) => {
              const value = index + 1;
              const isActive = currentRating >= value;
              return (
                <motion.div
                  key={index}
                  className="flex-1 border-r-2 border-gray-300 last:border-r-0"
                  style={{ backgroundColor: isActive ? batteryColor : "transparent" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />
              );
            })}
          </div>
        </div>
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-8 rounded-r-md bg-gray-300" />
        {currentRating > 0 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            ⚡
          </motion.div>
        )}
      </div>
      <motion.div
        className="text-2xl font-bold"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      >
        {Math.round(percentage)}%
      </motion.div>
      <div className="flex space-x-2">
        {Array.from({ length: max + 1 }, (_, i) => (
          <motion.button
            key={i}
            onClick={() => handleRating(i)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium border-2 transition-colors
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              ${i <= currentRating ? "bg-green-500 text-white border-green-500" : "bg-white text-gray-600 border-gray-300"}`}
            onMouseEnter={() => !disabled && setHoveredRating(i)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            disabled={disabled}
          >
            {i}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default BatteryRating;
