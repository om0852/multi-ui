import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_36: React.FC<TextareaProps> = ({
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

  // Matrix characters for the animation
  const matrixChars = "ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ";

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <motion.label 
          className="block text-lg font-mono mb-2 text-green-400"
          animate={{
            textShadow: isFocused 
              ? ['0 0 5px #00ff00', '0 0 20px #00ff00', '0 0 5px #00ff00']
              : '0 0 5px #00ff00'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span
            className="inline-block"
            animate={{
              opacity: [1, 0.8, 1],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            &gt;_
          </motion.span>
          {" "}
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Matrix Digital Rain Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-lg opacity-20"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(0,255,0,0.2))',
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500 text-xs font-mono whitespace-nowrap"
              initial={{ 
                y: -20, 
                x: `${i * 10}%`,
                opacity: 0.5 
              }}
              animate={{
                y: ['0%', '100%'],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'linear',
              }}
            >
              {matrixChars.split('').join('\n')}
            </motion.div>
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
              bg-black/90 backdrop-blur-sm
              border-2 font-mono
              text-green-400 placeholder-green-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-green-500' : 'border-green-900'}
            `}
            style={{
              textShadow: '0 0 5px rgba(0,255,0,0.5)',
              boxShadow: isFocused 
                ? 'inset 0 0 20px rgba(0,255,0,0.2), 0 0 10px rgba(0,255,0,0.2)'
                : 'none'
            }}
          />

          {/* Glitch Effect Layers */}
          <motion.div
            className="absolute inset-0 bg-green-500/5 rounded-lg pointer-events-none"
            animate={{
              clipPath: isFocused 
                ? [
                    'inset(0 0 99% 0)',
                    'inset(0 0 98% 0)',
                    'inset(0 0 99% 0)',
                  ]
                : 'inset(0 0 100% 0)',
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute inset-0 bg-green-500/5 rounded-lg pointer-events-none"
            animate={{
              clipPath: isFocused 
                ? [
                    'inset(95% 0 0 0)',
                    'inset(93% 0 0 0)',
                    'inset(95% 0 0 0)',
                  ]
                : 'inset(100% 0 0 0)',
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.1,
            }}
          />
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center font-mono">
        <div>
          {error ? (
            <motion.div 
              className="text-red-500 text-sm"
              animate={{
                opacity: [1, 0.7, 1],
                x: [0, 2, -2, 0],
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              [ERROR]: {error}
            </motion.div>
          ) : helperText ? (
            <motion.div 
              className="text-green-600/70 text-sm"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              // {helperText}
            </motion.div>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-green-400 text-sm bg-black/50 px-3 py-1 rounded-lg border border-green-900"
            animate={{
              borderColor: isFocused 
                ? ['#00ff00', '#004400', '#00ff00']
                : '#004400',
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

export default Textarea_36; 