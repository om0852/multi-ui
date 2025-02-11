"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max: number; // Maximum number of stars
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected stars
  borderColor?: string; // Border color for stars
  initialRating?: number; // Initial rating value (e.g., 0 to max), can be fractional
  disabled?: boolean; // Disable interaction with the stars
}

const StarRating: React.FC<RatingProps> = ({
  max = 5,              // Default max to 5 if not provided
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
  initialRating = 0,    // Allow an initial fractional rating
  disabled = false,     // Disable functionality if true
}) => {
  const [rating, setRating] = useState<number>(initialRating); // State to store the current rating

  // Handle click on a star to set the rating
  const handleRating = (starIndex: number) => {
    if (disabled) return; // Prevent interaction if disabled

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
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
              {/* Half-star rendering */}
              {isHalfStar && (
                <path
                  fill="url(#halfFill)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
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
