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
        className={`checkbox-background relative ${sizeClasses[size]} bg-gray-300 border-2 border-gray-600 rounded-full overflow-hidden`}
      >
        {/* Flip Effect Background */}
        <motion.div
          className="flip-background absolute inset-0 rounded-full"
          animate={{
            rotateY: value ? 180 : 0,
            backgroundColor: value ? "#4CAF50" : "#FF5722",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.6,
          }}
        ></motion.div>

        {/* Checkmark Rotate-In Animation */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            opacity: value ? 1 : 0,
            rotate: value ? 0 : 180,
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
