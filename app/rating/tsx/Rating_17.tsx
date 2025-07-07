"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  size?: number;
  gaugeColor?: string;
}

const GaugeRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  size = 200,
  gaugeColor = "#6366F1", // Indigo
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
  const startAngle = -135;
  const endAngle = 135;
  const angleRange = endAngle - startAngle;
  const currentAngle = startAngle + (angleRange * (hoveredRating || rating)) / max;

  // Create gauge ticks
  const ticks = Array.from({ length: max + 1 }, (_, i) => {
    const angle = startAngle + (angleRange * i) / max;
    const radian = (angle * Math.PI) / 180;
    const outerX = center + radius * Math.cos(radian);
    const outerY = center + radius * Math.sin(radian);
    const innerX = center + (radius - 15) * Math.cos(radian);
    const innerY = center + (radius - 15) * Math.sin(radian);

    return { outerX, outerY, innerX, innerY, value: i };
  });

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={disabled ? "opacity-50" : ""}
      >
        {/* Background arc */}
        <path
          d={`
            M ${center + radius * Math.cos((startAngle * Math.PI) / 180)}
            ${center + radius * Math.sin((startAngle * Math.PI) / 180)}
            A ${radius} ${radius} 0 1 1
            ${center + radius * Math.cos((endAngle * Math.PI) / 180)}
            ${center + radius * Math.sin((endAngle * Math.PI) / 180)}
          `}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Active arc */}
        <motion.path
          d={`
            M ${center + radius * Math.cos((startAngle * Math.PI) / 180)}
            ${center + radius * Math.sin((startAngle * Math.PI) / 180)}
            A ${radius} ${radius} 0 ${currentAngle > 0 ? 1 : 0} 1
            ${center + radius * Math.cos((currentAngle * Math.PI) / 180)}
            ${center + radius * Math.sin((currentAngle * Math.PI) / 180)}
          `}
          fill="none"
          stroke={gaugeColor}
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: (hoveredRating || rating) / max }}
          transition={{ type: "spring", stiffness: 60, damping: 11 }}
        />

        {/* Ticks and labels */}
        {ticks.map(({ outerX, outerY, innerX, innerY, value }) => (
          <g key={value}>
            <line
              x1={innerX}
              y1={innerY}
              x2={outerX}
              y2={outerY}
              stroke="#9CA3AF"
              strokeWidth="2"
            />
            <text
              x={innerX}
              y={innerY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium"
              fill="#6B7280"
            >
              {value}
            </text>
          </g>
        ))}

        {/* Needle */}
        <motion.g
          animate={{ rotate: currentAngle }}
          style={{ originX: center, originY: center }}
          transition={{ type: "spring", stiffness: 60, damping: 11 }}
        >
          <line
            x1={center}
            y1={center}
            x2={center}
            y2={center - radius + 30}
            stroke="#EF4444"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx={center}
            cy={center}
            r="8"
            fill="#EF4444"
          />
        </motion.g>
      </svg>

      {/* Interactive buttons */}
      <div className="absolute -bottom-12 flex space-x-2">
        {Array.from({ length: max + 1 }, (_, i) => (
          <motion.button
            key={i}
            onClick={() => handleRating(i)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-8 h-8 rounded-full flex items-center justify-center
              text-sm font-medium border-2
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              ${(hoveredRating || rating) >= i ? "bg-indigo-500 text-white border-indigo-500" : "bg-white text-gray-600 border-gray-300"}
            `}
            onMouseEnter={() => !disabled && setHoveredRating(i)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            disabled={disabled}
          >
            {i}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default GaugeRating; 