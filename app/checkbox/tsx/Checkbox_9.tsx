"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <label
      className={`checkbox-container w-6 h-6 relative inline-flex items-center cursor-pointer transition-all duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div
        className={`checkbox-background relative w-full h-full bg-transparent border-2 rounded-full overflow-hidden shadow-sm transition-all duration-300 ${
          value ? "bg-blue-500 border-blue-500" : "bg-gray-100 border-gray-400"
        }`}
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Pulse Effect */}
        {value && (
          <motion.div
            className="pulse absolute inset-0 bg-blue-400 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.4, 0], scale: [1, 1.5] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
          />
        )}

        {/* Icon Animation */}
        <motion.div
          className="icon-container absolute w-full h-full flex items-center justify-center"
          animate={{ scale: value ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="icon"
            style={{ width: "50%", height: "50%" }}
            initial={{ rotate: 0 }}
            animate={{ rotate: value ? 360 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.path
              d="M5 12l4 4L19 7"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: value ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
