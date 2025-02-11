import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_52: React.FC<TextareaProps> = ({
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

  // SVG paths for gears
  const gearPaths = [
    "M12 0c-.3 0-.5.1-.7.3L9.5 2.1c-.2-.1-.5-.1-.7-.2L8 0H4l-.8 1.9c-.3.1-.5.1-.7.2L.7.3C.3.1 0 .3 0 .7v3.3l1.9.8c.1.2.1.5.2.7L0 8v4l1.9.8c.1.2.1.5.2.7L0 15.3c0 .4.3.7.7.7h3.3l.8-1.9c.2.1.5.1.7.2L8 16h4l.8-1.9c.2-.1.5-.1.7-.2l1.8 1.8c.4.2.7 0 .7-.4v-3.3l-1.9-.8c-.1-.2-.1-.5-.2-.7L16 8V4l-1.9-.8c-.1-.2-.1-.5-.2-.7L16 .7c0-.4-.3-.7-.7-.7h-3.3z",
    "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
  ];

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
            color: '#B45309',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: '"Courier New", monospace',
          }}
        >
          <span className="flex items-center gap-2">
            <motion.svg
              viewBox="0 0 16 16"
              className="w-6 h-6 fill-amber-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <path d={gearPaths[0]} />
            </motion.svg>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Steampunk Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #292524, #1C1917)',
            border: '4px solid #92400E',
            boxShadow: 'inset 0 0 20px rgba(146,64,14,0.3)',
          }}
        >
          {/* Rotating Gears */}
          {[...Array(4)].map((_, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 16 16"
              className="absolute w-12 h-12 fill-amber-700/30"
              style={{
                top: i < 2 ? '10%' : '70%',
                left: i % 2 === 0 ? '10%' : '80%',
              }}
              animate={{ 
                rotate: i % 2 === 0 ? 360 : -360,
                scale: isFocused ? [1, 1.1, 1] : 1,
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <path d={gearPaths[i % 2]} />
            </motion.svg>
          ))}

          {/* Rivets */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'linear-gradient(45deg, #92400E, #B45309)',
                boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)',
                top: i < 4 ? '4px' : 'calc(100% - 16px)',
                left: `${(i % 4) * 33 + 8}%`,
              }}
              animate={{
                scale: isFocused ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
            />
          ))}

          {/* Steam Effect */}
          {isFocused && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 rounded-full bg-white/10"
              style={{
                bottom: 0,
                left: `${30 * (i + 1)}%`,
              }}
              animate={{
                height: [0, 40],
                y: [0, -60],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
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
              bg-stone-800/90
              border-2
              text-amber-200 placeholder-amber-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              font-mono
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-amber-500' : 'border-amber-900'}
            `}
            style={{
              boxShadow: isFocused 
                ? 'inset 0 0 20px rgba(217,119,6,0.2)'
                : 'inset 0 0 10px rgba(0,0,0,0.3)',
            }}
          />

          {/* Corner Decorations */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${position} pointer-events-none`}
              style={{
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B45309'%3E%3Cpath d='M12 0L0 12v12h12l12-12V0H12z'/%3E%3C/svg%3E")`,
                backgroundSize: 'contain',
                opacity: 0.3,
                transform: `rotate(${i * 90}deg)`,
              }}
              animate={{
                scale: isFocused ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center font-mono">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              [ERROR]: {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-amber-600/70 text-sm">// {helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-amber-500 text-sm px-3 py-1 rounded-lg bg-stone-800/50 border-2 border-amber-700/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(217,119,6,0.5)', 'rgba(245,158,11,0.5)', 'rgba(217,119,6,0.5)']
                : 'rgba(217,119,6,0.3)',
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            [{text.length}/{maxLength}]
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Textarea_52; 