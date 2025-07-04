import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MaskedInputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  label = "Enter your email",
  placeholder = "Email address",
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
    // Remove any non-email characters (except @ and .)
    let cleanedValue = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');

    // Ensure only one @ symbol
    const atIndex = cleanedValue.indexOf('@');
    if (atIndex !== -1) {
      cleanedValue = cleanedValue.slice(0, atIndex + 1) + cleanedValue.slice(atIndex + 1).replace(/[^a-zA-Z0-9.-]/g, '');
    }

    // Prevent the domain from being incomplete
    const domainParts = cleanedValue.split('@');
    if (domainParts.length === 2) {
      domainParts[1] = domainParts[1].replace(/[^a-zA-Z0-9.-]/g, '');
      cleanedValue = domainParts.join('@');
    }

    return cleanedValue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`flex flex-col items-start w-full max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl ${className}`}
    >
      {label && (
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-200"
        >
          {label}
        </motion.label>
      )}

      <motion.div
        className="relative w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-6 py-4 text-lg text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 shadow-sm focus:shadow-md transition-all duration-300 ease-in-out bg-white dark:bg-gray-700"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inputValue ? 1 : 0 }}
          className="absolute top-full mt-3 text-sm text-gray-500 dark:text-gray-400"
        >
          {inputValue && `Formatted: ${inputValue}`}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inputValue ? 0.6 : 0 }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
      >
        <motion.span
          animate={{ opacity: inputValue ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500 dark:text-gray-400"
        >
          @
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default MaskedInput;
