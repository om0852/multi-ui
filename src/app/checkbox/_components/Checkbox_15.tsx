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
        {/* Expand/Contract Check */}
        <motion.div
          className="checkbox-check absolute top-1.5 left-1.5 w-6 h-6 bg-green-500 rounded-sm"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{
            opacity: value ? 1 : 0,
            scale: value ? 1.2 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {/* Checkmark */}
          <motion.div
            className="checkmark w-4 h-4 border-l-4 border-b-4 border-white absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-45deg)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: value ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </motion.div>
      </div>
    </label>
  );
};

export default Checkbox;
