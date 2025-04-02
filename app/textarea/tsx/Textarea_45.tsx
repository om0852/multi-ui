import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_45: React.FC<TextareaProps> = ({
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

  // Pixel art cloud pattern
  const cloudPattern = `
    data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E
      %3Cpath fill='%23ffffff' fill-opacity='0.05' d='M4 4h4v4H4V4zm8 0h4v4h-4V4zm8 0h4v4h-4V4zM4 12h4v4H4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zM4 20h4v4H4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4z'/%3E
    %3C/svg%3E
  `;

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <motion.label 
          className="block text-xl font-bold mb-2 font-mono"
          style={{
            color: '#FCD34D',
            textShadow: '2px 2px #7C2D12',
          }}
          animate={{
            textShadow: isFocused 
              ? ['2px 2px #7C2D12', '2px 2px #92400E', '2px 2px #7C2D12']
              : '2px 2px #7C2D12'
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {label}
          <motion.span
            className="inline-block ml-2"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ▮
          </motion.span>
        </motion.label>
      )}
      <div className="relative">
        {/* Pixel Art Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: `url("${cloudPattern}")`,
            backgroundSize: '32px 32px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '32px 32px'],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
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
              bg-amber-950/90
              border-4 font-mono
              text-amber-200 placeholder-amber-800/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-amber-400' : 'border-amber-700'}
            `}
            style={{
              borderStyle: 'solid',
              borderImageSlice: 1,
              borderImageSource: 'linear-gradient(45deg, #92400E, #FCD34D, #92400E)',
              boxShadow: isFocused 
                ? 'inset 0 0 20px rgba(251,191,36,0.2)'
                : 'inset 0 0 10px rgba(0,0,0,0.3)',
            }}
          />

          {/* Pixel Corner Decorations */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, index) => (
            <motion.div
              key={index}
              className={`absolute w-4 h-4 ${position}`}
              style={{
                background: '#92400E',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                transform: `rotate(${index * 90}deg)`,
              }}
              animate={{
                scale: isFocused ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
            />
          ))}

          {/* Pixel Art Decorative Border */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              border: '2px solid rgba(251,191,36,0.1)',
              borderRadius: '6px',
            }}
            animate={{
              opacity: isFocused ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center font-mono">
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
              [!] {error}
            </motion.p>
          ) : helperText ? (
            <motion.p 
              className="text-amber-600/70 text-sm"
              animate={{
                opacity: isFocused ? [0.7, 1, 0.7] : 0.7,
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &gt; {helperText}
            </motion.p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-amber-400 text-sm px-3 py-1 rounded bg-amber-950/50 border-2 border-amber-700/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(251,191,36,0.5)', 'rgba(217,119,6,0.5)', 'rgba(251,191,36,0.5)']
                : 'rgba(251,191,36,0.3)',
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            [{text.length}/{maxLength}]
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_45; 