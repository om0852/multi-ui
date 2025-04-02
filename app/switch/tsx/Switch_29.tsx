"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowingSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const GlowingSwitch: React.FC<GlowingSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${value ? "bg-blue-500" : "bg-gray-400"} transition-all duration-300`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md"
        initial={false}
        animate={{ x: value ? 40 : 0 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      ></motion.div>

      {/* Glowing effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-300 opacity-50"
        initial={false}
        animate={{ scale: value ? 1.2 : 1 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
        }}
      />
    </div>
  );
};

export default GlowingSwitch;
