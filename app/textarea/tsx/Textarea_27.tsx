"use client";

import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_27: React.FC<TextareaProps> = ({
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
            w-full p-4 rounded-lg bg-white/5
            border-2 border-transparent
            ${disabled ? 'bg-gray-900 cursor-not-allowed' : ''}
            text-white placeholder-transparent
            transition-all duration-300 ease-in-out
            focus:outline-none
            resize-none min-h-[120px]
            peer
          `}
          placeholder={label}
        />
        
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-lg -z-10">
          <div className={`
            absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
            transition-opacity duration-300
            ${isFocused ? 'opacity-100' : 'opacity-0'}
          `} />
        </div>

        {/* Floating Label */}
        <label
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none
            ${isFocused || text ? 'text-xs -top-2.5 bg-gray-900 px-2' : 'text-base top-4'}
            ${isFocused ? 'text-pink-500' : 'text-gray-400'}
            ${error ? 'text-red-500' : ''}
          `}
        >
          {label}
        </label>
      </div>

      <div className="mt-1 flex justify-between">
        <div>
          {error ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : helperText ? (
            <p className="text-pink-400 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <p className="text-pink-400 text-sm">
            {text.length}/{maxLength}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_27; 