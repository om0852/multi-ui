import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MaskedInputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  label = "Enter your input",
  placeholder = "Enter value",
  onChange,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    if (onChange) onChange(value);
  };

  const applyMask = (value: string): string => {
    // Remove non-numeric characters except for the periods (.)
    const cleanedValue = value.replace(/[^0-9.]/g, '');

    // Split the value into parts (by periods)
    let parts = cleanedValue.split('.');

    // Limit the parts to 4 (for IPv4 address format)
    if (parts.length > 4) {
      parts = parts.slice(0, 4);
    }

    // Ensure each part is a valid number between 0 and 255
    parts = parts.map(part => {
      let number = parseInt(part, 10);
      if (number > 255) number = 255;
      if (number < 0) number = 0;
      return number.toString();
    });

    // Join the parts back together with periods
    return parts.join('.');
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className={`flex flex-col items-start w-full max-w-lg mx-auto p-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg ${className}`}
    >
      {label && (
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200"
        >
          {label}
        </motion.label>
      )}
      <motion.div
        className="relative w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inputValue ? 1 : 0 }}
          className="absolute top-full mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          {inputValue && `Formatted: ${inputValue}`}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MaskedInput;
