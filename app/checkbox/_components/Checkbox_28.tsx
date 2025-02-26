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
    medium: "w-10 h-10",
    large: "w-14 h-14",
  };

  const ballSize = {
    small: "12px",  // Adjusted size for small
    medium: "18px",
    large: "24px",
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
        {/* Pulse Animation */}
        <motion.div
          className="pulse absolute inset-0 bg-blue-500 opacity-0 rounded-full"
          animate={{
            opacity: value ? 0.3 : 0,
            scale: value ? 1.5 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        ></motion.div>

        {/* Background Color Change */}
        <motion.div
          className="bg-change absolute inset-0 bg-blue-500 rounded-full"
          animate={{
            backgroundColor: value ? "#38bdf8" : "#e5e7eb", // Light blue when checked, gray when unchecked
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        ></motion.div>

        {/* Checkmark Container */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            opacity: value ? 1 : 0, // Fade in the checkmark when checked
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {/* Checkmark */}
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
