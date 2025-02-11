import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_46: React.FC<TextareaProps> = ({
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

  // Generate random raindrops
  const raindrops = Array.from({ length: 20 }).map((_, i) => ({
    delay: Math.random() * 2,
    duration: Math.random() * 1 + 1,
    x: Math.random() * 100,
  }));

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <motion.label 
          className="block text-lg font-medium mb-2 text-green-300"
          animate={{
            color: isFocused ? '#86EFAC' : '#4ADE80',
            textShadow: isFocused ? '0 0 10px rgba(134,239,172,0.5)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌿
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Rainforest Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #064E3B, #065F46)',
            opacity: 0.6,
          }}
        >
          {/* Raindrops */}
          {raindrops.map((drop, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-10 bg-gradient-to-b from-transparent via-green-300/30 to-transparent"
              style={{
                left: `${drop.x}%`,
                top: '-40px',
              }}
              animate={{
                y: ['0%', '400%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: drop.duration,
                repeat: Infinity,
                delay: drop.delay,
                ease: 'linear',
              }}
            />
          ))}

          {/* Floating Leaves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{
                x: -20,
                y: Math.random() * 100,
                rotate: 0,
              }}
              animate={{
                x: ['0%', '120%'],
                y: [0, 50, 0],
                rotate: 360,
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 5,
                ease: 'linear',
              }}
            >
              {['🌿', '🍃', '🌱'][i]}
            </motion.div>
          ))}
        </motion.div>

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
              bg-green-950/40 backdrop-blur-sm
              border-2
              text-green-100 placeholder-green-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-green-400' : 'border-green-800'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(74,222,128,0.2), inset 0 0 20px rgba(74,222,128,0.1)'
                : 'none'
            }}
          />

          {/* Vine Decorations */}
          <motion.div
            className="absolute top-0 left-0 w-12 h-12"
            style={{
              background: 'radial-gradient(circle at 0 0, transparent 50%, rgba(74,222,128,0.1) 100%)',
            }}
            animate={{
              scale: isFocused ? [1, 1.2, 1] : 1,
              rotate: isFocused ? [0, 10, 0] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-12 h-12"
            style={{
              background: 'radial-gradient(circle at 100% 100%, transparent 50%, rgba(74,222,128,0.1) 100%)',
            }}
            animate={{
              scale: isFocused ? [1, 1.2, 1] : 1,
              rotate: isFocused ? [0, -10, 0] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
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
            <p className="text-green-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-green-300 text-sm px-3 py-1 rounded-full bg-green-950/30 border border-green-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(74,222,128,0.5)', 'rgba(134,239,172,0.5)', 'rgba(74,222,128,0.5)']
                : 'rgba(74,222,128,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(74,222,128,0.2)',
                    '0 0 10px rgba(134,239,172,0.2)',
                    '0 0 10px rgba(74,222,128,0.2)',
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

export default Textarea_46; 