"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
}

const TagRating: React.FC<RatingProps> = ({
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const tags = [
    {
      value: 1,
      label: "Poor",
      color: "#EF4444",
      icon: "✗",
      description: "Needs significant improvement",
    },
    {
      value: 2,
      label: "Fair",
      color: "#F59E0B",
      icon: "⚠",
      description: "Below expectations",
    },
    {
      value: 3,
      label: "Good",
      color: "#10B981",
      icon: "✓",
      description: "Meets expectations",
    },
    {
      value: 4,
      label: "Great",
      color: "#3B82F6",
      icon: "★",
      description: "Exceeds expectations",
    },
    {
      value: 5,
      label: "Excellent",
      color: "#6366F1",
      icon: "⭐",
      description: "Outstanding performance",
    },
  ];

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md">
      {tags.map((tag, index) => {
        const isSelected = rating === tag.value;
        const isAboveSelected = tag.value <= rating;

        return (
          <motion.button
            key={index}
            onClick={() => handleRating(tag.value)}
            initial={{ x: -50, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              scale: isSelected ? 1.05 : 1,
            }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.2,
            }}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={`
              w-full px-4 py-3 rounded-lg flex items-center
              transition-colors duration-200 group
              ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            `}
            style={{
              backgroundColor: isAboveSelected ? `${tag.color}20` : "#F3F4F6",
              border: `2px solid ${isAboveSelected ? tag.color : "#E5E7EB"}`,
            }}
            disabled={disabled}
          >
            {/* Icon */}
            <motion.span
              className="text-2xl mr-3"
              animate={{
                scale: isSelected ? [1, 1.2, 1] : 1,
                rotate: isSelected ? [0, 15, 0] : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {tag.icon}
            </motion.span>

            {/* Text content */}
            <div className="flex flex-col items-start">
              <span
                className="font-semibold"
                style={{ color: isAboveSelected ? tag.color : "#4B5563" }}
              >
                {tag.label}
              </span>
              <span className="text-sm text-gray-500">
                {tag.description}
              </span>
            </div>

            {/* Selected indicator */}
            {isSelected && (
              <motion.div
                className="ml-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={tag.color}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default TagRating; 