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
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const circleSize = {
    small: { width: "32px", height: "32px" },
    medium: { width: "48px", height: "48px" },
    large: { width: "64px", height: "64px" },
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
        className={`checkbox-background relative ${sizeClasses[size]} rounded-full border-2 border-gray-600 overflow-hidden transition-all duration-300`}
      >
        {/* Color Transition and Background Circle */}
        <motion.div
          className="circle absolute"
          style={{
            width: circleSize[size].width,
            height: circleSize[size].height,
            backgroundColor: value ? "#34D399" : "#F472B6", // Color transition on check
          }}
          animate={{
            scale: value ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Growing Dot Animation */}
        <motion.div
          className="dot absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
          animate={{
            scale: value ? 1.5 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        ></motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
