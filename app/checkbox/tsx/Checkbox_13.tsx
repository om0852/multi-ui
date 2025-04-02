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
      <div className="checkbox-background relative w-10 h-10 bg-gray-200 border-2 border-gray-600 rounded-sm transition-colors duration-300">
        <motion.div
          className="checkbox-check w-6 h-6 bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 rounded-sm"
          animate={{
            backgroundColor: value ? "#4caf50" : "#fff",
            opacity: value ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <motion.div
            className="checkmark w-3 h-3 bg-transparent border-l-4 border-b-4 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
