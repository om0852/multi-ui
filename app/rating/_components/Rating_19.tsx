"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean;
  initialRating?: number;
}

const WeatherRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  disabled = false,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const weatherStates = [
    { icon: "🌧️", label: "Terrible", color: "#1F2937", bgColor: "#E5E7EB" },
    { icon: "⛅", label: "Poor", color: "#9CA3AF", bgColor: "#F3F4F6" },
    { icon: "🌤️", label: "Fair", color: "#FCD34D", bgColor: "#FEF3C7" },
    { icon: "☀️", label: "Good", color: "#F59E0B", bgColor: "#FEF3C7" },
    { icon: "🌈", label: "Excellent", color: "#10B981", bgColor: "#D1FAE5" },
  ];

  const handleRating = (value: number) => {
    if (disabled) return;
    setRating(value);
    if (onRatingChange) onRatingChange(value);
  };

  const currentRating = hoveredRating || rating;
  const currentWeather = weatherStates[currentRating - 1] || weatherStates[0];

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Weather display */}
      <motion.div
        className="w-48 h-48 rounded-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: currentWeather?.bgColor }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* Weather effects */}
        {currentRating > 0 && (
          <div className="absolute inset-0">
            {/* Rain drops for rating 1 */}
            {currentRating === 1 && (
              <>
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-3 bg-blue-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-10%`,
                    }}
                    animate={{
                      y: ["0%", "800%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random(),
                    }}
                  />
                ))}
              </>
            )}

            {/* Clouds for rating 2-3 */}
            {(currentRating === 2 || currentRating === 3) && (
              <motion.div
                className="absolute inset-0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="absolute top-1/4 left-1/4 w-16 h-8 bg-white rounded-full opacity-50" />
                <div className="absolute top-1/3 right-1/4 w-20 h-10 bg-white rounded-full opacity-60" />
              </motion.div>
            )}

            {/* Sun rays for rating 4 */}
            {currentRating === 4 && (
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-12 bg-yellow-400 left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: "0 0",
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Rainbow for rating 5 */}
            {currentRating === 5 && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#0000FF", "#4B0082"].map(
                  (color, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-full rounded-full"
                      style={{
                        border: `4px solid ${color}`,
                        transform: `scale(${1 + i * 0.1})`,
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  )
                )}
              </motion.div>
            )}
          </div>
        )}

        {/* Weather icon */}
        <motion.div
          className="text-6xl"
          animate={{
            scale: currentRating > 0 ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {currentWeather?.icon || "❓"}
        </motion.div>

        {/* Weather label */}
        <motion.div
          className="mt-2 text-xl font-semibold"
          style={{ color: currentWeather?.color }}
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.3 }}
        >
          {currentWeather?.label || "Rate me!"}
        </motion.div>
      </motion.div>

      {/* Rating buttons */}
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
              className={`
                w-12 h-12 rounded-full flex items-center justify-center
                text-2xl transition-transform
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
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