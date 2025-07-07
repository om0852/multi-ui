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
      className={`relative w-24 h-12 rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } overflow-hidden`}
      onClick={handleToggle}
      whileHover={!disabled ? { scale: 1.1 } : {}}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 12,
      }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: value
            ? "linear-gradient(90deg, #f97316, #dc2626)" // Fire theme
            : "linear-gradient(90deg, #3b82f6, #2563eb)", // Ice theme
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Symbols */}
      <motion.div
        className="absolute inset-0 flex items-center justify-between px-4 text-white z-10"
        style={{ fontSize: "1.5rem" }}
      >
        <motion.span
          initial={false}
          animate={{
            rotateY: value ? -90 : 0,
            opacity: value ? 0 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          ❄️
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            rotateY: value ? 0 : 90,
            opacity: value ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          🔥
        </motion.span>
      </motion.div>

      {/* Rotating Knob */}
      <motion.div
        className="absolute top-1 left-1 bg-white w-10 h-10 rounded-full shadow-md z-20"
        style={{ transform: "translateY(-50%)" }}
        initial={false}
        animate={{
          x: value ? 48 : 0,
          rotate: value ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-xl"
          animate={{ rotate: value ? -180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {value ? "🔥" : "❄️"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SmoothSwitch;
