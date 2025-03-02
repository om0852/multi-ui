import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_42: React.FC<TextareaProps> = ({
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
          className="block text-lg font-medium mb-2 text-emerald-300"
          animate={{
            color: isFocused ? '#6EE7B7' : '#34D399',
            textShadow: isFocused ? '0 0 10px rgba(110,231,183,0.5)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ❄️
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Northern Lights Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0F172A, #1E293B)',
          }}
        >
          {/* Aurora Waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(110,231,183,0.2), rgba(147,197,253,0.2), rgba(167,139,250,0.2), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              x: ['-100%', '100%'],
              scale: [1, 1.2, 1],
            }}
            transition={{
              x: { duration: 8, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.2), rgba(110,231,183,0.2), rgba(147,197,253,0.2), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              x: ['100%', '-100%'],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              x: { duration: 10, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Stars */}
          {Array.from({ length: 50 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
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
              bg-gray-900/50 backdrop-blur-sm
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
                ? '0 0 20px rgba(110,231,183,0.2), inset 0 0 20px rgba(110,231,183,0.1)'
                : 'none'
            }}
          />

          {/* Mountain Silhouette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23000000\' opacity=\'0.5\' d=\'M0,96L60,128C120,160,240,224,360,229.3C480,235,600,181,720,181.3C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
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
            <p className="text-emerald-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-emerald-300 text-sm px-3 py-1 rounded-full bg-gray-900/50 border border-emerald-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(110,231,183,0.5)', 'rgba(147,197,253,0.5)', 'rgba(110,231,183,0.5)']
                : 'rgba(110,231,183,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(110,231,183,0.2)',
                    '0 0 10px rgba(147,197,253,0.2)',
                    '0 0 10px rgba(110,231,183,0.2)',
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

export default Textarea_42; 