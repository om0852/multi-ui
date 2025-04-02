"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  waveColor?: string;
}

const SoundWaveRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  waveColor = "#8B5CF6", // Purple
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating;

  // Generate wave bars
  const generateBars = (count: number) => {
    const bars = [];
    for (let i = 0; i < count; i++) {
      const isActive = i < currentRating * 3; // 3 bars per rating
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
      {/* Sound wave visualization */}
      <div className="w-64 h-48 flex items-center justify-center bg-gray-50 rounded-xl p-4">
        <div className="flex items-center h-full">
          {generateBars(max * 3)}
        </div>
      </div>

      {/* Volume indicator */}
      <motion.div
        className="text-2xl font-bold"
        style={{ color: waveColor }}
        animate={{
          scale: currentRating > 0 ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        Volume: {currentRating}
      </motion.div>

      {/* Rating buttons */}
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
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                font-medium border-2 transition-colors
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
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

      {/* Speaker icon */}
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