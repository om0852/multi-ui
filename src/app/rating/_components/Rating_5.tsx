"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number; // Maximum number of stars, default is 5
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected stars
  borderColor?: string; // Border color for stars
  initialRating?: number; // Initial rating value (e.g., 0 to max), can be fractional
  disabled?: boolean; // Disable interaction with the stars
}

const StarRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
  initialRating = 0,
  disabled = false, // Disable interaction if true
}) => {
  const [rating, setRating] = useState<number>(initialRating); // State to store the current rating

  // Handle click on a star to set the rating
  const handleRating = (starIndex: number) => {
    if (disabled) return; // Prevent interaction if disabled

    // Toggle rating between full, half, and empty stars
    if (rating === starIndex + 1) {
      setRating(starIndex + 0.5); // Toggle to half-star
    } else if (rating === starIndex + 0.5) {
      setRating(starIndex); // Toggle to no star
    } else {
      setRating(starIndex + 1); // Set to full star
    }

    if (onRatingChange) onRatingChange(rating);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => {
        const isFullStar = rating >= index + 1;
        const isHalfStar = rating > index && rating < index + 1;

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
              fill={isFullStar ? fillColor : "none"} // Full fill for full stars
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={borderColor}
              className="w-6 h-6"
            >
              <defs>
                {/* Gradient for half-filled stars */}
                {isHalfStar && (
                  <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor={fillColor} />
                    <stop offset="50%" stopColor="white" />
                  </linearGradient>
                )}
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
              {/* For half-filled stars */}
              {isHalfStar && (
                <path
                  fill="url(#halfFill)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              )}
            </svg>
          </motion.button>
        );
      })}
    </div>
  );
};

export default StarRating;
