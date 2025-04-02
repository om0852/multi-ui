"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  color?: "blue" | "red" | "green";
};


const BounceCheckbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, color = "red" }) => {
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
    <label
      className={`bounce-checkbox relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer ${
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
      <motion.div
        className={`bounce-checkbox__box absolute inset-0 bg-black/80 border-2 ${selectedColorClass} rounded-lg`}
        initial={{ y: -10 }}
        animate={value ? { y: [0, -5, 0] } : { y: -10 }}
        transition={{ duration: 0.5, repeat: 2, repeatType: "reverse" }}
      />
      <motion.div
        className={`bounce-checkbox__glow absolute inset-[-2px] rounded-md ${selectedColorClass} opacity-0 blur-md scale-110`}
        animate={{ opacity: value ? 0.5 : 0 }}
      />
      {value && (
        <motion.svg
          viewBox="0 0 32 32"
          className="absolute w-4/5 h-4/5 fill-none stroke-white stroke-[3]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            d="M3,12.5l7,7L21,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.svg>
      )}
    </label>
  );
};

export default BounceCheckbox;
