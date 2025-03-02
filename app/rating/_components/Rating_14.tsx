"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  keyColor?: string;
  textColor?: string;
}

const KeyboardRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  keyColor = "#1F2937", // Dark gray
  textColor = "#FFFFFF",
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [pressedKey, setPressedKey] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    setPressedKey(value);
    setTimeout(() => setPressedKey(null), 200);
    if (onRatingChange) onRatingChange(value);
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (disabled) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= max) {
        handleRating(num);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [max, disabled]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = (hoveredRating || rating) >= value;
          const isPressed = pressedKey === value;

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95, y: 2 }}
              animate={isPressed ? { scale: 0.9, y: 4 } : { scale: 1, y: 0 }}
              className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                font-mono text-lg font-bold shadow-lg
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${isActive ? "shadow-inner" : ""}
              `}
              style={{
                backgroundColor: isActive ? keyColor : "#E5E7EB",
                color: isActive ? textColor : "#4B5563",
                border: "2px solid",
                borderColor: isActive ? keyColor : "#D1D5DB",
                borderBottomWidth: isPressed ? "2px" : "4px",
              }}
              disabled={disabled}
            >
              {value}
            </motion.button>
          );
        })}
      </div>

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-gray-500"
      >
        Press 1-{max} on your keyboard
      </motion.div>

      {/* Rating display */}
      <motion.div
        className="text-xl font-bold"
        animate={{
          scale: pressedKey ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        Rating: {rating} / {max}
      </motion.div>
    </div>
  );
};

export default KeyboardRating; 