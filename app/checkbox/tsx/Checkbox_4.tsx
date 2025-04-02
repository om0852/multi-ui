"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the CheckboxProps type to handle value, onChange, and disabled props
type CheckboxProps = {
  value?: boolean; // Optional controlled value
  onChange?: (checked: boolean) => void; // Callback when the checkbox is clicked
  disabled?: boolean; // Optional disabled state
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
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <motion.div
        className="w-9 h-9 bg-gray-400 rounded-full transition-all"
        animate={{
          backgroundColor: checked ? 'limegreen' : '#ccc',
          scale: checked ? 1.1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {checked && (
          <motion.div
            className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full"
            animate={{ opacity: checked ? 1 : 0 }}
            transition={{ opacity: { duration: 0.3 } }}
          />
        )}
      </motion.div>
    </motion.label>
  );
};

export default Checkbox;
