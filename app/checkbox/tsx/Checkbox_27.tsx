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
        {/* Filling Background Effect */}
        <motion.div
          className="fill-background absolute inset-0 bg-blue-500"
          animate={{
            width: value ? "100%" : "0%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        ></motion.div>

        {/* Scale Effect */}
        <motion.div
          className="checkbox-scale absolute inset-0 border-4 border-blue-500 rounded-full"
          animate={{
            scale: value ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Checkmark Container */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            x: value ? 0 : "100%", // Slide the checkmark in from the right
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
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
