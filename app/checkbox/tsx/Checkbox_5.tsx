"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the Checkbox component props type
type CheckboxProps = {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, disabled = false }) => {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState<boolean>(value || false); // Local state for checkbox

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  const handleChange = () => {
    if (disabled) return; // Prevent changes if disabled
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked); // Notify parent component about the change
    }
  };

  return (
    <motion.label
      className={`relative inline-block cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      
      {/* Background Circle */}
      <motion.div
        className="w-12 h-6 bg-gray-300 rounded-full transition-all duration-300"
        animate={{
          backgroundColor: checked ? '#4CAF50' : '#ccc', // Green when checked, gray when unchecked
          scaleX: checked ? 1 : 1.05, // Slight scaling effect when checked
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Slider */}
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-md"
          animate={{
            x: checked ? '100%' : '0%', // Moves to the right when checked
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Checkmark */}
      {checked && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: checked ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45"
            animate={{
              scale: checked ? 1 : 0, // Scale in checkmark when checked
            }}
            transition={{
              scale: { duration: 0.2 },
            }}
          />
        </motion.div>
      )}
    </motion.label>
  );
};

export default Checkbox;
