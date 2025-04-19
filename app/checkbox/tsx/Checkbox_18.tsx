"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  color?: "blue" | "red" | "green";
};

const FlipCheckbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false, color = "red" }) => {
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
      className={`flip-checkbox relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <motion.div
        className={`flip-checkbox__frame relative w-full h-full bg-black/80 border-2 ${selectedColorClass} rounded-md`}
        animate={{ rotateY: value ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="flip-checkbox__front absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <svg
            viewBox="0 0 32 32"
            className={`flip-checkbox__check w-3/5 h-3/5 md:w-4/5 md:h-4/5 fill-none stroke-${color}-500 stroke-[3] stroke-linecap-round stroke-linejoin-round`}
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
          className="flip-checkbox__back absolute inset-0 bg-gray-300 rounded-md flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-gray-700 font-bold">OFF</span>
        </motion.div>
      </motion.div>
    </label>
  );
};

export default FlipCheckbox ;
