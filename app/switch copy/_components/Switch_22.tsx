"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}


const SwitchNine: React.FC<SmoothSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-24 h-12 rounded-sm ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } bg-gradient-to-r from-green-400 to-yellow-400`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-2 left-2 w-8 h-8 bg-white flex items-center justify-center rounded-md shadow-md"
        initial={false}
        animate={{
          x: value ? 48 : 0,
          y: value ? -4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {value ? "🌞" : "🌙"}
      </motion.div>
    </div>
  );
};

export default  SwitchNine
