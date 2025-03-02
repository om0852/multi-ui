"use client";

import React from "react";
import { motion } from "framer-motion";

interface FireIceFlipSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const FireIceFlipSwitch: React.FC<FireIceFlipSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${value ? "bg-red-500" : "bg-blue-500"}`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          rotateY: value ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {/* Icon switch */}
        {value ? "🔥" : "❄️"}
      </motion.div>
    </div>
  );
};

export default FireIceFlipSwitch;
