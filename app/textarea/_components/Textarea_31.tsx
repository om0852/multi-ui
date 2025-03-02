import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_31: React.FC<TextareaProps> = ({
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
          className="block text-sm font-bold mb-2 text-yellow-400 uppercase tracking-wider"
          animate={{
            textShadow: isFocused ? '0 0 10px rgba(234,179,8,0.5)' : 'none'
          }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: isFocused ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >⚡</motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Hexagonal Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15L30 0z\' stroke-width=\'2\' stroke=\'%23EAB308\' fill=\'none\' /%3E%3C/svg%3E")',
            backgroundSize: '30px 30px',
          }}
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
              bg-black/80 backdrop-blur-sm
              border-2 border-yellow-500/30
              text-yellow-400 placeholder-yellow-700
              transition-all duration-300
              focus:outline-none focus:border-yellow-400
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500 text-red-400' : ''}
            `}
          />

          {/* Animated Corner Elements */}
          <motion.div
            className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-500"
            animate={{
              opacity: isFocused ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-500"
            animate={{
              opacity: isFocused ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-500"
            animate={{
              opacity: isFocused ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-500"
            animate={{
              opacity: isFocused ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          {/* HUD Elements */}
          <motion.div
            className="absolute -top-px left-1/2 h-1 w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            animate={{
              opacity: isFocused ? [0.2, 0.5, 0.2] : 0.2
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-px left-1/2 h-1 w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            animate={{
              opacity: isFocused ? [0.2, 0.5, 0.2] : 0.2
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          />
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.div 
              className="flex items-center gap-2 text-red-400 text-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full" />
              {error}
            </motion.div>
          ) : helperText ? (
            <div className="flex items-center gap-2 text-yellow-400/70 text-sm">
              <span className="inline-block w-2 h-2 bg-yellow-400/70 rounded-full" />
              {helperText}
            </div>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-yellow-400/70 text-sm bg-black/50 px-3 py-1 rounded-full border border-yellow-500/30"
            animate={{
              borderColor: isFocused ? ['#EAB30880', '#EAB30820', '#EAB30880'] : '#EAB30840'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text.length}/{maxLength}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_31; 