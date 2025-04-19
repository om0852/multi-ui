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
      className={`neon-checkbox relative w-12 h-12 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
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
          className="neon-checkbox__box absolute inset-0 bg-black/80 border-2 border-green-700 rounded-md transition-transform duration-300"
          whileHover={!disabled ? { scale: 1.05 } : undefined}
        />

        <motion.div
          className="neon-checkbox__check-container flex items-center justify-center absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)]"
        >
          <svg
            viewBox="0 0 32 32"
            className="neon-checkbox__check w-4/5 h-4/5 fill-none stroke-green-500 stroke-[3] stroke-linecap-round stroke-linejoin-round"
          >
            <motion.path
              d="M3,12.5l7,7L21,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: value ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="neon-checkbox__glow absolute inset-[-2px] rounded-md bg-green-500 opacity-0 blur-sm scale-110"
          animate={{ opacity: value ? 0.2 : 0 }}
        />

        <div className="neon-checkbox__borders absolute inset-0 rounded-md overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={`absolute bg-green-500 opacity-0 transition-opacity duration-300 ${
                i === 0
                  ? "top-0 left-[-100%] w-10 h-[1px]"
                  : i === 1
                  ? "top-[-100%] right-0 w-[1px] h-10"
                  : i === 2
                  ? "bottom-0 right-[-100%] w-10 h-[1px]"
                  : "bottom-[-100%] left-0 w-[1px] h-10"
              }`}
            ></span>
          ))}
        </div>

        <div className="neon-checkbox__effects">
          <div className="neon-checkbox__particles absolute top-1/2 left-1/2">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 bg-green-500 rounded-full shadow-lg opacity-0"
                animate={value ? { opacity: 1, scale: 0 } : { opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              ></motion.span>
            ))}
          </div>

          <div className="neon-checkbox__rings absolute inset-[-20px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-green-500 opacity-0"
                animate={value ? { opacity: [0, 1, 0], scale: [0, 1, 2] } : { opacity: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              ></motion.div>
            ))}
          </div>

          <div className="neon-checkbox__sparks absolute">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-5 h-[1px] bg-gradient-to-r from-green-500 to-transparent opacity-0"
                animate={value ? { opacity: [1, 0], x: [0, 30], scale: [1, 0] } : { opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              ></motion.span>
            ))}
          </div>
        </div>
      </div>
    </label>
  );
};

export default Checkbox;
