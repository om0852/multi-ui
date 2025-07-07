"use client";

import React from "react";
import { motion } from "framer-motion";

interface UniqueSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}

const UniqueSwitch: React.FC<UniqueSwitchProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <motion.div
      className={`relative w-16 h-8 flex items-center rounded-full border-2 transition-all duration-300 overflow-hidden ${
        value ? "border-blue-500" : "border-gray-400"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleToggle}
      animate={{
        rotate: value ? 5 : -5, // Wobble effect
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      {/* Background */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          value ? "bg-blue-500" : "bg-gray-300"
        }`}
        initial={false}
        animate={{
          backgroundColor: value ? "#3b82f6" : "#d1d5db",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Ripple Effect */}
      {!disabled && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0) 60%)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: value ? 1.5 : 0 }}
          transition={{ duration: 0.4 }}
        ></motion.div>
      )}

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full z-10"
        style={{
          filter: "blur(10px)",
          background: value
            ? "rgba(59, 130, 246, 0.5)"
            : "rgba(209, 213, 219, 0.5)",
        }}
        animate={{
          opacity: value ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      {/* Knob */}
      <motion.div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-lg z-20 ${
          value ? "left-8" : "left-0"
        }`}
        initial={false}
        animate={{
          x: value ? 0 : 5,
          scale: value ? 1 : 1,
          rotate: value ? 360 : 0, // Add rotation
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default UniqueSwitch;
