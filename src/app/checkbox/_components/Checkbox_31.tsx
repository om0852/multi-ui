"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large"; // Custom size option
};

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Set size classes based on the size prop
  const sizeClasses = {
    small: "w-8 h-8", // Adjusted size for small
    medium: "w-12 h-12",
    large: "w-16 h-16",
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
        className={`checkbox-background relative ${sizeClasses[size]} bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 border-2 border-transparent rounded-full overflow-hidden transition-all duration-300`}
      >
        {/* Gradient Background */}
        <motion.div
          className="bg-gradient absolute inset-0"
          animate={{
            background: value
              ? "linear-gradient(135deg, #6EE7B7, #3B82F6)"
              : "linear-gradient(135deg, #F472B6, #9333EA)",
            scale: value ? 1.2 : 1, // Expanding effect when checked
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Expanding Circle Animation */}
        <motion.div
          className="circle absolute w-full h-full bg-white rounded-full"
          animate={{
            scale: value ? 0.8 : 1, // Shrinking circle effect when checked
            opacity: value ? 0 : 1, // Fade out when checked
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Checkmark Container */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            opacity: value ? 1 : 0, // Fade in the checkmark when checked
            scale: value ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="checkmark w-6 h-6 stroke-white stroke-2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.path
              d="M5 12l4 4L19 7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
