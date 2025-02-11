"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number; // Maximum number of hearts, default is 5
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected hearts
  borderColor?: string; // Border color for hearts
  initialRating?: number; // Initial rating value (can be fractional)
  disabled?: boolean; // Disable interaction with the hearts
}

const AnimatedHeartRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
  initialRating = 0,
  disabled = false, // Disabled state to prevent interaction
}) => {
  const [rating, setRating] = useState<number>(initialRating); // State to store current rating

  // Handle rating change when a heart is clicked
  const handleRating = (heartIndex: number) => {
    if (disabled) return; // Prevent interaction if disabled

    // Toggle rating between full, half, and no hearts
    if (rating === heartIndex + 1) {
      setRating(heartIndex + 0.5); // Toggle to half-heart
    } else if (rating === heartIndex + 0.5) {
      setRating(heartIndex); // Toggle to no heart
    } else {
      setRating(heartIndex + 1); // Set to full heart
    }

    if (onRatingChange) onRatingChange(rating);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => {
        const isFullHeart = rating >= index + 1;
        const isHalfHeart = rating > index && rating < index + 1;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(index)} // +1 because index is 0-based
            whileHover={{ scale: 1.3, rotate: 15, y: -10 }}
            whileTap={{ scale: 0.9, rotate: -10, y: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`focus:outline-none ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={disabled} // Disable button if disabled is true
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFullHeart ? fillColor : "none"} // Full fill for full hearts
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={borderColor}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              {/* Render half-heart */}
              {isHalfHeart && (
                <path
                  fill="url(#halfFill)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              )}
            </svg>
          </motion.button>
        );
      })}
    </div>
  );
};

export default AnimatedHeartRating;
