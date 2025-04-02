"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
  activeColor?: string;
  trackColor?: string;
}

const SliderRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
  activeColor = "#10B981", // Emerald color
  trackColor = "#E5E7EB",
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [isDragging, setIsDragging] = useState(false);

  const handleRating = (clientX: number) => {
    if (disabled) return;

    const slider = document.getElementById("slider");
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const newRating = Math.ceil((x / width) * max);
    
    const clampedRating = Math.max(1, Math.min(newRating, max));
    setRating(clampedRating);
    if (onRatingChange) onRatingChange(clampedRating);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    setIsDragging(true);
    handleRating(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !isDragging) return;
    handleRating(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xs">
      {/* Rating display */}
      <div className="absolute -top-8 left-0 w-full flex justify-between text-sm font-medium">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={`transition-colors ${
              i + 1 <= rating ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>

      {/* Slider track */}
      <div
        id="slider"
        className={`
          h-2 rounded-full relative cursor-pointer
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
        style={{ backgroundColor: trackColor }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {/* Active track */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ backgroundColor: activeColor }}
          animate={{
            width: `${(rating / max) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Slider thumb */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg"
          style={{ backgroundColor: activeColor }}
          animate={{
            x: `${((rating - 1) / (max - 1)) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </div>
  );
};

export default SliderRating;
