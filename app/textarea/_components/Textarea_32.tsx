import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_32: React.FC<TextareaProps> = ({
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
          className="block text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: '200% auto' }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Grid Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(236, 72, 153, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '20px 20px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
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
              bg-black/40 backdrop-blur-sm
              border-2
              text-white placeholder-pink-300/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-pink-500' : 'border-purple-500/50'}
            `}
          />

          {/* Animated Border Gradient */}
          <motion.div
            className="absolute inset-0 rounded-lg -z-10"
            animate={{
              background: isFocused
                ? [
                    'linear-gradient(45deg, #EC4899, #8B5CF6, #6366F1, #EC4899)',
                    'linear-gradient(225deg, #EC4899, #8B5CF6, #6366F1, #EC4899)',
                    'linear-gradient(45deg, #EC4899, #8B5CF6, #6366F1, #EC4899)',
                  ]
                : 'none',
              backgroundSize: '200% 200%',
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              padding: '2px',
            }}
          >
            <div className="w-full h-full bg-gray-900 rounded-lg" />
          </motion.div>

          {/* Sun Effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-gradient-to-t from-pink-500/20 to-transparent rounded-full blur-xl"
            animate={{
              opacity: isFocused ? [0.4, 0.6, 0.4] : 0.2,
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
            <p className="text-pink-400/70 text-sm italic">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-white/70 text-sm px-3 py-1 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #EC4899, #8B5CF6)',
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

export default Textarea_32; 