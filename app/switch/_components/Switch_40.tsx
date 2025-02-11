"use client";

import React from "react";
import { motion } from "framer-motion";

interface FireIcePulseSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const FireIcePulseSwitch: React.FC<FireIcePulseSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-10 h-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${value ? "bg-red-600" : "bg-blue-400"}`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          scale: value ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon switch */}
        {value ? "🔥" : "❄️"}
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        initial={false}
        animate={{
          scale: value ? 1.05 : 1,
          opacity: value ? 0.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />
    </div>
  );
};

export default FireIcePulseSwitch;
