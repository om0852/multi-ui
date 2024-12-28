"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number; // Maximum number of stars, default is 5
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected stars
  borderColor?: string; // Border color for stars
  disabled?: boolean; // Disable interaction with the stars
  initialState?: number; // Initial rating value (e.g., 0 to max), fractional values supported
}

const Rating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
  disabled = false,
  initialState = 0,
}) => {
  // State to store the rating (0 to max, can be fractional for half star)
  const [rating, setRating] = useState<number>(initialState);

  // Handle click on a star and toggle between empty and full stars
  const handleRating = (starIndex: number) => {
    if (disabled) return; // Prevent interaction if disabled

    // Calculate the new rating, add 1 to index for 1-based rating
    const newRating = starIndex + 1;
    if (rating === newRating) {
      setRating(newRating - 0.5); // Set to half star if clicked again
    } else if (rating > newRating) {
      setRating(newRating); // Set to the previous star if clicked again
    } else {
      setRating(newRating); // Fill up to the clicked star
    }

    if (onRatingChange) onRatingChange(rating);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => {
        const isFullStar = rating >= index + 1;
        const isHalfStar = rating > index && rating < index + 1; // Check for fractional part

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none"
            disabled={disabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFullStar ? fillColor : "none"}
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
              {/* For half-filled star */}
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

export default Rating;
