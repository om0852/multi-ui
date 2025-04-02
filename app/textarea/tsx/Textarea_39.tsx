import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_39: React.FC<TextareaProps> = ({
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
            background: 'linear-gradient(to right, #FF6B6B, #FFE66D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 10px rgba(255,107,107,0.3)',
          }}
          animate={{
            textShadow: isFocused 
              ? ['0 0 10px rgba(255,107,107,0.3)', '0 0 20px rgba(255,107,107,0.5)', '0 0 10px rgba(255,107,107,0.3)']
              : '0 0 10px rgba(255,107,107,0.3)',
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Sunset Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #FF6B6B, #FFE66D, #4ECDC4)',
            opacity: 0.1,
          }}
        >
          {/* Grid Effect */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />
          
          {/* Sun */}
          <motion.div
            className="absolute left-1/2 -bottom-20 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFE66D 0%, transparent 70%)',
              transform: 'translateX(-50%)',
            }}
            animate={{
              y: isFocused ? [-80, -85, -80] : -80,
            }}
            transition={{ duration: 4, repeat: Infinity }}
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
              bg-gray-900/90 backdrop-blur-sm
              border-2
              text-orange-100 placeholder-orange-300/30
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-orange-500' : 'border-orange-900'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(255,107,107,0.2), inset 0 0 20px rgba(255,107,107,0.1)'
                : 'none'
            }}
          />

          {/* Animated Border Gradient */}
          <motion.div
            className="absolute inset-0 rounded-lg -z-10"
            animate={{
              background: isFocused
                ? [
                    'linear-gradient(45deg, #FF6B6B, #FFE66D, #4ECDC4, #FF6B6B)',
                    'linear-gradient(225deg, #FF6B6B, #FFE66D, #4ECDC4, #FF6B6B)',
                    'linear-gradient(45deg, #FF6B6B, #FFE66D, #4ECDC4, #FF6B6B)',
                  ]
                : 'none',
              backgroundSize: '200% 200%',
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              padding: '2px',
            }}
          >
            <div className="w-full h-full bg-gray-900 rounded-lg" />
          </motion.div>

          {/* Palm Trees Silhouette */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' d=\'M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              opacity: 0.2,
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
            <p className="text-orange-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-orange-300 text-sm px-3 py-1 rounded-full bg-gray-900/50 border border-orange-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(255,107,107,0.5)', 'rgba(255,230,109,0.5)', 'rgba(255,107,107,0.5)']
                : 'rgba(255,107,107,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(255,107,107,0.2)',
                    '0 0 10px rgba(255,230,109,0.2)',
                    '0 0 10px rgba(255,107,107,0.2)',
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

export default Textarea_39; 