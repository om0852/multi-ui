"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const DotRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  activeColor = "#8B5CF6", // Purple color
  inactiveColor = "#E5E7EB",
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex items-center space-x-3">
      {Array.from({ length: max }, (_, index) => {
        const value = index + 1;
        const isActive = (hoveredRating || rating) >= value;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(value)}
            onMouseEnter={() => !disabled && setHoveredRating(value)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`
              w-4 h-4 rounded-full focus:outline-none relative
              ${disabled ? "cursor-not-allowed opacity-50" : ""}
            `}
            disabled={disabled}
          >
            {/* Static dot */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                backgroundColor: isActive ? activeColor : inactiveColor,
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Ripple effect */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{
                  scale: 2,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ backgroundColor: activeColor }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default DotRating;
