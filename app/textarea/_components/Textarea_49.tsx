import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_49: React.FC<TextareaProps> = ({
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

  // Generate random embers
  const embers = Array.from({ length: 20 }).map(() => ({
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 2,
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
          className="block text-xl font-bold mb-2"
          style={{
            color: '#FCA5A5',
            textShadow: '2px 2px rgba(153,27,27,0.5)',
          }}
          animate={{
            textShadow: isFocused 
              ? ['2px 2px rgba(153,27,27,0.5)', '2px 2px rgba(220,38,38,0.7)', '2px 2px rgba(153,27,27,0.5)']
              : '2px 2px rgba(153,27,27,0.5)'
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌋
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Volcanic Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #7F1D1D, #991B1B)',
            opacity: 0.8,
          }}
        >
          {/* Lava Flow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 150%, #DC2626 0%, transparent 60%),
                radial-gradient(circle at 20% 50%, #EF4444 0%, transparent 40%),
                radial-gradient(circle at 80% 50%, #B91C1C 0%, transparent 40%)
              `,
              filter: 'blur(20px)',
            }}
            animate={{
              backgroundPosition: [
                '0% 0%, 0% 0%, 0% 0%',
                '10% 10%, -10% 10%, 10% -10%',
                '0% 0%, 0% 0%, 0% 0%'
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Embers */}
          {embers.map((ember, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: ember.size,
                height: ember.size,
                left: `${ember.x}%`,
                bottom: '-10px',
                background: 'radial-gradient(circle at center, #FCA5A5, #EF4444)',
                boxShadow: '0 0 5px #EF4444',
              }}
              animate={{
                y: [0, -100 - Math.random() * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, 1, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{
                duration: ember.duration,
                repeat: Infinity,
                delay: ember.delay,
                ease: 'easeOut',
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
              bg-red-950/80 backdrop-blur-sm
              border-2
              text-red-100 placeholder-red-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-yellow-500' : isFocused ? 'border-red-400' : 'border-red-800'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(239,68,68,0.3), inset 0 0 20px rgba(239,68,68,0.2)'
                : 'none'
            }}
          />

          {/* Magma Corner Effects */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-16 h-16 ${position} pointer-events-none`}
              style={{
                background: `radial-gradient(circle at ${
                  position.includes('left') ? '0% ' : '100% '
                }${
                  position.includes('top') ? '0%' : '100%'
                }, rgba(239,68,68,0.2), transparent)`,
              }}
              animate={{
                opacity: isFocused ? [0.5, 1, 0.5] : 0.5,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}

          {/* Heat Distortion Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backdropFilter: 'blur(1px)',
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.p 
              className="text-yellow-400 text-sm"
              animate={{
                textShadow: ['0 0 5px rgba(250,204,21,0.5)', '0 0 10px rgba(250,204,21,0.7)', '0 0 5px rgba(250,204,21,0.5)'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-red-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-red-300 text-sm px-3 py-1 rounded-lg bg-red-950/50 border border-red-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(239,68,68,0.5)', 'rgba(220,38,38,0.5)', 'rgba(239,68,68,0.5)']
                : 'rgba(239,68,68,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(239,68,68,0.2)',
                    '0 0 10px rgba(220,38,38,0.2)',
                    '0 0 10px rgba(239,68,68,0.2)',
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

export default Textarea_49; 