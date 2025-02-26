"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  diceColor?: string;
}

const DiceRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  diceColor = "#7C3AED", // Purple
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleRating = (value: number) => {
    if (disabled || isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      setRating(value);
      setIsRolling(false);
      if (onRatingChange) onRatingChange(value);
    }, 1000);
  };

  const currentRating = hoveredRating || rating;

  // Dice face configurations
  const diceFaces = {
    1: [{ x: "50%", y: "50%" }],
    2: [
      { x: "30%", y: "30%" },
      { x: "70%", y: "70%" },
    ],
    3: [
      { x: "30%", y: "30%" },
      { x: "50%", y: "50%" },
      { x: "70%", y: "70%" },
    ],
    4: [
      { x: "30%", y: "30%" },
      { x: "30%", y: "70%" },
      { x: "70%", y: "30%" },
      { x: "70%", y: "70%" },
    ],
    5: [
      { x: "30%", y: "30%" },
      { x: "30%", y: "70%" },
      { x: "50%", y: "50%" },
      { x: "70%", y: "30%" },
      { x: "70%", y: "70%" },
    ],
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Dice container */}
      <div className="relative w-48 h-48 perspective-1000">
        <motion.div
          className="w-32 h-32 mx-auto bg-white rounded-2xl shadow-xl relative"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          animate={
            isRolling
              ? {
                  rotateX: [0, 360, 720, 1080],
                  rotateY: [0, 360, 720, 1080],
                  scale: [1, 0.8, 1.2, 1],
                }
              : {
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                }
          }
          transition={{
            duration: isRolling ? 1 : 0.3,
            ease: "easeInOut",
          }}
        >
          {/* Dice dots */}
          {currentRating > 0 &&
            diceFaces[currentRating as keyof typeof diceFaces].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  backgroundColor: diceColor,
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
        </motion.div>
      </div>

      {/* Rating value */}
      <motion.div
        className="text-2xl font-bold"
        style={{ color: diceColor }}
        animate={{
          scale: isRolling ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {isRolling ? "Rolling..." : `Roll: ${currentRating}`}
      </motion.div>

      {/* Rating buttons */}
      <div className="flex space-x-2">
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const isActive = currentRating >= value;

          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center
                font-bold text-lg shadow-md transition-colors
                ${disabled || isRolling ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
              style={{
                backgroundColor: isActive ? diceColor : "white",
                color: isActive ? "white" : diceColor,
                border: `2px solid ${diceColor}`,
              }}
              disabled={disabled || isRolling}
            >
              {value}
            </motion.button>
          );
        })}
      </div>

      {/* Roll status */}
      <motion.div
        className="text-sm font-medium"
        style={{ color: diceColor }}
        animate={{
          opacity: isRolling ? 1 : 0,
        }}
      >
        {isRolling && "🎲 Rolling the dice..."}
      </motion.div>
    </div>
  );
};

export default DiceRating; 