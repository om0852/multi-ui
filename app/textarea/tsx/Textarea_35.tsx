import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_35: React.FC<TextareaProps> = ({
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
          className="block text-sm font-medium mb-2 text-gray-200"
          animate={{
            y: isFocused ? -2 : 0,
            color: isFocused ? '#FFFFFF' : '#E5E7EB',
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
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
            w-full p-4 rounded-lg
            bg-gray-900
            border border-gray-700
            text-gray-100 placeholder-gray-500
            transition-all duration-200
            focus:outline-none focus:border-gray-500
            resize-none min-h-[120px]
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${error ? 'border-red-500/50' : ''}
          `}
        />

        {/* Focus indicator line */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-px bg-white"
          initial={{ width: 0 }}
          animate={{ 
            width: isFocused ? '100%' : '0%',
            x: isFocused ? '-50%' : '0%',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Subtle corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 border-t border-l"
          animate={{
            borderColor: isFocused ? '#FFFFFF' : '#374151',
            opacity: isFocused ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-2 h-2 border-t border-r"
          animate={{
            borderColor: isFocused ? '#FFFFFF' : '#374151',
            opacity: isFocused ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"
          animate={{
            borderColor: isFocused ? '#FFFFFF' : '#374151',
            opacity: isFocused ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"
          animate={{
            borderColor: isFocused ? '#FFFFFF' : '#374151',
            opacity: isFocused ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-xs"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-gray-400 text-xs">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-gray-400 text-xs"
            animate={{
              color: text.length > maxLength * 0.9 ? '#F87171' : '#9CA3AF'
            }}
          >
            {text.length}/{maxLength}
          </motion.div>
        )}
      </div>

      {/* Focus ring */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg pointer-events-none"
        animate={{
          boxShadow: isFocused ? '0 0 0 2px rgba(255,255,255,0.1)' : 'none'
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default Textarea_35; 