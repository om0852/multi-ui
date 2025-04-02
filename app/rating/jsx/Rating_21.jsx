"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LoadingBarRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  barColor = "#EC4899",
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
    <div className="flex flex-col items-center space-y-6">
      <div className="w-64 bg-gray-100 rounded-full h-6 relative overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: barColor }}
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {currentRating > 0 && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-sm font-bold"
            style={{ color: percentage > 50 ? "white" : "#374151" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(percentage)}%
          </motion.span>
        </div>
      </div>
      <div className="w-64 flex justify-between px-1">
        {Array.from({ length: max + 1 }, (_, i) => (
          <motion.div
            key={i}
            className="w-1 h-3 rounded-full bg-gray-300"
            animate={{
              backgroundColor: i <= currentRating ? barColor : "#D1D5DB",
              scale: i === currentRating ? [1, 1.5, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <div className="flex space-x-2">
        {Array.from({ length: max + 1 }, (_, index) => (
          <motion.button
            key={index}
            onClick={() => handleRating(index)}
            onMouseEnter={() => !disabled && setHoveredRating(index)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors"
            style={{
              backgroundColor: index <= currentRating ? barColor : "#F3F4F6",
              color: index <= currentRating ? "white" : "#6B7280",
              border: `2px solid ${index <= currentRating ? barColor : "#E5E7EB"}`,
            }}
            disabled={disabled}
          >
            {index}
          </motion.button>
        ))}
      </div>
      <motion.div
        className="text-lg font-medium"
        style={{ color: barColor }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 0.3 }}
      >
        {currentRating === 0
          ? "Not started"
          : currentRating <= max * 0.25
          ? "Starting..."
          : currentRating <= max * 0.5
          ? "In progress"
          : currentRating <= max * 0.75
          ? "Almost there"
          : "Complete!"}
      </motion.div>
    </div>
  );
};

export default LoadingBarRating;
