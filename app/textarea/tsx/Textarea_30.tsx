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

const Textarea_30: React.FC<TextareaProps> = ({
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
          className="block text-sm font-medium mb-2 text-blue-400"
          animate={{
            color: isFocused ? '#60A5FA' : '#3B82F6',
            textShadow: isFocused ? '0 0 10px rgba(96, 165, 250, 0.5)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative perspective-1000">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg"
          animate={{
            transform: isFocused ? 'rotateX(2deg)' : 'rotateX(0deg)',
            boxShadow: isFocused 
              ? [
                  '0 5px 15px rgba(66, 153, 225, 0.4)',
                  '0 0 30px rgba(66, 153, 225, 0.2)'
                ]
              : 'none'
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
            relative w-full p-4 rounded-lg
            bg-black/40 backdrop-blur-sm
            border border-blue-500/30
            text-blue-300 placeholder-blue-500/50
            transition-all duration-300
            focus:outline-none focus:border-blue-400/50
            resize-none min-h-[120px]
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${error ? 'border-red-500/50 text-red-400' : ''}
          `}
        />

        {/* Holographic Lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg opacity-20"
          animate={{
            background: isFocused 
              ? 'repeating-linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.2) 50%, transparent 100%)'
              : 'none',
            backgroundSize: '200% 100%',
            x: isFocused ? ['-100%', '100%'] : '0%'
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
        />

        {/* 3D Edge Effect */}
        <div className="absolute inset-0 rounded-lg pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        </div>
      </div>

      <motion.div 
        className="mt-2 flex justify-between items-center"
        animate={{
          opacity: isFocused ? 1 : 0.7
        }}
        transition={{ duration: 0.3 }}
      >
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-blue-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <div className="text-blue-400/70 text-sm backdrop-blur-sm bg-blue-500/5 px-2 py-1 rounded">
            {text.length}/{maxLength}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Textarea_30; 