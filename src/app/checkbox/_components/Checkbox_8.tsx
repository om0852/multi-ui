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
      className={`checkbox-container w-3 h-3 relative inline-flex items-center cursor-pointer transition-all duration-300 ${
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
      <div
        className="checkbox-background relative w-full h-full bg-gray-200 border-2 border-gray-600 rounded-md overflow-hidden"
        style={{ aspectRatio: "1 / 1" }} // Ensures the checkbox remains square
      >
        {/* Gradient Fill */}
        <motion.div
          className="gradient-fill absolute inset-0 bg-gradient-to-br from-green-400 to-green-600"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: value ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            transformOrigin: "bottom",
          }}
        ></motion.div>

        {/* Checkmark Container */}
        <motion.div
          className="checkmark-container absolute w-full h-full flex items-center justify-center"
          animate={{
            scale: value ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Pop-Out Checkmark */}
          <motion.svg
            viewBox="0 0 24 24"
            className="checkmark"
            style={{
              width: "60%", // Scales based on the container
              height: "60%", // Maintains aspect ratio
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: value ? [0, 1.2, 1] : 0,
              opacity: value ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              bounce: 0.3,
            }}
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
              transition={{ duration: 0.4 }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
