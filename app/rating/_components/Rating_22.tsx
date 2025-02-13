"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  clockColor?: string;
}

const ClockRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  clockColor = "#2563EB", // Blue
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating;
  const hourRotation = (currentRating / max) * 360;
  const minuteRotation = hourRotation * 12; // Minutes move 12 times faster

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Clock face */}
      <div className="relative w-48 h-48">
        {/* Clock circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4"
          style={{ borderColor: clockColor }}
          animate={{
            scale: currentRating > 0 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* Hour markers */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 96 + Math.sin(angle) * 80;
            const y = 96 - Math.cos(angle) * 80;

            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-4 bg-gray-300"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                }}
                animate={{
                  backgroundColor: i <= (currentRating / max) * 12 ? clockColor : "#D1D5DB",
                }}
              />
            );
          })}

          {/* Hour hand */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-1 h-16 origin-bottom rounded-full"
            style={{ backgroundColor: clockColor }}
            animate={{ rotate: hourRotation }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          />

          {/* Minute hand */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-0.5 h-20 origin-bottom rounded-full"
            style={{ backgroundColor: clockColor }}
            animate={{ rotate: minuteRotation }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: clockColor }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        {/* Digital time display */}
        <motion.div
          className="absolute -bottom-8 left-0 right-0 text-center text-lg font-mono font-bold"
          style={{ color: clockColor }}
          animate={{
            scale: currentRating > 0 ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {String(Math.floor((currentRating / max) * 12)).padStart(2, "0")}:
          {String(Math.floor((currentRating / max) * 60) % 60).padStart(2, "0")}
        </motion.div>
      </div>

      {/* Rating buttons */}
      <div className="flex space-x-2">
        {Array.from({ length: max + 1 }, (_, index) => {
          const value = index;
          const isActive = currentRating >= value;

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                font-medium border-2 transition-colors
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
              style={{
                backgroundColor: isActive ? clockColor : "white",
                borderColor: clockColor,
                color: isActive ? "white" : clockColor,
              }}
              disabled={disabled}
            >
              {value}
            </motion.button>
          );
        })}
      </div>

      {/* Time period indicator */}
      <motion.div
        className="text-lg font-medium"
        style={{ color: clockColor }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.3 }}
      >
        {currentRating === 0
          ? "Midnight"
          : currentRating <= max * 0.25
          ? "Dawn"
          : currentRating <= max * 0.5
          ? "Morning"
          : currentRating <= max * 0.75
          ? "Afternoon"
          : "Evening"}
      </motion.div>
    </div>
  );
};

export default ClockRating; 