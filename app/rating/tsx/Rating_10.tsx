"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  size?: number;
  strokeWidth?: number;
  activeColor?: string;
  inactiveColor?: string;
}

const CircularRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 200,
  strokeWidth = 20,
  activeColor = "#3B82F6", // Blue color
  inactiveColor = "#E5E7EB",
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const percentage = ((hoveredRating || rating) / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Background circle */}
      <svg width={size} height={size} className={disabled ? "opacity-50" : ""}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={inactiveColor}
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={activeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          transform={`rotate(-90 ${center} ${center})`}
          strokeLinecap="round"
        />
      </svg>

      {/* Rating display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          className="text-4xl font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
        >
          {hoveredRating || rating}
        </motion.span>
        <span className="text-sm text-gray-500">out of {max}</span>
      </div>

      {/* Interactive buttons */}
      <div className="absolute -bottom-12 flex space-x-2">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                text-sm font-medium transition-colors
                ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
                ${value <= (hoveredRating || rating) ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}
              `}
              disabled={disabled}
            >
              {value}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CircularRating;
