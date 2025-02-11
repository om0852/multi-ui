import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_38: React.FC<TextareaProps> = ({
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
          className="block text-lg font-medium mb-2"
          style={{
            background: 'linear-gradient(45deg, #B8B8B8, #F0F0F0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            background: isFocused 
              ? [
                  'linear-gradient(45deg, #B8B8B8, #F0F0F0)',
                  'linear-gradient(45deg, #F0F0F0, #B8B8B8)',
                  'linear-gradient(45deg, #B8B8B8, #F0F0F0)',
                ]
              : 'linear-gradient(45deg, #B8B8B8, #F0F0F0)',
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Chrome Effect Background */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, #B8B8B8, #F0F0F0, #B8B8B8)',
            opacity: 0.8,
          }}
          animate={{
            background: isFocused 
              ? [
                  'linear-gradient(45deg, #B8B8B8, #F0F0F0, #B8B8B8)',
                  'linear-gradient(225deg, #B8B8B8, #F0F0F0, #B8B8B8)',
                  'linear-gradient(45deg, #B8B8B8, #F0F0F0, #B8B8B8)',
                ]
              : 'linear-gradient(45deg, #B8B8B8, #F0F0F0, #B8B8B8)',
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

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
              bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800
              border-2
              text-gray-100 placeholder-gray-500
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-gray-300' : 'border-gray-600'}
            `}
            style={{
              boxShadow: isFocused 
                ? 'inset 0 0 20px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.1)'
                : 'inset 0 0 10px rgba(0,0,0,0.2)',
            }}
          />

          {/* Liquid Metal Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden"
            style={{
              background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.15) 0%, transparent 50%)',
            }}
            animate={{
              '--x': isFocused ? ['0%', '100%', '0%'] : '50%',
              '--y': isFocused ? ['0%', '100%', '0%'] : '50%',
            } as any}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Metallic Highlights */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: isFocused 
                ? ['0% 0%', '100% 100%', '0% 0%']
                : ['0% 0%', '0% 0%'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
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
            <p className="text-gray-400 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-gray-300 text-sm px-3 py-1 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #B8B8B8, #F0F0F0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              scale: isFocused ? [1, 1.05, 1] : 1,
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

export default Textarea_38; 