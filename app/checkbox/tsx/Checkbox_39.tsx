"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large"; // Control the size
};

const RadialCheckbox: React.FC<CheckboxProps> = ({
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
      className={`radial-checkbox relative cursor-pointer`}
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
        className={`radial-checkbox-frame relative flex items-center justify-center w-[var(--size)] h-[var(--size)] ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {/* Outer Circle */}
        <motion.div
          className="outer-circle absolute inset-0 border-[var(--stroke)] border-pink-500 rounded-full"
          animate={{
            scale: value ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />

        {/* Inner Circle */}
        <motion.div
          className="inner-circle absolute inset-[10%] bg-black/80 border-[var(--stroke)] border-pink-700 rounded-full"
          whileHover={!disabled ? { scale: 1.1 } : undefined}
        />

        {/* Radial Explosion */}
        <div className="radial-explosion absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute bg-pink-500 rounded-full opacity-0"
              style={{
                width: "var(--stroke)",
                height: "var(--stroke)",
                transform: `rotate(${i * 45}deg) translateY(-50%)`,
                transformOrigin: "center",
              }}
              animate={
                value
                  ? { opacity: [1, 0], scale: [1, 2] }
                  : { opacity: 0, scale: 1 }
              }
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
            ></motion.span>
          ))}
        </div>

        {/* Checkmark with Smooth Draw */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{ opacity: value ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 32 32"
            className="checkmark w-[var(--icon-size)] h-[var(--icon-size)] fill-none stroke-pink-500"
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

        {/* Glow Effect */}
        <motion.div
          className="glow absolute inset-[-4px] rounded-full bg-pink-500 opacity-0 blur-md"
          animate={{
            opacity: value ? [0.3, 0.6, 0.3] : 0,
            scale: value ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.6,
            repeat: value ? Infinity : 0,
            repeatType: "reverse",
          }}
        />
      </div>
    </label>
  );
};

export default RadialCheckbox;
