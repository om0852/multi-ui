"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const WeatherRating = ({
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const weatherStates = [
    { icon: "🌧️", label: "Terrible", color: "#1F2937", bgColor: "#E5E7EB" },
    { icon: "⛅", label: "Poor", color: "#9CA3AF", bgColor: "#F3F4F6" },
    { icon: "🌤️", label: "Fair", color: "#FCD34D", bgColor: "#FEF3C7" },
    { icon: "☀️", label: "Good", color: "#F59E0B", bgColor: "#FEF3C7" },
    { icon: "🌈", label: "Excellent", color: "#10B981", bgColor: "#D1FAE5" },
  ];

  const handleRating = (value) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating;
  const currentWeather = weatherStates[currentRating - 1] || weatherStates[0];

  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        className="w-48 h-48 rounded-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: currentWeather?.bgColor }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div className="text-6xl" animate={{ scale: currentRating > 0 ? [1, 1.2, 1] : 1 }} transition={{ duration: 0.5 }}>
          {currentWeather?.icon || "❓"}
        </motion.div>
        <motion.div
          className="mt-2 text-xl font-semibold"
          style={{ color: currentWeather?.color }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          {currentWeather?.label || "Rate me!"}
        </motion.div>
      </motion.div>
      <div className="flex space-x-2">
        {weatherStates.map((weather, index) => {
          const value = index + 1;
          const isActive = currentRating >= value;
          return (
            <motion.button
              key={index}
              onClick={() => handleRating(value)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-transform"
              style={{
                backgroundColor: isActive ? weather.bgColor : "#F3F4F6",
                border: `2px solid ${isActive ? weather.color : "#E5E7EB"}`,
              }}
              onMouseEnter={() => !disabled && setHoveredRating(value)}
              onMouseLeave={() => !disabled && setHoveredRating(null)}
              disabled={disabled}
            >
              {weather.icon}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherRating;
