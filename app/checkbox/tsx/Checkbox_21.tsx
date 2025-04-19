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
        className={`checkbox-background relative ${sizeClasses[size]} bg-gray-300 border-2 border-gray-600 rounded-full overflow-hidden transition-all duration-300`}
      >
        {/* Sliding Background Animation */}
        <motion.div
          className="background-slide absolute inset-0 bg-green-500 rounded-full"
          animate={{
            x: value ? "0%" : "-100%",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        ></motion.div>

        {/* Checkmark Bounce Animation */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            scale: value ? 1 : 0,
            y: value ? 0 : -20,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
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
