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

const Textarea_29: React.FC<TextareaProps> = ({
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
        <motion.label 
          className="block text-sm font-bold mb-2 text-green-400 font-mono"
          animate={{
            textShadow: isFocused 
              ? ['0 0 5px #00ff00', '0 0 15px #00ff00', '0 0 5px #00ff00'] 
              : '0 0 0px #00ff00'
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-black border-2 border-green-500 rounded-lg"
          animate={{
            boxShadow: isFocused 
              ? [
                  'inset 0 0 10px #00ff00',
                  'inset 0 0 20px #00ff00',
                  'inset 0 0 10px #00ff00'
                ]
              : 'inset 0 0 0px #00ff00'
          }}
          transition={{ duration: 0.3 }}
        />
        <textarea
          {...props}
          value={text}
          onChange={handleChange}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            relative w-full p-4 rounded-lg bg-transparent
            text-green-400 placeholder-green-700
            font-mono text-base
            border-2 border-green-500
            transition-all duration-300
            focus:outline-none
            resize-none min-h-[120px]
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${error ? 'border-red-500 text-red-400' : ''}
          `}
        />
        
        {/* Scanline Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
          initial={false}
          animate={{
            background: isFocused 
              ? 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.05) 50%)' 
              : 'none'
          }}
          style={{
            backgroundSize: '100% 4px',
          }}
        />

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500" />
      </div>

      <div className="mt-2 flex justify-between items-center font-mono">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [ERROR] {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-green-600 text-sm">// {helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-green-400 text-sm bg-black px-2 py-1 rounded border border-green-500"
            animate={{
              borderColor: ['#00ff00', '#004400', '#00ff00'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text.length}/{maxLength}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_29; 