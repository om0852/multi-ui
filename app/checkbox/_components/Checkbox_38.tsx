"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large"; // Control the size
};

const CircularCheckbox: React.FC<CheckboxProps> = ({
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

  // Dynamic size styles
  const sizeStyles = {
    small: { "--size": "2rem", "--stroke": "2", "--icon-size": "50%" },
    medium: { "--size": "3rem", "--stroke": "3", "--icon-size": "60%" },
    large: { "--size": "4rem", "--stroke": "4", "--icon-size": "70%" },
  }[size];

  return (
    <label
      className={`circular-checkbox relative cursor-pointer`}
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
        className={`circular-checkbox-frame relative flex items-center justify-center w-[var(--size)] h-[var(--size)] ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {/* Outer Circle */}
        <motion.div
          className="outer-circle absolute inset-0 border-[var(--stroke)] border-teal-500 rounded-full"
          animate={{
            rotate: value ? [0, 360] : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            repeat: value ? Infinity : 0,
          }}
        />

        {/* Inner Circle */}
        <motion.div
          className="inner-circle absolute inset-[10%] bg-black/80 border-[var(--stroke)] border-teal-700 rounded-full"
          whileHover={!disabled ? { scale: 1.05 } : undefined}
        />

        {/* Checkmark with Smooth Draw */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{ opacity: value ? 1 : 0, rotate: value ? 360 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 32 32"
            className="checkmark w-[var(--icon-size)] h-[var(--icon-size)] fill-none stroke-teal-500"
            style={{ strokeWidth: "var(--stroke)" }}
          >
            <motion.path
              d="M8 16 L14 22 L24 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: value ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </motion.div>

        {/* Pulsing Glow */}
        <motion.div
          className="glow absolute inset-[-4px] rounded-full bg-teal-500 opacity-0 blur-md scale-110"
          animate={{ opacity: value ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />

      
      </div>
    </label>
  );
};

export default CircularCheckbox;
