import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_40: React.FC<TextareaProps> = ({
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
            color: '#0FF',
            textShadow: '2px 2px #F0F, -2px -2px #0FF',
          }}
          animate={{
            textShadow: isFocused 
              ? [
                  '2px 2px #F0F, -2px -2px #0FF',
                  '3px 3px #F0F, -3px -3px #0FF',
                  '2px 2px #F0F, -2px -2px #0FF'
                ]
              : '2px 2px #F0F, -2px -2px #0FF'
          }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          {label}
          <motion.span
            className="inline-block ml-2"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.label>
      )}
      <div className="relative">
        {/* Glitch Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #0FF, #F0F)',
            opacity: 0.1,
          }}
          animate={{
            clipPath: isFocused 
              ? [
                  'inset(0 0 0 0)',
                  'inset(10% 0 0 10%)',
                  'inset(0 10% 10% 0)',
                  'inset(0 0 0 0)'
                ]
              : 'inset(0 0 0 0)'
          }}
          transition={{ duration: 0.2, repeat: Infinity }}
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
              text-cyan-300 placeholder-cyan-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-cyan-500' : 'border-magenta-500'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(0,255,255,0.3), inset 0 0 20px rgba(255,0,255,0.2)'
                : 'none'
            }}
          />

          {/* Glitch Lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isFocused 
                ? [
                    'linear-gradient(transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)',
                    'linear-gradient(transparent 0%, rgba(255,0,255,0.2) 50%, transparent 100%)',
                    'linear-gradient(transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)'
                  ]
                : 'none',
              backgroundSize: '100% 3px',
              backgroundPosition: ['0 0', '0 100%', '0 0'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Corner Glitch Effects */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position) => (
            <motion.div
              key={position}
              className={`absolute w-8 h-8 ${position}`}
              animate={{
                opacity: isFocused ? [0.5, 1, 0.5] : 0.5,
                scale: isFocused ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                background: `linear-gradient(45deg, ${position.includes('left') ? '#0FF' : '#F0F'}, transparent)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm"
              animate={{
                x: [0, -2, 2, -2, 0],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <motion.p 
              className="text-cyan-400/70 text-sm"
              animate={{
                color: ['#0FF', '#F0F', '#0FF'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {helperText}
            </motion.p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-cyan-300 text-sm px-3 py-1 rounded-full bg-gray-900/50 border"
            animate={{
              borderColor: isFocused 
                ? ['rgba(0,255,255,0.5)', 'rgba(255,0,255,0.5)', 'rgba(0,255,255,0.5)']
                : 'rgba(0,255,255,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(0,255,255,0.2)',
                    '0 0 10px rgba(255,0,255,0.2)',
                    '0 0 10px rgba(0,255,255,0.2)',
                  ]
                : 'none',
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              animate={{
                opacity: isFocused ? [1, 0.7, 1] : 1,
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {text.length}/{maxLength}
            </motion.span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_40; 