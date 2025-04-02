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
    <motion.div
      className={`relative w-20 h-10 rounded-full p-1 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } overflow-hidden`}
      onClick={handleToggle}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: value
            ? "linear-gradient(90deg, #fb7185, #ef4444)" // Fire theme
            : "linear-gradient(90deg, #38bdf8, #0ea5e9)", // Ice theme
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>

      {/* Pulsating Glow */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 rounded-full z-0"
          style={{
            background: value
              ? "radial-gradient(circle, rgba(251, 113, 133, 0.3) 20%, transparent 80%)" // Fire glow
              : "radial-gradient(circle, rgba(56, 189, 248, 0.3) 20%, transparent 80%)", // Ice glow
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        />
      )}

      {/* Knob */}
      <motion.div
        className="relative z-10 w-8 h-8 bg-white rounded-full shadow-lg"
        initial={false}
        animate={{
          x: value ? 36 : 0,
          scale: value ? 1.2 : 1,
          boxShadow: value
            ? "0px 0px 15px rgba(251, 113, 133, 0.6)" // Fire shadow
            : "0px 0px 15px rgba(56, 189, 248, 0.6)", // Ice shadow
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      ></motion.div>

      {/* Centered Symbols */}
      <motion.div
        className="absolute inset-0 flex items-center justify-between px-3 z-20"
      >
        {/* Ice Symbol */}
        <motion.span
          className="text-white text-lg relative right-[5px]"
          initial={false}
          animate={{ opacity: value ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
        >
          ❄️
        </motion.span>

        {/* Fire Symbol */}
        <motion.span
          className="text-white text-lg"
          initial={false}
          animate={{ opacity: value ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          🔥
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default SmoothSwitch;
