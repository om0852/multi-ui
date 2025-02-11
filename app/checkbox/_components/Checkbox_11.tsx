"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  color?: "blue" | "red" | "green";
};

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, color = "blue" }) => {
  const [mounted, setMounted] = useState(false);

  const colorClasses = {
    blue: "border-blue-700 bg-blue-500",
    red: "border-red-700 bg-red-500",
    green: "border-green-700 bg-green-500",
  };

  const selectedColorClass = value ? colorClasses[color] : "border-gray-400 bg-gray-300";

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <label
      className={`neon-checkbox relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div className="neon-checkbox__frame relative w-full h-full">
        <motion.div
          className={`neon-checkbox__box absolute inset-0 bg-black/80 border-2 ${selectedColorClass} rounded-md transition-transform duration-300`}
          whileHover={!disabled ? { scale: 1.1 } : undefined}
        />

        <motion.div
          className="neon-checkbox__check-container flex items-center justify-center absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)]"
        >
          <svg
            viewBox="0 0 32 32"
            className={`neon-checkbox__check w-3/5 h-3/5 md:w-4/5 md:h-4/5 fill-none stroke-${color}-500 stroke-[3] stroke-linecap-round stroke-linejoin-round`}
          >
            <motion.path
              d="M3,12.5l7,7L21,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: value ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <motion.div
          className={`neon-checkbox__glow absolute inset-[-2px] rounded-md ${selectedColorClass} opacity-0 blur-md scale-110`}
          animate={{ opacity: value ? 0.3 : 0 }}
        />

        <div className="neon-checkbox__effects">
          <div className="neon-checkbox__rings absolute inset-[-20px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute inset-0 rounded-full border ${selectedColorClass} opacity-0`}
                animate={value ? { opacity: [0, 0.5, 0], scale: [0.5, 1, 1.5 + i * 0.2] } : { opacity: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              ></motion.div>
            ))}
          </div>

          <div className="neon-checkbox__sparks absolute">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.span
                key={i}
                className={`absolute w-10 h-[1px] md:w-12 bg-gradient-to-r from-${color}-500 to-transparent opacity-0`}
                animate={value ? { opacity: [1, 0], x: [0, 20 + i * 5], scale: [1, 0.5] } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.span>
            ))}
          </div>
        </div>
      </div>
    </label>
  );
};

export default Checkbox;
