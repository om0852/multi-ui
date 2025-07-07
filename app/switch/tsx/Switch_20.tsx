"use client";

import React from "react";
import { motion } from "framer-motion";

interface SmoothSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SmoothSwitchProps> = ({
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
      {/* Background with leaf pattern */}
      <motion.div
        className={`absolute inset-0 rounded-full overflow-hidden ${
          value
            ? "bg-gradient-to-r from-green-400 to-emerald-600"
            : "bg-gradient-to-r from-gray-300 to-gray-400"
        }`}
        initial={false}
        animate={{
          scale: value ? [1, 1.02, 1] : 1,
        }}
        transition={{
          duration: 0.6,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        {/* Decorative leaf patterns */}
        {value && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Knob with leaf design */}
      <motion.div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg ${
          value ? "bg-white" : "bg-gray-100"
        }`}
        initial={false}
        animate={{
          x: value ? 32 : 0,
          rotate: value ? 180 : 0,
          scale: value ? [1, 1.1, 1] : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Leaf pattern on knob */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center ${
            value ? "text-green-500" : "text-gray-400"
          }`}
          initial={false}
          animate={{
            scale: value ? [1, 1.2, 1] : 1,
            opacity: value ? 1 : 0.5,
          }}
          transition={{ duration: 0.4 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path d="M12 2L8 6H16L12 2zM12 22L8 18H16L12 22z" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Switch;
