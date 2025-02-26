import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_33: React.FC<TextareaProps> = ({
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

  // Leaf SVG path
  const leafPath = "M12 1.5c-1.3 0-2.5.9-2.9 2.2-.4-.2-.8-.2-1.2-.2C4.6 3.5 2 6.1 2 9.4c0 1.5.5 2.9 1.4 4-.9 1.1-1.4 2.5-1.4 4 0 3.3 2.6 5.9 5.9 5.9.4 0 .8-.1 1.2-.2.4 1.3 1.6 2.2 2.9 2.2 1.3 0 2.5-.9 2.9-2.2.4.2.8.2 1.2.2 3.3 0 5.9-2.6 5.9-5.9 0-1.5-.5-2.9-1.4-4 .9-1.1 1.4-2.5 1.4-4 0-3.3-2.6-5.9-5.9-5.9-.4 0-.8.1-1.2.2-.4-1.3-1.6-2.2-2.9-2.2z";

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <motion.label 
          className="block text-lg font-medium mb-2 text-emerald-600"
          animate={{
            color: isFocused ? '#059669' : '#047857'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              animate={{
                rotate: isFocused ? [0, 15, -15, 0] : 0,
                scale: isFocused ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d={leafPath} />
            </motion.svg>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Nature-inspired background pattern */}
        <div className="absolute inset-0 rounded-lg overflow-hidden opacity-10">
          <svg width="100%" height="100%" className="absolute">
            <pattern
              id="leaf-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d={leafPath}
                className="fill-emerald-600"
                transform="scale(0.8)"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
          </svg>
        </div>

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
              bg-white/95 backdrop-blur-sm
              border-2
              text-emerald-900 placeholder-emerald-400
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-400' : isFocused ? 'border-emerald-400' : 'border-emerald-200'}
            `}
          />

          {/* Animated vines */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
            animate={{
              scale: isFocused ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path
                d="M0 40 C 20 40, 40 20, 40 0"
                className="stroke-emerald-400"
                fill="none"
                strokeWidth="2"
              />
              <motion.circle
                cx="40"
                cy="0"
                r="3"
                className="fill-emerald-400"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none rotate-180"
            animate={{
              scale: isFocused ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path
                d="M0 40 C 20 40, 40 20, 40 0"
                className="stroke-emerald-400"
                fill="none"
                strokeWidth="2"
              />
              <motion.circle
                cx="40"
                cy="0"
                r="3"
                className="fill-emerald-400"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.p 
              className="text-red-500 text-sm flex items-center gap-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-red-500" />
              {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-emerald-600/70 text-sm flex items-center gap-2">
              <span className="block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {helperText}
            </p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-emerald-700 text-sm px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200"
            animate={{
              borderColor: isFocused ? ['#A7F3D0', '#6EE7B7', '#A7F3D0'] : '#A7F3D0'
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

export default Textarea_33; 