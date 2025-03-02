"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const SwitchNineteen: React.FC<SmoothSwitchProps> = ({ value, onChange, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <div
      className={`relative w-20 h-10 rounded-sm ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} bg-gradient-to-r from-pink-400 to-purple-600`}
      onClick={handleToggle}
    >
      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-8 h-8 bg-white flex items-center justify-center shadow-md"
        initial={false}
        animate={{
          x: value ? 40 : 0,
          scale: value ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {value ? "🎉" : "💤"}
      </motion.div>
    </div>
  );
};

export default SwitchNineteen;
