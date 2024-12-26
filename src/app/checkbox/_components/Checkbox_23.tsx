"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large"; // Custom size option
};

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onChange,
  disabled = false,
  size = "medium", // Default size is medium
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Set sizes dynamically
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-10 h-10",
    large: "w-14 h-14",
  };

  return (
    <label
      className={`checkbox-container relative inline-flex items-center cursor-pointer transition-all duration-300 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div
        className={`checkbox-background relative ${sizeClasses[size]} bg-gray-800 border-2 border-gray-600 rounded-full overflow-hidden transition-all duration-300`}
      >
        {/* Glowing Border Animation */}
        <motion.div
          className="glow-border absolute inset-0 rounded-full"
          animate={{
            boxShadow: value
              ? "0 0 10px 3px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(0, 255, 255, 0.7)"
              : "none",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Checkmark Zoom-In Effect */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            opacity: value ? 1 : 0,
            scale: value ? 1 : 0.5,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
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