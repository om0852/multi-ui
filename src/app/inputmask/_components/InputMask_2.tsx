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
    let maskedValue = "";
    let maskIndex = 0;
    let valueIndex = 0;

    while (maskIndex < mask.length && valueIndex < value.length) {
      if (mask[maskIndex] === '9') {
        if (/[0-9]/.test(value[valueIndex])) {
          maskedValue += value[valueIndex];
          valueIndex++;
        }
        maskIndex++;
      } else {
        maskedValue += mask[maskIndex];
        maskIndex++;
        if (value[valueIndex] === mask[maskIndex - 1]) {
          valueIndex++;
        }
      }
    }

    return maskedValue;
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      {label && (
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 text-xl font-semibold text-blue-600"
        >
          {label}
        </motion.label>
      )}
      <motion.input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        whileFocus={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
      />
    </motion.div>
  );
};

export default MaskedInput;

