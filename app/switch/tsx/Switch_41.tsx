"use client";

import React from "react";
import { motion } from "framer-motion";

interface FireIceShineSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const FireIceShineSwitch: React.FC<FireIceShineSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${value ? "bg-red-600" : "bg-blue-400"}`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: value ? 40 : 0,
          boxShadow: value ? "0 0 15px rgba(255, 69, 0, 0.7)" : "0 0 10px rgba(70, 130, 180, 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
      >
        {/* Icon switch */}
        {value ? "🔥" : "❄️"}
      </motion.div>

      {/* Shine effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        initial={false}
        animate={{
          scale: value ? 1.1 : 1,
          opacity: value ? 0.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </div>
  );
};

export default FireIceShineSwitch;
