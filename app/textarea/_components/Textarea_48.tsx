import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_48: React.FC<TextareaProps> = ({
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

  // Generate random sand particles
  const sandParticles = Array.from({ length: 30 }).map(() => ({
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 2,
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
          className="block text-lg font-medium mb-2"
          style={{
            color: '#FBBF24',
            textShadow: '1px 1px rgba(120,53,15,0.5)',
          }}
          animate={{
            textShadow: isFocused 
              ? '2px 2px rgba(120,53,15,0.7)'
              : '1px 1px rgba(120,53,15,0.5)',
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌵
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Desert Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #92400E, #B45309)',
            opacity: 0.3,
          }}
        >
          {/* Sand Dunes */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            viewBox="0 0 1440 320"
            style={{ opacity: 0.2 }}
          >
            <motion.path
              fill="#FBBF24"
              d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,122.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>

          {/* Heat Shimmer Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(0deg, transparent, rgba(255,255,255,0.1), transparent)',
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Sand Particles */}
          {sandParticles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-200/30"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
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
              bg-amber-950/80 backdrop-blur-sm
              border-2
              text-amber-100 placeholder-amber-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-amber-400' : 'border-amber-800'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(251,191,36,0.2), inset 0 0 20px rgba(251,191,36,0.1)'
                : 'none'
            }}
          />

          {/* Oasis Decorations */}
          <motion.div
            className="absolute -top-2 -right-2 text-2xl"
            animate={{
              y: [0, -2, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌴
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 text-2xl"
            animate={{
              y: [0, 2, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            🌴
          </motion.div>
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
            <p className="text-amber-400/70 text-sm">{helperText}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-amber-300 text-sm px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(251,191,36,0.5)', 'rgba(217,119,6,0.5)', 'rgba(251,191,36,0.5)']
                : 'rgba(251,191,36,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(251,191,36,0.2)',
                    '0 0 10px rgba(217,119,6,0.2)',
                    '0 0 10px rgba(251,191,36,0.2)',
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

export default Textarea_48; 