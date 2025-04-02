import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MaskedInput = ({
  label = "Enter your email",
  placeholder = "Email address",
  onChange,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = applyMask(e.target.value);
    setInputValue(value);
    if (onChange) onChange(value);
  };

  const applyMask = (value) => {
    let cleanedValue = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
    const atIndex = cleanedValue.indexOf('@');
    if (atIndex !== -1) {
      cleanedValue = cleanedValue.slice(0, atIndex + 1) + cleanedValue.slice(atIndex + 1).replace(/[^a-zA-Z0-9.-]/g, '');
    }
    const domainParts = cleanedValue.split('@');
    if (domainParts.length === 2) {
      domainParts[1] = domainParts[1].replace(/[^a-zA-Z0-9.-]/g, '');
      cleanedValue = domainParts.join('@');
    }
    return cleanedValue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`flex flex-col items-start w-full max-w-md mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-xl ${className}`}
    >
      {label && (
        <motion.label
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg font-semibold mb-4"
        >
          {label}
        </motion.label>
      )}

      <motion.div
        className="relative w-full"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-6 py-4 text-lg text-gray-800 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ease-in-out bg-white"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inputValue ? 1 : 0 }}
          className="absolute top-full mt-3 text-sm text-gray-500"
        >
          {inputValue && `Formatted: ${inputValue}`}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MaskedInput;