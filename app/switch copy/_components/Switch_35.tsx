"use client";

import React from "react";
import { motion } from "framer-motion";

interface FireIceGlowSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const FireIceGlowSwitch: React.FC<FireIceGlowSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${value ? "bg-orange-600" : "bg-blue-500"}`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: value ? 40 : 0,
          boxShadow: value ? "0px 0px 20px rgba(255, 69, 0, 0.7)" : "0px 0px 10px rgba(70, 130, 180, 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Icon switch */}
        {value ? "🔥" : "❄️"}
      </motion.div>

      {/* Glowing effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        initial={false}
        animate={{
          scale: value ? 1.1 : 1,
          opacity: value ? 0.7 : 1,
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

export default FireIceGlowSwitch;
