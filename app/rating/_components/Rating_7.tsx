"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  backgroundColor?: string;
  textColor?: string;
}

const NumberRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  backgroundColor = "#4F46E5", // Indigo color
  textColor = "#FFFFFF",
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: max }, (_, index) => {
        const value = index + 1;
        const isActive = (hoveredRating || rating) >= value;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(value)}
            onMouseEnter={() => !disabled && setHoveredRating(value)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            whileHover={{ 
              scale: 1.1,
              rotateX: 360,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            animate={isActive ? {
              backgroundColor: backgroundColor,
              color: textColor,
              transition: { duration: 0.2 }
            } : {
              backgroundColor: "#ffffff",
              color: backgroundColor,
              transition: { duration: 0.2 }
            }}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              font-bold text-lg border-2 transition-colors duration-200
              ${disabled ? "cursor-not-allowed opacity-50" : ""}
              ${isActive ? "" : `border-${backgroundColor}`}
            `}
            style={{
              borderColor: backgroundColor,
            }}
            disabled={disabled}
          >
            {value}
          </motion.button>
        );
      })}
    </div>
  );
};

export default NumberRating;
