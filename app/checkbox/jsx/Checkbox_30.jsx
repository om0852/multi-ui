"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-14 h-14",
  };

  return (
    <label
      className={`checkbox-container relative inline-flex items-center cursor-pointer transition-all duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div
        className={`checkbox-background relative ${sizeClasses[size]} bg-gray-200 border-2 border-gray-600 rounded-full overflow-hidden transition-all duration-300`}
      >
        {/* Background Color Transition */}
        <motion.div
          className="bg-change absolute inset-0 bg-gray-600 rounded-full"
          animate={{
            backgroundColor: value ? "#FFD700" : "#e5e7eb", // Gold when checked, gray when unchecked
            rotate: value ? 360 : 0, // Rotate the background when checked
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        ></motion.div>

        {/* Rotating Star */}
        <motion.div
          className="star absolute w-full h-full flex items-center justify-center"
          animate={{
            scale: value ? 1 : 0, // Scale the star when checked
            rotate: value ? 360 : 0, // Rotate the star when checked
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            className="star-shape w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.path
              d="M12 2L14.09 8.26L20.18 8.26L15.45 12.14L17.54 18.39L12 14.77L6.46 18.39L8.55 12.14L3.82 8.26L9.91 8.26L12 2Z"
              fill={value ? "#FFD700" : "transparent"}
              stroke={value ? "#FFD700" : "transparent"}
              strokeWidth="2"
            />
          </motion.svg>
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
