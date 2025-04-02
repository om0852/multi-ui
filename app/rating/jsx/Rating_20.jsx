"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SoundWaveRating = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  waveColor = "#8B5CF6",
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating;

  const generateBars = (count) => {
    const bars = [];
    for (let i = 0; i < count; i++) {
      const isActive = i < currentRating * 3;
      const height = isActive ? 40 + Math.sin(i * 0.5) * 20 : 10;
      bars.push(
        <motion.div
          key={i}
          className="w-1 mx-px rounded-full"
          style={{ backgroundColor: waveColor }}
          initial={{ height: 10, opacity: 0.3 }}
          animate={{
            height: isActive ? [height, height + 10, height] : 10,
            opacity: isActive ? 1 : 0.3,
          }}
          transition={{
            duration: 0.8,
            repeat: isActive ? Infinity : 0,
            repeatType: "reverse",
            delay: i * 0.05,
          }}
        />
      );
    }
    return bars;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-64 h-48 flex items-center justify-center bg-gray-50 rounded-xl p-4">
        <div className="flex items-center h-full">{generateBars(max * 3)}</div>
      </div>
      <motion.div
        className="text-2xl font-bold"
        style={{ color: waveColor }}
        animate={{ scale: currentRating > 0 ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        Volume: {currentRating}
      </motion.div>
      <div className="flex space-x-2">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = currentRating >= value;
          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center font-medium border-2 transition-colors"
              style={{
                backgroundColor: isActive ? waveColor : "white",
                borderColor: waveColor,
                color: isActive ? "white" : waveColor,
              }}
              disabled={disabled}
            >
              {value}
            </motion.button>
          );
        })}
      </div>
      <motion.div
        className="text-4xl"
        animate={{
          scale: currentRating > 0 ? [1, 1.2, 1] : 1,
          rotate: currentRating > 0 ? [-5, 5, -5] : 0,
        }}
        transition={{
          duration: 1,
          repeat: currentRating > 0 ? Infinity : 0,
          repeatType: "reverse",
        }}
      >
        {currentRating === 0 ? "🔇" : currentRating <= 2 ? "🔈" : currentRating <= 4 ? "🔉" : "🔊"}
      </motion.div>
    </div>
  );
};

export default SoundWaveRating;
