import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_51: React.FC<TextareaProps> = ({
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

  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
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
          className="block text-lg font-medium mb-2 text-cyan-300"
          animate={{
            color: isFocused ? '#67E8F9' : '#22D3EE',
            textShadow: isFocused ? '0 0 10px rgba(103,232,249,0.5)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -2, 2, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌊
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Ocean Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0C4A6E, #164E63, #083344)',
          }}
        >
          {/* Underwater Light Rays */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% -50%, rgba(103,232,249,0.15), transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Bubbles */}
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-200/20 backdrop-blur-sm"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.x}%`,
                bottom: '-20%',
              }}
              animate={{
                y: [0, -500],
                x: [0, Math.sin(i) * 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: 'linear',
              }}
            />
          ))}

          {/* Water Surface Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(0deg, transparent, rgba(103,232,249,0.1) 50%, transparent)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '0% 200%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
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
              bg-cyan-950/40 backdrop-blur-sm
              border-2
              text-cyan-100 placeholder-cyan-600/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-cyan-400' : 'border-cyan-800'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(103,232,249,0.2), inset 0 0 20px rgba(103,232,249,0.1)'
                : 'none'
            }}
          />

          {/* Seaweed Decorations */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-4 origin-bottom"
              style={{
                left: `${25 * (i + 1)}%`,
                height: '40px',
                background: 'linear-gradient(180deg, transparent, #0E7490)',
              }}
              animate={{
                transform: [
                  'rotate(-10deg) scaleY(1)',
                  'rotate(10deg) scaleY(0.9)',
                  'rotate(-10deg) scaleY(1)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
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
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-cyan-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-cyan-300 text-sm px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(103,232,249,0.5)', 'rgba(34,211,238,0.5)', 'rgba(103,232,249,0.5)']
                : 'rgba(103,232,249,0.3)',
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

export default Textarea_51; 