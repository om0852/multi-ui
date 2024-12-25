"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the CheckboxProps interface with value, onChange, and disabled props
type CheckboxProps = {
  value?: boolean; // Optional controlled value
  onChange?: (checked: boolean) => void; // Callback for value changes
  disabled?: boolean; // Optional disabled state
};

const Checkbox: React.FC<CheckboxProps> = ({ value=false, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  // Controlled or uncontrolled checkbox
  const [checked, setChecked] = useState<boolean>(value);

  const handleChange = () => {
    if (disabled) return; // Prevent changes if disabled
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked); // Notify parent component about the change
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="relative w-7 h-7 border border-gray-300 rounded-sm transition-all duration-200 cursor-pointer"
        whileTap={{ scale: 0.9 }}
        onClick={handleChange}
        animate={{
          backgroundColor: checked ? "#6871f1" : "transparent",
        }}
      >
        <input
          type="checkbox"
          id="cbx"
          className="hidden"
          checked={checked}
          onChange={handleChange}
          disabled={disabled} // Add the disabled property here
        />
        <motion.label
          htmlFor="cbx"
          className="relative flex items-center justify-center w-full h-full cursor-pointer"
        >
          {/* Animated checkmark */}
          <motion.div
            className="absolute top-2 left-2 w-2 h-4 bg-white border-r-2 border-b-2 rotate-45"
            initial={{ opacity: 0, scale: 0 }}
            animate={checked ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          />
        </motion.label>
      </motion.div>
    </div>
  );
};

export default Checkbox;
