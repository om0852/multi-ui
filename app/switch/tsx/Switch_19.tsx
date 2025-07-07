"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}

const SwitchSix: React.FC<SmoothSwitchProps> = ({
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
      className={`relative w-14 h-14 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleToggle}
    >
      {/* Background */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          value
            ? "bg-gradient-to-br from-teal-400 to-teal-600"
            : "bg-gradient-to-br from-gray-300 to-gray-500"
        }`}
        initial={false}
        animate={{
          opacity: value ? 1 : 0.5,
          scale: value ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Knob */}
      <motion.div
        className="absolute top-2 left-2 w-10 h-10 bg-white rounded-full shadow-md"
        initial={false}
        animate={{
          x: value ? 20 : 0,
          scale: value ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 15,
        }}
      ></motion.div>
    </div>
  );
};

export default SwitchSix;
