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
      className={`relative w-20 h-10 rounded-md ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } overflow-hidden`}
      onClick={handleToggle}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-md"
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
        className="absolute inset-0 flex items-center justify-between px-3 text-white z-20"
        style={{ fontSize: "1.5rem" }}
      >
        {/* Ice Symbol */}
        <motion.span
          initial={false}
          animate={{
            position:"relative",
            opacity: !value ? -5 : 5,
            x:30,
            zIndex:200, // Fade in/out based on value
          }}
          transition={{ duration: 0.4 }}
        >
          ❄️
        </motion.span>

        {/* Fire Symbol */}
        <motion.span
          initial={false}
          animate={{
            opacity: !value ? 1 : 0,
            x:-40,
             // Fade in/out based on value
          }}
          transition={{ duration: 0.4 }}
        >
          🔥
        </motion.span>
      </motion.div>

      {/* Square Knob */}
      <motion.div
        className="absolute top-1 left-0 bg-white w-8 h-8 shadow-lg z"
        style={{
          transform: "translateY(-50%)", // Center knob vertically
        }}
        initial={false}
        animate={{
          x: value ? 42 : 5, // Knob moves left/right within the container
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      />
      
    </motion.div>
  );
};

export default SmoothSwitch;
