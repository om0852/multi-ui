"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
}

const MoodRating: React.FC<RatingProps> = ({
  onRatingChange,
  disabled = false,
  initialRating = 3,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const moods = [
    { emoji: "😡", color: "#EF4444", label: "Terrible" },
    { emoji: "😕", color: "#F59E0B", label: "Bad" },
    { emoji: "😐", color: "#FCD34D", label: "Okay" },
    { emoji: "🙂", color: "#34D399", label: "Good" },
    { emoji: "😄", color: "#10B981", label: "Excellent" },
  ];

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Large emoji display */}
      <motion.div
        className="text-6xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {moods[rating - 1].emoji}
      </motion.div>

      {/* Mood label */}
      <motion.div
        className="text-xl font-semibold"
        style={{ color: moods[rating - 1].color }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.3 }}
      >
        {moods[rating - 1].label}
      </motion.div>

      {/* Emoji slider */}
      <div className="flex items-center space-x-4">
        {moods.map((mood, index) => (
          <motion.button
            key={index}
            onClick={() => handleRating(index + 1)}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: rating === index + 1 ? 1.2 : 1,
              opacity: rating === index + 1 ? 1 : 0.5,
            }}
            className={`
              text-3xl p-2 rounded-full focus:outline-none
              transition-transform duration-200
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            `}
            style={{
              backgroundColor: rating === index + 1 ? mood.color + "33" : "transparent",
            }}
            disabled={disabled}
          >
            {mood.emoji}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MoodRating; 