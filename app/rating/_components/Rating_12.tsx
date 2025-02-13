"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  waveColor?: string;
}

const WaveRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  waveColor = "#6366F1", // Indigo color
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="relative flex items-end space-x-2 h-32">
      {Array.from({ length: max }, (_, index) => {
        const value = index + 1;
        const isActive = (hoveredRating || rating) >= value;
        const delay = index * 0.1;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(value)}
            onMouseEnter={() => !disabled && setHoveredRating(value)}
            onMouseLeave={() => !disabled && setHoveredRating(null)}
            className={`
              w-8 relative focus:outline-none
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            `}
            disabled={disabled}
          >
            {/* Wave animation */}
            <motion.div
              className="absolute bottom-0 w-full rounded-t-lg"
              style={{ backgroundColor: waveColor }}
              initial={{ height: "20%" }}
              animate={{
                height: isActive ? "100%" : "20%",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay,
                },
              }}
            >
              {/* Bubble animations */}
              {isActive && (
                <>
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-white opacity-50"
                    initial={{ y: 20, x: 2 }}
                    animate={{
                      y: -20,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: delay + Math.random(),
                    }}
                  />
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-white opacity-50"
                    initial={{ y: 30, x: 4 }}
                    animate={{
                      y: -30,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: delay + Math.random(),
                    }}
                  />
                </>
              )}
            </motion.div>

            {/* Rating number */}
            <div className="absolute bottom-2 left-0 right-0 text-center text-white font-bold">
              {value}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default WaveRating; 