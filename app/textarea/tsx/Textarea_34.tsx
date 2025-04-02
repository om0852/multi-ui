import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_34: React.FC<TextareaProps> = ({
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
          className="block text-xl font-bold mb-2"
          style={{
            color: '#FF00FF',
            textShadow: '0 0 10px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3)',
          }}
          animate={{
            textShadow: isFocused 
              ? [
                  '0 0 10px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3)',
                  '0 0 15px rgba(255,0,255,0.7), 0 0 25px rgba(255,0,255,0.5)',
                  '0 0 10px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3)',
                ]
              : '0 0 10px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3)',
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Synthwave Grid Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: `
              linear-gradient(transparent 0%, rgba(255,0,255,0.1) 95%),
              linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.1) 95%)
            `,
            backgroundSize: '20px 20px',
            opacity: 0.3,
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
              bg-gray-900/90 backdrop-blur-sm
              border-2
              text-fuchsia-300 placeholder-fuchsia-700
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-fuchsia-500' : 'border-cyan-500'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(255,0,255,0.3), inset 0 0 20px rgba(255,0,255,0.2)'
                : 'none',
            }}
          />

          {/* Animated Corner Lines */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8"
            animate={{
              background: isFocused 
                ? [
                    'linear-gradient(135deg, #FF00FF 0%, transparent 50%)',
                    'linear-gradient(135deg, #00FFFF 0%, transparent 50%)',
                    'linear-gradient(135deg, #FF00FF 0%, transparent 50%)',
                  ]
                : 'linear-gradient(135deg, #FF00FF 0%, transparent 50%)',
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 right-0 w-8 h-8"
            animate={{
              background: isFocused 
                ? [
                    'linear-gradient(-135deg, #00FFFF 0%, transparent 50%)',
                    'linear-gradient(-135deg, #FF00FF 0%, transparent 50%)',
                    'linear-gradient(-135deg, #00FFFF 0%, transparent 50%)',
                  ]
                : 'linear-gradient(-135deg, #00FFFF 0%, transparent 50%)',
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-8 h-8"
            animate={{
              background: isFocused 
                ? [
                    'linear-gradient(45deg, #00FFFF 0%, transparent 50%)',
                    'linear-gradient(45deg, #FF00FF 0%, transparent 50%)',
                    'linear-gradient(45deg, #00FFFF 0%, transparent 50%)',
                  ]
                : 'linear-gradient(45deg, #00FFFF 0%, transparent 50%)',
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8"
            animate={{
              background: isFocused 
                ? [
                    'linear-gradient(-45deg, #FF00FF 0%, transparent 50%)',
                    'linear-gradient(-45deg, #00FFFF 0%, transparent 50%)',
                    'linear-gradient(-45deg, #FF00FF 0%, transparent 50%)',
                  ]
                : 'linear-gradient(-45deg, #FF00FF 0%, transparent 50%)',
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
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
              style={{
                textShadow: '0 0 10px rgba(255,0,0,0.5)',
              }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <p 
              className="text-fuchsia-400/70 text-sm"
              style={{
                textShadow: '0 0 10px rgba(255,0,255,0.3)',
              }}
            >
              {helperText}
            </p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-cyan-300 text-sm px-3 py-1 rounded-full bg-gray-900/50 border"
            animate={{
              borderColor: isFocused 
                ? ['rgba(255,0,255,0.5)', 'rgba(0,255,255,0.5)', 'rgba(255,0,255,0.5)']
                : 'rgba(255,0,255,0.2)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(255,0,255,0.2)',
                    '0 0 10px rgba(0,255,255,0.2)',
                    '0 0 10px rgba(255,0,255,0.2)',
                  ]
                : 'none',
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {text.length}/{maxLength}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_34; 