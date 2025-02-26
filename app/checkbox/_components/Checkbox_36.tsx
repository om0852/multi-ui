"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large"; // Control the size
};

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define size styles using CSS variables for responsive behavior
  const sizeStyles = {
    small: { "--size": "2rem", "--stroke": "2", "--icon-size": "60%" },
    medium: { "--size": "3rem", "--stroke": "3", "--icon-size": "70%" },
    large: { "--size": "4rem", "--stroke": "4", "--icon-size": "80%" },
  }[size];

  return (
    <label
      className={`checkbox-container relative cursor-pointer`}
      style={sizeStyles as React.CSSProperties} // Inject size-specific styles
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div
        className={`checkbox-frame relative flex items-center justify-center w-[var(--size)] h-[var(--size)] rounded-full ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {/* Checkbox Base */}
        <motion.div
          className="checkbox-box absolute inset-0 bg-black/80 border-[var(--stroke)] border-indigo-600 rounded-full transition-transform duration-300"
          whileHover={!disabled ? { scale: 1.05 } : undefined}
        />

        {/* Checkmark */}
        <motion.div
          className="checkmark-container absolute flex items-center justify-center w-full h-full"
          animate={{ opacity: value ? 1 : 0 }}
        >
          <motion.svg
            viewBox="0 0 32 32"
            className="checkmark w-[var(--icon-size)] h-[var(--icon-size)] fill-none stroke-indigo-500"
            style={{ strokeWidth: "var(--stroke)" }}
          >
            <motion.path
              d="M16 2 L18.6 11 H9.4 L12 2 Z M16 12 L19 21 H13 L16 12 Z M9 15 L7 21 H6 L9 15 Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: value ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.svg>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="glow absolute inset-[-4px] rounded-full bg-indigo-500 opacity-0 blur-lg scale-110"
          animate={{ opacity: value ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Radial Pulse Rings */}
        <div className="pulse-rings absolute inset-[-20px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-[var(--stroke)] border-indigo-500 opacity-0"
              animate={value ? { opacity: [0, 0.2, 0], scale: [0, 1, 2] } : { opacity: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            ></motion.div>
          ))}
        </div>

        {/* Spark Particles */}
        <div className="particles absolute top-1/2 left-1/2">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-indigo-500 rounded-full shadow-lg opacity-0"
              animate={value ? { opacity: 1, scale: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.span>
          ))}
        </div>
      </div>
    </label>
  );
};

export default Checkbox;
