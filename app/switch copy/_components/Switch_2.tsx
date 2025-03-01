"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}

const SmoothSwitch: React.FC<SmoothSwitchProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 flex items-center px-1 rounded-full ${
        value ? "bg-green-500" : "bg-gray-400"
      } ${
        disabled
          ? "opacity-50 cursor-[not-allowed]"
          : "cursor-pointer"
      }`}
      onClick={handleToggle}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {/* Knob */}
      <motion.div
        className="w-8 h-8 bg-white rounded-full shadow-md"
        initial={false}
        animate={{ x: value ? 36 : 0 }} // Adjusted x offset for proper alignment
        transition={{
          type: "spring", // Smooth spring animation
          stiffness: 400, // Higher stiffness for less bouncy animation
          damping: 30, // Prevents excessive bouncing
        }}
      />
    </div>
  );
};

export default SmoothSwitch;
