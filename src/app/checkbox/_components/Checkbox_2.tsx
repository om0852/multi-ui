"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CheckboxProps = {
  value?: boolean; // Allow passing a checked value from the parent
  onChange?: (checked: boolean) => void; // Allow the parent to handle the change
  disabled?: boolean; // Allow disabling the checkbox
};

const Checkbox: React.FC<CheckboxProps> = ({ value = false, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(value);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  // Use the value prop if it's provided, otherwise use the internal state
  const currentChecked = value !== undefined ? value : checked;

  // Handle the checkbox change and pass it to the parent if an onChange is provided
  const handleChange = () => {
    if (disabled) return; // If disabled, do not change the state
    const newChecked = !currentChecked;
    if (onChange) {
      onChange(newChecked); // Notify the parent of the change
    } else {
      setChecked(newChecked); // If no onChange is passed, update the internal state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="relative w-12 h-12"
        whileTap={{ scale: 0.9 }}
        onClick={handleChange}
      >
        <input
          type="checkbox"
          id="checkbox"
          className="hidden"
          checked={currentChecked}
          onChange={handleChange}
          disabled={disabled}
        />
        <label
          htmlFor="checkbox"
          className={`relative flex items-center justify-center w-full h-full rounded-full cursor-pointer transition-all duration-200 shadow-lg ${
            currentChecked
              ? "bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400"
              : "bg-gray-300"
          } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <motion.div
            initial={{ width: "70%", height: "70%" }}
            animate={currentChecked ? { width: "0", height: "0" } : { width: "70%", height: "70%" }}
            transition={{ duration: 0.3 }}
            className="absolute bg-white rounded-full"
          />
          <motion.div
            className="absolute w-6 h-6 rotate-[-40deg]"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              currentChecked
                ? { opacity: 1, scale: 1, transition: { delay: 0.2 } }
                : { opacity: 0, scale: 0 }
            }
          >
            <div className="absolute w-1 h-3 bg-white rounded left-0 bottom-0 shadow-md" />
            <div className="absolute w-5 h-1 bg-white rounded left-0 bottom-0 shadow-md translate-x-8" />
          </motion.div>
        </label>
      </motion.div>
    </div>
  );
};

export default Checkbox;
