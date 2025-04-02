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
        {/* Background Color Transition */}
        <motion.div
          className="bg-change absolute inset-0 bg-gray-600 rounded-full"
          animate={{
            backgroundColor: value ? "#38bdf8" : "#e5e7eb", // Light blue when checked, gray when unchecked
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        ></motion.div>

        {/* Rotating Triangle */}
        <motion.div
          className="triangle absolute w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-t-[#38bdf8] transform origin-center"
          animate={{
            rotate: value ? 180 : 0, // Rotate triangle when checked
            scale: value ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
