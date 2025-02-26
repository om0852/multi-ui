"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}


const SwitchFive: React.FC<SmoothSwitchProps> = ({ value, onChange, disabled = false }) => {
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
            ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
            : "bg-gradient-to-br from-gray-300 to-gray-500"
        }`}
        initial={false}
        animate={{
          scale: value ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Knob */}
      <motion.div
        className="absolute top-2 left-2 w-10 h-10 bg-white rounded-full shadow-md"
        initial={false}
        animate={{
          rotate: value ? 360 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.6,
        }}
      ></motion.div>
    </div>
  );
};


export default  SwitchFive
