"use client";

import React from "react";
import { motion } from "framer-motion";

interface FireIceWaveSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const FireIceWaveSwitch: React.FC<FireIceWaveSwitchProps> = ({ value, onChange, disabled = false }) => {
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

      {/* Wave effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        initial={false}
        animate={{ scale: value ? 1.1 : 1, opacity: value ? 0.5 : 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />
    </div>
  );
};

export default FireIceWaveSwitch;
