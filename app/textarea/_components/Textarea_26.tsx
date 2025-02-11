"use client";

import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_26: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  showCharacterCount,
  maxLength,
  disabled,
  value,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(value as string || '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <label className="block text-sm font-medium mb-2 text-cyan-500">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          {...props}
          value={text}
          onChange={handleChange}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full p-4 rounded-lg bg-black border-2
            ${isFocused ? 'border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)]' : 'border-gray-700'}
            ${error ? 'border-red-500' : ''}
            ${disabled ? 'bg-gray-900 cursor-not-allowed' : ''}
            text-cyan-300 placeholder-cyan-700
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-cyan-500
            resize-none min-h-[120px]
          `}
          style={{
            backdropFilter: 'blur(8px)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-cyan-500 opacity-0 rounded-lg pointer-events-none"
          animate={{
            opacity: isFocused ? 0.05 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="mt-1 flex justify-between">
        <div>
          {error ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : helperText ? (
            <p className="text-cyan-600 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <p className="text-cyan-600 text-sm">
            {text.length}/{maxLength}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_26; 