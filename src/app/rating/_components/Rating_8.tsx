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
    <div className="flex items-center space-x-2">
      {Array.from({ length: max }, (_, index) => {
        const isFullHeart = rating >= index + 1;
        const isHalfHeart = rating > index && rating < index + 1;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(index)} // +1 because index is 0-based
            whileHover={{
              scale: 1.3,
              rotate: 15,
              y: -10,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{
              scale: 0.9,
              rotate: -10,
              y: 5,
              transition: { type: "spring", stiffness: 400 },
            }}
            animate={{
              scale: isFullHeart || isHalfHeart ? 1.2 : 1,
              opacity: isFullHeart || isHalfHeart ? 1 : 0.7,
              transition: { type: "spring", stiffness: 300 },
            }}
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
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
              {/* Half-heart rendering */}
              {isHalfHeart && (
                <circle cx="12" cy="12" r="6" fill="url(#halfFill)" />
              )}
            </svg>
          </motion.button>
        );
      })}
    </div>
  );
};

export default AnimatedHeartRating;
