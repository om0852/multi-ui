import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_53: React.FC<TextareaProps> = ({
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
          className="block text-lg font-medium mb-2"
          style={{
            background: 'linear-gradient(45deg, #10B981, #3B82F6, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✧
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Night Sky Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0F172A, #1E293B)',
          }}
        >
          {/* Stars */}
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

          {/* Aurora Waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, 
                  transparent,
                  ${i === 0 ? 'rgba(16,185,129,0.2)' : 
                    i === 1 ? 'rgba(59,130,246,0.2)' : 
                    'rgba(139,92,246,0.2)'},
                  transparent
                )`,
                filter: 'blur(20px)',
                transform: `translateY(${20 * i}%)`,
              }}
              animate={{
                x: ['-100%', '100%'],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                x: { duration: 10 + i * 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          ))}

          {/* Shooting Stars */}
          {isFocused && [...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white"
              style={{
                boxShadow: '0 0 4px 2px rgba(255,255,255,0.5)',
              }}
              initial={{ 
                x: '-10%',
                y: `${30 + i * 40}%`,
              }}
              animate={{
                x: '120%',
                y: `${60 + i * 40}%`,
                opacity: [0, 1, 1, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: 'linear',
              }}
            />
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
              bg-gray-900/40 backdrop-blur-sm
              border-2
              text-emerald-100 placeholder-emerald-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-emerald-400' : 'border-emerald-900'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(16,185,129,0.2), inset 0 0 20px rgba(16,185,129,0.1)'
                : 'none'
            }}
          />

          {/* Ethereal Corner Effects */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 ${position} pointer-events-none`}
              style={{
                background: 'radial-gradient(circle, rgba(16,185,129,0.2), transparent)',
                transform: `rotate(${i * 90}deg)`,
              }}
              animate={{
                scale: isFocused ? [1, 1.2, 1] : 1,
                opacity: isFocused ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
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
            <p className="text-emerald-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-emerald-300 text-sm px-3 py-1 rounded-full bg-gray-900/50 border border-emerald-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(16,185,129,0.5)', 'rgba(59,130,246,0.5)', 'rgba(139,92,246,0.5)']
                : 'rgba(16,185,129,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(16,185,129,0.2)',
                    '0 0 10px rgba(59,130,246,0.2)',
                    '0 0 10px rgba(139,92,246,0.2)',
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

export default Textarea_53; 