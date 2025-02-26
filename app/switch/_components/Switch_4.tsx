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
      className={`relative w-20 h-10 rounded-full p-1 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleToggle}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: value
            ? "linear-gradient(90deg, #34d399, #059669)"
            : "linear-gradient(90deg, #d1d5db, #9ca3af)",
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>

      {/* Knob */}
      <motion.div
        className="relative z-10 w-8 h-8 bg-white rounded-full shadow-md"
        initial={false}
        animate={{
          x: value ? 36 : 0,
          scale: value ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      ></motion.div>
    </div>
  );
};

export default SmoothSwitch;
