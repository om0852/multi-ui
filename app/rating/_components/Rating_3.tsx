"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
}

const EmojiRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const emojis = ["😢", "😕", "😐", "🙂", "😄"];

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex items-center space-x-4">
      {Array.from({ length: max }, (_, index) => {
        const value = index + 1;
        const isActive = (hoveredRating || rating) >= value;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(value)}
            onMouseEnter={() => !disabled && setHoveredRating(value)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            whileHover={{ scale: 1.3, rotate: [0, -15, 15, -15, 0] }}
            whileTap={{ scale: 0.8 }}
            animate={isActive ? {
              rotate: [0, 360],
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            } : {}}
            className={`text-3xl focus:outline-none ${
              disabled ? "cursor-not-allowed opacity-50" : ""
            } ${isActive ? "grayscale-0" : "grayscale"}`}
            disabled={disabled}
          >
            {emojis[index]}
          </motion.button>
        );
      })}
    </div>
  );
};

export default EmojiRating;
