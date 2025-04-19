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

  const ballSize = {
    small: "12px",  // Adjusted size for small
    medium: "18px",
    large: "24px",
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
        {/* Expanding Border */}
        <motion.div
          className="expanding-border absolute inset-0 border-4 border-blue-500 rounded-full"
          animate={{
            scale: value ? 1.2 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        ></motion.div>

        {/* Bouncing Ball */}
        <motion.div
          className="ball absolute bg-blue-500 rounded-full"
          animate={{
            y: value ? [-5, 5, -5] : 0,
            scale: value ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            repeat: value ? Infinity : 0,
            repeatType: "loop",
          }}
          style={{
            width: ballSize[size],
            height: ballSize[size],
            top: size === "small" ? "50%" : "0", // Adjust positioning for small size
            left: size === "small" ? "50%" : "0", // Center ball in small size
            transform: "translate(-50%, -50%)",
          }}
        ></motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
