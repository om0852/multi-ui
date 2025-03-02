"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  color?: "blue" | "red" | "green";
};

const WaveCheckbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, color = "blue" }) => {
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
      className={`wave-checkbox relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer ${
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
        className={`wave-checkbox__box absolute inset-0 bg-black/80 border-2 ${selectedColorClass} rounded-md`}
        whileHover={!disabled ? { scale: 1.05 } : undefined}
      />
      <motion.div
        className={`wave-checkbox__glow absolute inset-[-2px] ${selectedColorClass} opacity-0 blur-md scale-110`}
        animate={{ opacity: value ? 0.5 : 0 }}
      />
      <motion.div
        className="wave-checkbox__wave absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={value ? { scale: 1.5, opacity: [0.5, 0] } : { scale: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`w-full h-full rounded-full ${selectedColorClass}`} />
      </motion.div>
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

export default WaveCheckbox;
