"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number; // Maximum number of hearts, default is 5
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected hearts
  borderColor?: string; // Border color for hearts
  disabled?: boolean; // Disable interaction with the hearts
  initialState?: number; // Initial rating value (e.g., 0 to max), fractional values supported
}

const HeartRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
  disabled = false,
  initialState = 0,
}) => {
  // State to store the rating (0 to max, can be fractional for half heart)
  const [rating, setRating] = useState<number>(initialState);

  // Handle click on a heart and toggle between empty, half, and full hearts
  const handleRating = (heartIndex: number) => {
    if (disabled) return; // Prevent interaction if disabled

    // Calculate the new rating
    const newRating = heartIndex + 1;
    if (rating === newRating) {
      setRating(newRating - 0.5); // Set to half heart if clicked again
    } else if (rating > newRating) {
      setRating(newRating); // Set to the previous star if clicked again
    } else {
      setRating(newRating); // Fill up to the clicked heart
    }

    if (onRatingChange) onRatingChange(rating);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => {
        const isHalfHeart = rating > index && rating < index + 1; // Check for fractional part
        const isFullHeart = rating >= index + 1;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            className="focus:outline-none"
            disabled={disabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFullHeart ? fillColor : "none"}
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l.718 2.208c.157.482.623.823 1.134.823h2.316c.957 0 1.354 1.225.583 1.806l-1.876 1.445c-.408.314-.588.862-.45 1.367l.718 2.208c.3.921-.755 1.688-1.538 1.112l-1.876-1.445c-.408-.314-.982-.314-1.39 0l-1.876 1.445c-.783.576-1.838-.191-1.538-1.112l.718-2.208c.138-.505-.042-1.053-.45-1.367l-1.876-1.445c-.77-.58-.374-1.806.583-1.806h2.316c.51 0 .976-.341 1.134-.823l.718-2.208z"
              />
              {/* For half-filled heart */}
              {isHalfHeart && (
                <path
                  fill="url(#halfFill)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l.718 2.208c.157.482.623.823 1.134.823h2.316c.957 0 1.354 1.225.583 1.806l-1.876 1.445c-.408.314-.588.862-.45 1.367l.718 2.208c.3.921-.755 1.688-1.538 1.112l-1.876-1.445c-.408-.314-.982-.314-1.39 0l-1.876 1.445c-.783.576-1.838-.191-1.538-1.112l.718-2.208c.138-.505-.042-1.053-.45-1.367l-1.876-1.445c-.77-.58-.374-1.806.583-1.806h2.316c.51 0 .976-.341 1.134-.823l.718-2.208z"
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
