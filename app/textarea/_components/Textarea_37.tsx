import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_37: React.FC<TextareaProps> = ({
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

  // Generate random stars
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 1,
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
          className="block text-lg font-medium mb-2 text-indigo-300"
          animate={{
            color: isFocused ? '#A5B4FC' : '#818CF8',
            textShadow: isFocused ? '0 0 10px rgba(165,180,252,0.5)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✧
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Star Field Background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30" />
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
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
              bg-black/60 backdrop-blur-sm
              border-2
              text-indigo-100 placeholder-indigo-300/30
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-indigo-500' : 'border-indigo-900'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(99,102,241,0.2), inset 0 0 20px rgba(99,102,241,0.1)'
                : 'none'
            }}
          />

          {/* Nebula Effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isFocused
                ? [
                    'radial-gradient(circle at 30% 50%, rgba(165,180,252,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 70% 50%, rgba(165,180,252,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 50%, rgba(165,180,252,0.1) 0%, transparent 50%)',
                  ]
                : 'none'
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Shooting Star */}
          <motion.div
            className="absolute w-px h-px bg-white"
            animate={{
              x: ['100%', '-10%'],
              y: ['0%', '100%'],
              opacity: [0, 1, 1, 0],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'linear',
            }}
            style={{
              boxShadow: '0 0 4px 2px rgba(255,255,255,0.5)',
            }}
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
            <motion.p 
              className="text-indigo-400/70 text-sm"
              animate={{
                opacity: isFocused ? [0.7, 1, 0.7] : 0.7
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {helperText}
            </motion.p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-indigo-300 text-sm px-3 py-1 rounded-full bg-black/30 border border-indigo-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(99,102,241,0.5)', 'rgba(99,102,241,0.2)', 'rgba(99,102,241,0.5)']
                : 'rgba(99,102,241,0.3)'
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

export default Textarea_37; 