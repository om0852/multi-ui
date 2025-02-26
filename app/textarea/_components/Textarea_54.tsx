import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_54: React.FC<TextareaProps> = ({
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

  // Generate random pebbles
  const pebbles = Array.from({ length: 8 }).map(() => ({
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
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
          className="block text-lg font-medium mb-2 text-stone-300"
          style={{
            fontFamily: '"Noto Serif JP", serif',
          }}
          animate={{
            color: isFocused ? '#E7E5E4' : '#D6D3D1',
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🍃
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Sand Pattern Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #292524, #1C1917)',
          }}
        >
          {/* Zen Garden Lines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-stone-700/30"
              style={{
                top: `${i * 12}%`,
                transform: 'rotate(0deg)',
              }}
              animate={{
                scaleX: [0.95, 1, 0.95],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Pebbles */}
          {pebbles.map((pebble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-stone-600/20"
              style={{
                width: pebble.size,
                height: pebble.size,
                left: `${pebble.x}%`,
                top: `${pebble.y}%`,
                rotate: `${pebble.rotation}deg`,
              }}
              animate={{
                scale: isFocused ? [1, 1.1, 1] : 1,
                opacity: isFocused ? [0.2, 0.3, 0.2] : 0.2,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
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
              bg-stone-900/80 backdrop-blur-sm
              border border-stone-700
              text-stone-300 placeholder-stone-600
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-stone-500' : 'border-stone-700'}
            `}
            style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              boxShadow: isFocused 
                ? 'inset 0 0 20px rgba(231,229,228,0.05)'
                : 'none'
            }}
          />

          {/* Ink Brush Stroke */}
          <motion.div
            className="absolute -bottom-1 left-1/2 w-1/2 h-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, #E7E5E4, transparent)',
            }}
            animate={{
              scaleX: isFocused ? [0.8, 1.2, 0.8] : 0.8,
              opacity: isFocused ? [0.3, 0.5, 0.3] : 0.3,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Corner Decorations */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-6 h-6 ${position} pointer-events-none`}
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(231,229,228,0.1) 0%, transparent 70%)',
                transform: `rotate(${i * 90}deg)`,
              }}
              animate={{
                scale: isFocused ? [0.8, 1, 0.8] : 0.8,
                opacity: isFocused ? [0.3, 0.5, 0.3] : 0.3,
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
            <p className="text-stone-500 text-sm italic">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-stone-400 text-sm px-3 py-1 rounded-full border border-stone-700"
            animate={{
              borderColor: isFocused 
                ? ['rgba(231,229,228,0.2)', 'rgba(231,229,228,0.4)', 'rgba(231,229,228,0.2)']
                : 'rgba(231,229,228,0.2)',
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

export default Textarea_54;