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
      className={`checkbox-container w-5 h-5 relative inline-flex items-center cursor-pointer transition-all duration-300 ${
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
        className={`checkbox-background relative w-full h-full bg-gray-200 border-2 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
          value ? "bg-green-500 border-green-500" : "bg-white border-gray-300"
        }`}
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Ripple Effect */}
        {value && (
          <motion.div
            className="ripple absolute inset-0 bg-green-300 rounded-full"
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Checkmark Animation */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{ scale: value ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="checkmark"
            style={{ width: "50%", height: "50%" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
