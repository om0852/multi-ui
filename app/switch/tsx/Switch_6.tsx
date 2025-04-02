"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; // Current state of the switch
  onChange: (value: boolean) => void; // Callback function when toggled
  disabled?: boolean; // Whether the switch is disabled
}

const SmoothSwitch: React.FC<SmoothSwitchProps> = ({
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
    <div
      className={`relative w-16 h-8 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleToggle}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: value
            ? "linear-gradient(90deg, #f06292, #ec407a)" // Pink gradient
            : "linear-gradient(90deg, #e0e0e0, #d0d0d0)", // Subtle gray gradient for inactive state
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>

      {/* Glow Effect */}
      {value && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            boxShadow: "0 0 10px 5px rgba(236, 72, 153, 0.7)",
          }}
        ></motion.div>
      )}

      {/* Knob */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
        initial={false}
        animate={{
          x: value ? 32 : 0,
          rotate: value ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      ></motion.div>
    </div>
  );
};

export default SmoothSwitch;