import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_41: React.FC<TextareaProps> = ({
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
  const bubbles = Array.from({ length: 10 }).map((_, i) => ({
    size: Math.random() * 10 + 5,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    x: Math.random() * 100,
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
          className="block text-lg font-medium mb-2 text-blue-300"
          animate={{
            color: isFocused ? '#93C5FD' : '#60A5FA',
            textShadow: isFocused ? '0 0 10px rgba(147,197,253,0.5)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: isFocused ? [0, 15, -15, 0] : 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🐠
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Underwater Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #1E40AF, #1E3A8A)',
            opacity: 0.3,
          }}
        >
          {/* Bubbles */}
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.x}%`,
                bottom: '-20px',
              }}
              animate={{
                y: [0, '-120%'],
                x: [0, Math.sin(bubble.delay) * 20],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: 'linear',
              }}
            />
          ))}

          {/* Swimming Fish */}
          <motion.div
            className="absolute text-2xl"
            animate={{
              x: ['-10%', '110%'],
              y: ['20%', '40%', '20%'],
            }}
            transition={{
              x: { duration: 8, repeat: Infinity },
              y: { duration: 2, repeat: Infinity },
            }}
          >
            🐟
          </motion.div>
          <motion.div
            className="absolute text-2xl"
            animate={{
              x: ['110%', '-10%'],
              y: ['60%', '80%', '60%'],
              scale: [-1, -1], // Flip horizontally
            }}
            transition={{
              x: { duration: 10, repeat: Infinity },
              y: { duration: 3, repeat: Infinity },
            }}
          >
            🐠
          </motion.div>
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
              bg-blue-900/30 backdrop-blur-sm
              border-2
              text-blue-100 placeholder-blue-300/30
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-blue-400' : 'border-blue-600'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(96,165,250,0.3), inset 0 0 20px rgba(96,165,250,0.2)'
                : 'none'
            }}
          />

          {/* Water Surface Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(147,197,253,0.1) 0%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 10%', '0% 0%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          {/* Coral Decorations */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%234F46E5\' opacity=\'0.3\' d=\'M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,197.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
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
            <p className="text-blue-300/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-blue-200 text-sm px-3 py-1 rounded-full bg-blue-900/30 border border-blue-400/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(96,165,250,0.5)', 'rgba(147,197,253,0.5)', 'rgba(96,165,250,0.5)']
                : 'rgba(96,165,250,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(96,165,250,0.2)',
                    '0 0 10px rgba(147,197,253,0.2)',
                    '0 0 10px rgba(96,165,250,0.2)',
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

export default Textarea_41; 