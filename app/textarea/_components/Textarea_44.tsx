import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_44: React.FC<TextareaProps> = ({
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

  // Generate random shapes
  const shapes = Array.from({ length: 6 }).map((_, i) => ({
    type: ['circle', 'square', 'triangle'][i % 3],
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: i * 0.5,
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
            background: 'linear-gradient(45deg, #EC4899, #8B5CF6, #3B82F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Abstract Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #18181B, #27272A)',
          }}
        >
          {/* Animated Shapes */}
          {shapes.map((shape, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: shape.size,
                height: shape.size,
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                background: shape.type === 'circle'
                  ? 'linear-gradient(45deg, #EC4899, #8B5CF6)'
                  : shape.type === 'square'
                  ? 'linear-gradient(45deg, #8B5CF6, #3B82F6)'
                  : 'linear-gradient(45deg, #3B82F6, #EC4899)',
                borderRadius: shape.type === 'circle' ? '50%' : '0',
                clipPath: shape.type === 'triangle'
                  ? 'polygon(50% 0%, 100% 100%, 0% 100%)'
                  : 'none',
                opacity: 0.1,
              }}
              animate={{
                rotate: [shape.rotation, shape.rotation + 360],
                scale: isFocused ? [1, 1.2, 1] : [1, 1.1, 1],
                x: isFocused 
                  ? [0, Math.sin(shape.delay) * 20, 0]
                  : 0,
                y: isFocused
                  ? [0, Math.cos(shape.delay) * 20, 0]
                  : 0,
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity, delay: shape.delay },
                x: { duration: 4, repeat: Infinity, delay: shape.delay },
                y: { duration: 4, repeat: Infinity, delay: shape.delay },
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
              bg-zinc-900/80 backdrop-blur-sm
              border-2
              text-white placeholder-zinc-500
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-violet-500' : 'border-zinc-700'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(139,92,246,0.2), inset 0 0 20px rgba(139,92,246,0.1)'
                : 'none'
            }}
          />

          {/* Abstract Lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(45deg, transparent 45%, rgba(139,92,246,0.1) 45%, rgba(139,92,246,0.1) 55%, transparent 55%),
                linear-gradient(-45deg, transparent 45%, rgba(236,72,153,0.1) 45%, rgba(236,72,153,0.1) 55%, transparent 55%)
              `,
              backgroundSize: '30px 30px',
            }}
            animate={{
              backgroundPosition: isFocused
                ? ['0px 0px', '30px 30px']
                : ['0px 0px', '0px 0px'],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Corner Accents */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${position}`}
              style={{
                background: `linear-gradient(${45 + i * 90}deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2))`,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                opacity: 0.5,
              }}
              animate={{
                scale: isFocused ? [1, 1.2, 1] : 1,
                rotate: isFocused ? [0, 45, 0] : 0,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
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
            <p className="text-violet-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-violet-300 text-sm px-3 py-1 rounded-full bg-zinc-900/50 border border-violet-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(139,92,246,0.5)', 'rgba(236,72,153,0.5)', 'rgba(139,92,246,0.5)']
                : 'rgba(139,92,246,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(139,92,246,0.2)',
                    '0 0 10px rgba(236,72,153,0.2)',
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

export default Textarea_44; 