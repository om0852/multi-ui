import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MaskedInputProps {
  label?: string;
  placeholder?: string;
  mask: string;
  onChange?: (value: string) => void;
  className?: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  label = "Enter your input",
  placeholder = "Enter value",
  mask,
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
    // Remove any non-digit characters
    let cleanedValue = value.replace(/\D/g, '');

    // Limit the length based on the mask length (UPC-A or EAN-13)
    if (mask === 'UPC') {
      cleanedValue = cleanedValue.substring(0, 12); // UPC-A allows 12 digits
    } else if (mask === 'EAN') {
      cleanedValue = cleanedValue.substring(0, 13); // EAN-13 allows 13 digits
    }

    // Format the cleaned value as a code
    return cleanedValue;
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className={`flex flex-col items-start w-full max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-lg ${className}`}
    >
      {label && (
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-2 text-lg font-medium text-gray-800"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inputValue ? 1 : 0 }}
          className="absolute top-full mt-2 text-sm text-gray-500"
        >
          {inputValue && `Formatted: ${inputValue}`}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MaskedInput;
