"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large"; // Control the size
};

const DiamondCheckbox: React.FC<CheckboxProps> = ({
  value,
  onChange,
  disabled = false,
  size = "medium",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Dynamic styles using CSS variables
  const sizeStyles = {
    small: { "--size": "2rem", "--stroke": "2", "--icon-size": "60%" },
    medium: { "--size": "3rem", "--stroke": "3", "--icon-size": "70%" },
    large: { "--size": "4rem", "--stroke": "4", "--icon-size": "80%" },
  }[size];

  return (
    <label
      className={`diamond-checkbox relative cursor-pointer`}
      style={sizeStyles as React.CSSProperties}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div
        className={`diamond-checkbox-frame relative flex items-center justify-center w-[var(--size)] h-[var(--size)] ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {/* Diamond Base */}
        <motion.div
          className="diamond-box absolute inset-0 bg-black/80 border-[var(--stroke)] border-purple-600 transform rotate-45 transition-transform duration-300"
          whileHover={!disabled ? { scale: 1.05 } : undefined}
        />

        {/* Checkmark Animation */}
        <motion.div
          className="checkmark-container absolute flex items-center justify-center w-full h-full"
          animate={{ opacity: value ? 1 : 0 }}
        >
          <motion.svg
            viewBox="0 0 32 32"
            className="checkmark w-[var(--icon-size)] h-[var(--icon-size)] fill-none stroke-purple-500"
            style={{ strokeWidth: "var(--stroke)" }}
          >
            <motion.path
              d="M8 16 L14 22 L24 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: value ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.svg>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="glow absolute inset-[-4px] rounded-lg bg-purple-500 opacity-0 blur-md scale-110"
          animate={{ opacity: value ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Burst Animation */}
        <div className="burst absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className={`absolute bg-gradient-to-r from-purple-500 to-transparent w-[2px] h-[var(--size)] opacity-0`}
              style={{
                transform: `rotate(${i * 45}deg) translateY(-50%)`,
                transformOrigin: "center",
              }}
              animate={value ? { opacity: [1, 0], scale: [1, 1.5] } : { opacity: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
            ></motion.span>
          ))}
        </div>
      </div>
    </label>
  );
};

export default DiamondCheckbox;
