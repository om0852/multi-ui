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

  const triangleSize = {
    small: { borderBottom: "20px", borderLeft: "10px", borderRight: "10px" },
    medium: { borderBottom: "30px", borderLeft: "15px", borderRight: "15px" },
    large: { borderBottom: "50px", borderLeft: "25px", borderRight: "25px" },
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
        className={` grid place-items-center relative ${sizeClasses[size]} bg-transparent border-2 border-gray-600 rounded-md overflow-hidden transition-all duration-300`}
      >
        {/* Triangle Shape */}
        <motion.div
          className="triangle absolute"
          style={{
            borderBottomWidth: triangleSize[size].borderBottom,
            borderLeftWidth: triangleSize[size].borderLeft,
            borderRightWidth: triangleSize[size].borderRight,
          }}
          animate={{
            rotate: value ? 0 : 180, // Rotate the triangle when checked
            borderBottomColor: value ? "#34D399" : "#F472B6", // Change color when checked
            scale: value ? 1 : 0.9, // Scale down when unchecked
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Checkmark Effect (optional) */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </label>
  );
};

export default Checkbox;
