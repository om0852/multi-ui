"use client";

import React from "react";
import { motion } from "framer-motion";

interface BounceSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const BounceSwitch: React.FC<BounceSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } bg-purple-600`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md"
        initial={false}
        animate={{
          x: value ? 40 : 0,
          y: value ? 0 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
      ></motion.div>

      {/* Bounce effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full bg-purple-500 opacity-70"
        initial={false}
        animate={{ scale: value ? 1.1 : 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </div>
  );
};

export default BounceSwitch;
