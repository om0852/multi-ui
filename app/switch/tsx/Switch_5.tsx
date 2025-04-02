"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean; 
  onChange: (value: boolean) => void; 
  disabled?: boolean; 
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
            ? "linear-gradient(90deg, #9333ea, #ec4899)"
            : "linear-gradient(90deg, #93c5fd, #64748b)",
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
