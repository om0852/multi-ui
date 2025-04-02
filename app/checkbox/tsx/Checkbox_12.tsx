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

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
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
      <div className="checkbox-background relative w-10 h-10 bg-gray-300 border-2 border-gray-500 rounded-md transition-colors duration-300">
        {/* Checkmark box */}
        <motion.div
          className="checkbox-check w-6 h-6 bg-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md"
          animate={{
            opacity: value ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <motion.div
            className="checkmark w-3 h-3 bg-transparent border-l-4 border-b-4 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ rotate: -45 }}
            animate={{ rotate: value ? 0 : -45 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="checkbox-glow absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 to-pink-500 opacity-0"
          animate={value ? { opacity: 0.2, scale: 1.1 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </label>
  );
};

export default Checkbox;
