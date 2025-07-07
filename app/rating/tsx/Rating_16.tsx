"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  starColor?: string;
  lineColor?: string;
}

const ConstellationRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  starColor = "#FCD34D", // Yellow
  lineColor = "#93C5FD", // Light blue
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const starPositions = Array.from({ length: max }, (_, i) => ({
    x: 40 + (i * 60),
    y: 50 + (Math.sin(i * 1.5) * 20),
  }));

  return (
    <div className="relative w-[340px] h-[120px]">
      <svg width="100%" height="100%" className={disabled ? "opacity-50" : ""}>
        {/* Connection lines */}
        {starPositions.map((pos, index) => {
          if (index === 0) return null;
          const prevPos = starPositions[index - 1];
          const isActive = (hoveredRating || rating) >= index + 1;

          return (
            <motion.line
              key={`line-${index}`}
              x1={prevPos.x}
              y1={prevPos.y}
              x2={pos.x}
              y2={pos.y}
              stroke={lineColor}
              strokeWidth={2}
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{
                pathLength: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0.2,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          );
        })}

        {/* Stars */}
        {starPositions.map((pos, index) => {
          const value = index + 1;
          const isActive = (hoveredRating || rating) >= value;

          return (
            <g key={`star-${index}`}>
              {/* Glow effect */}
              {isActive && (
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={12}
                  fill={starColor}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Star */}
              <motion.path
                d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
                fill={isActive ? starColor : "none"}
                stroke={starColor}
                strokeWidth={2}
                transform={`translate(${pos.x - 12}, ${pos.y - 12}) scale(0.8)`}
                whileHover={{ scale: 1.2 }}
                onClick={() => handleRating(value)}
                onMouseEnter={() => !disabled && setHoveredRating(value)}
                onMouseLeave={() => !disabled && setHoveredRating(null)}
                className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: isActive ? [0.8, 1, 0.8] : 0.8,
                  rotate: isActive ? [0, 360] : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              />

              {/* Sparkles */}
              {isActive && (
                <motion.circle
                  cx={pos.x + 8}
                  cy={pos.y - 8}
                  r={1}
                  fill={starColor}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: Math.random(),
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Rating display */}
      <div className="absolute -bottom-6 left-0 right-0 text-center text-sm font-medium text-gray-600">
        {rating} of {max} stars
      </div>
    </div>
  );
};

export default ConstellationRating; 