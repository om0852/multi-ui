"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  size?: number;
  colors?: string[];
}

const PieRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 200,
  colors = ["#EF4444", "#F59E0B", "#FCD34D", "#34D399", "#3B82F6"], // Red to Blue gradient
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const center = size / 2;
  const radius = (size - 40) / 2;
  const sliceAngle = (2 * Math.PI) / max;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={disabled ? "opacity-50" : ""}
      >
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = (hoveredRating || rating) >= value;
          const startAngle = index * sliceAngle - Math.PI / 2;
          const endAngle = startAngle + sliceAngle;

          const x1 = center + radius * Math.cos(startAngle);
          const y1 = center + radius * Math.sin(startAngle);
          const x2 = center + radius * Math.cos(endAngle);
          const y2 = center + radius * Math.sin(endAngle);

          const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

          const pathData = `
            M ${center} ${center}
            L ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
            Z
          `;

          return (
            <motion.path
              key={index}
              d={pathData}
              fill={colors[index]}
              opacity={isActive ? 1 : 0.2}
              whileHover={{ scale: 1.05, opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{ transformOrigin: "center" }}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
            />
          );
        })}

        {/* Center circle */}
        <circle
          cx={center}
          cy={center}
          r={radius * 0.5}
          fill="white"
          className="drop-shadow-lg"
        />

        {/* Rating display */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-3xl font-bold"
          fill="#374151"
        >
          {hoveredRating || rating}
        </text>
      </svg>

      {/* Labels */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
        <span className="text-sm font-medium text-gray-600">
          {rating} out of {max}
        </span>
      </div>
    </div>
  );
};

export default PieRating; 