"use client";

import React from "react";
import { motion } from "framer-motion";

interface FireIceBounceSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const FireIceBounceSwitch: React.FC<FireIceBounceSwitchProps> = ({ value, onChange, disabled = false }) => {
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
          scale: value ? 1.2 : 1,
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

      {/* Bounce effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        initial={false}
        animate={{
          scale: value ? 1.1 : 1,
          opacity: value ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </div>
  );
};

export default FireIceBounceSwitch;
