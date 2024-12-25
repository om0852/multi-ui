"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  color?: "blue" | "red" | "green";
};

const RippleCheckbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, color = "blue" }) => {
  const [mounted, setMounted] = useState(false);

  const colorClasses = {
    blue: "border-blue-700 bg-blue-500",
    red: "border-red-700 bg-red-500",
    green: "border-green-700 bg-green-500",
  };

  const selectedColorClass = value ? colorClasses[color] : "border-gray-400 bg-gray-300";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <label className={`relative w-10 h-10 lg:w-12 lg:h-12 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <motion.div
        className={`absolute inset-0 flex items-center justify-center bg-black/80 border-2 ${selectedColorClass} rounded-md`}
        whileHover={!disabled ? { scale: 1.05 } : undefined}
        initial={{ scale: 1 }}
        animate={{ scale: value ? 0.95 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r opacity-0"
          style={{
            background: `radial-gradient(circle, ${color === "blue" ? "rgba(59, 130, 246, 0.5)" : color === "red" ? "rgba(239, 68, 68, 0.5)" : "rgba(16, 185, 129, 0.5)"} 0%, transparent 70%)`,
          }}
          animate={{ opacity: value ? [0, 1, 0] : 0 }}
          transition={{ duration: 0.6 }}
        />
        {value && (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white fill-current"
          >
            <motion.path
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4 }}
            />
          </svg>
        )}
      </motion.div>
    </label>
  );
};

export default RippleCheckbox;
