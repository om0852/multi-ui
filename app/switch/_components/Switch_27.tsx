"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}

const SwitchThirteen: React.FC<SmoothSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-sm ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } bg-gradient-to-r from-cyan-500 to-indigo-500`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white flex items-center justify-center shadow-md"
        initial={false}
        animate={{
          x: value ? 40 : 0,
          y: value ? 4 : -4,
          rotate: value ? 90 : -90,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        {value ? "⚡" : "🌪"}
      </motion.div>
    </div>
  );
};

export default SwitchThirteen;
