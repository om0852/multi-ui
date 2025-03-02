import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_47: React.FC<TextareaProps> = ({
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

  // Crystal pattern SVG
  const crystalPattern = `
    data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E
      %3Cpath fill='%23ffffff' fill-opacity='0.05' d='M30 0l30 30-30 30L0 30z'/%3E
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
          className="block text-xl font-medium mb-2"
          style={{
            background: 'linear-gradient(45deg, #E879F9, #A78BFA, #60A5FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💎
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Crystal Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: `url("${crystalPattern}")`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          {/* Shimmering Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              transform: 'translateX(-100%)',
            }}
            animate={{
              x: ['0%', '200%'],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
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
              bg-slate-900/80 backdrop-blur-sm
              border-2
              text-violet-100 placeholder-violet-400/30
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-violet-400' : 'border-violet-800'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(167,139,250,0.2), inset 0 0 20px rgba(167,139,250,0.1)'
                : 'none',
              background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.8))',
            }}
          />

          {/* Crystal Facets */}
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-16 h-16"
              style={{
                top: index < 2 ? 0 : 'auto',
                bottom: index >= 2 ? 0 : 'auto',
                left: index % 2 === 0 ? 0 : 'auto',
                right: index % 2 === 1 ? 0 : 'auto',
                background: `linear-gradient(${45 + index * 90}deg, transparent, rgba(167,139,250,0.1))`,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                transform: `rotate(${index * 90}deg)`,
              }}
              animate={{
                opacity: isFocused ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />
          ))}

          {/* Prismatic Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              border: '1px solid transparent',
              background: 'linear-gradient(45deg, transparent, rgba(167,139,250,0.2), transparent) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
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
            <p className="text-violet-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-violet-300 text-sm px-3 py-1 rounded-lg bg-slate-900/50 border border-violet-500/30"
            style={{
              background: 'linear-gradient(45deg, rgba(15,23,42,0.8), rgba(30,41,59,0.8))',
            }}
            animate={{
              borderColor: isFocused 
                ? ['rgba(167,139,250,0.5)', 'rgba(139,92,246,0.5)', 'rgba(167,139,250,0.5)']
                : 'rgba(167,139,250,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(167,139,250,0.2)',
                    '0 0 10px rgba(139,92,246,0.2)',
                    '0 0 10px rgba(167,139,250,0.2)',
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

export default Textarea_47; 