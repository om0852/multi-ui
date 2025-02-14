"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  onRatingChange?: (rating: number) => void;
  fillColor?: string;
  borderColor?: string;
  disabled?: boolean;
  initialRating?: number;
}

const ThumbsRating: React.FC<RatingProps> = ({
  onRatingChange,
  fillColor = "#4CAF50", // Green for thumbs up
  borderColor = "#333333",
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredThumb, setHoveredThumb] = useState<"up" | "down" | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex items-center space-x-8">
      <motion.button
        onClick={() => handleRating(1)}
        onMouseEnter={() => !disabled && setHoveredThumb("up")}
        onMouseLeave={() => !disabled && setHoveredThumb(null)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          x: rating === 1 ? [0, -10, 10, -10, 0] : 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className={`focus:outline-none ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={disabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={rating === 1 ? fillColor : "none"}
          stroke={borderColor}
          strokeWidth="2"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={() => handleRating(-1)}
        onMouseEnter={() => !disabled && setHoveredThumb("down")}
        onMouseLeave={() => !disabled && setHoveredThumb(null)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          x: rating === -1 ? [0, -10, 10, -10, 0] : 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className={`focus:outline-none ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={disabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={rating === -1 ? "#DC3545" : "none"} // Red for thumbs down
          stroke={borderColor}
          strokeWidth="2"
          className="w-10 h-10 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default ThumbsRating;
