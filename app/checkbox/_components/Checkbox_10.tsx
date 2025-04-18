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
      className={`checkbox-container w-6 h-6 relative inline-flex items-center cursor-pointer transition-transform duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
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
        className={`checkbox-background relative w-full h-full bg-white border-2 rounded-md overflow-hidden shadow-inner transition-colors duration-300 ${
          value ? "bg-purple-600 border-purple-600" : "bg-white border-gray-300"
        }`}
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Glow Effect */}
        {value && (
          <motion.div
            className="glow absolute inset-0 bg-purple-400 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, scale: 1.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}

        {/* Bounce Checkmark Animation */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{ scale: value ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="checkmark"
            style={{ width: "50%", height: "50%" }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: value ? 0 : -10, opacity: value ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.path
              d="M5 12l4 4L19 7"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
