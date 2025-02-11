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
      className={`checkbox-container relative inline-flex items-center cursor-pointer transition-all duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div className="checkbox-background relative w-10 h-10 bg-gray-300 border-2 border-gray-600 rounded-md overflow-hidden transition-colors duration-300">
        {/* Ripple Effect */}
        <motion.div
          className="ripple absolute inset-0 rounded-md bg-green-500 opacity-0"
          animate={value ? { opacity: [0, 0.2, 0], scale: [1, 1.5, 2.5] } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        {/* Glowing Background */}
        <motion.div
          className="glow absolute inset-[-4px] rounded-md bg-green-400 blur-md opacity-0"
          animate={{ opacity: value ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>

        {/* Checkmark Container */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            scale: value ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Checkmark */}
          <motion.svg
            viewBox="0 0 24 24"
            className="checkmark w-6 h-6 stroke-white stroke-2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.path
              d="M5 12l4 4L19 7"
              fill="none"
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
