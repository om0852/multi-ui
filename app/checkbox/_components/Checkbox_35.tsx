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
        className={`checkbox-background relative ${sizeClasses[size]} bg-transparent border-2 border-gray-600 rounded-lg overflow-hidden transition-all duration-300`}
      >
        {/* Pulsing Border Animation */}
        <motion.div
          className="pulse-border absolute inset-0 rounded-lg"
          animate={{
            scale: value ? 1.1 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            repeat: value ? Infinity : 0,
            repeatType: "mirror",
          }}
          style={{
            borderColor: value ? "#34D399" : "#F472B6", // Color transition
          }}
        ></motion.div>

        {/* Rotating Checkmark Animation */}
        <motion.svg
          viewBox="0 0 24 24"
          className="checkmark absolute w-6 h-6 stroke-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{
            pathLength: value ? 1 : 0,
            rotate: value ? 360 : 0, // Rotating checkmark
            opacity: value ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.path
            d="M5 12l4 4L19 7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    </label>
  );
};

export default Checkbox;
