"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number; // Maximum number of hearts, default is 5
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected hearts
  borderColor?: string; // Border color for hearts
  initialRating?: number; // Initial rating value (e.g., 0 to max), can be fractional
  disabled?: boolean; // Disable interaction with the hearts
}

const HeartRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
  initialRating = 0,
  disabled = false, // Disabled state for preventing interaction
}) => {
  const [rating, setRating] = useState<number>(initialRating); // State to store the current rating

  // Handle click on a heart to set the rating
  const handleRating = (heartIndex: number) => {
    if (disabled) return; // Prevent interaction if disabled

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
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
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
              <defs>
                {/* Gradient for half-filled hearts */}
                {isHalfHeart && (
                  <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor={fillColor} />
                    <stop offset="50%" stopColor="white" />
                  </linearGradient>
                )}
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
              {/* For half-filled hearts */}
              {isHalfHeart && (
                <path
                  fill="url(#halfFill)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              )}
            </svg>
          </motion.button>
        );
      })}
    </div>
  );
};

export default HeartRating;
