import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_50: React.FC<TextareaProps> = ({
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

  // Generate random buildings
  const buildings = Array.from({ length: 10 }).map((_, i) => ({
    width: Math.random() * 20 + 10,
    height: Math.random() * 40 + 40,
    position: i * 10,
    windows: Math.floor(Math.random() * 6) + 3,
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
          className="block text-xl font-bold mb-2"
          style={{
            color: '#F0F',
            textShadow: '0 0 10px #F0F, 0 0 20px #F0F',
          }}
          animate={{
            textShadow: isFocused 
              ? [
                  '0 0 10px #F0F, 0 0 20px #F0F',
                  '0 0 15px #F0F, 0 0 30px #F0F',
                  '0 0 10px #F0F, 0 0 20px #F0F'
                ]
              : '0 0 10px #F0F, 0 0 20px #F0F'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {/* Cityscape Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #000033, #660066)',
          }}
        >
          {/* Stars */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
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

          {/* Buildings */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            {buildings.map((building, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0"
                style={{
                  width: `${building.width}%`,
                  height: `${building.height}%`,
                  left: `${building.position * 10}%`,
                  background: 'rgba(0,0,0,0.8)',
                }}
                animate={{
                  height: [
                    `${building.height}%`,
                    `${building.height + 5}%`,
                    `${building.height}%`
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {/* Windows */}
                {Array.from({ length: building.windows }).map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-2 h-2 rounded-sm"
                    style={{
                      left: `${(j % 2) * 40 + 30}%`,
                      top: `${Math.floor(j / 2) * 30 + 10}%`,
                      background: '#F0F',
                      boxShadow: '0 0 10px #F0F',
                    }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      boxShadow: [
                        '0 0 10px #F0F',
                        '0 0 20px #F0F',
                        '0 0 10px #F0F'
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Moving Lights */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,0,255,0.1), transparent)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
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
              bg-black/60 backdrop-blur-sm
              border-2
              text-fuchsia-300 placeholder-fuchsia-700/50
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-fuchsia-500' : 'border-fuchsia-900'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(255,0,255,0.3), inset 0 0 20px rgba(255,0,255,0.2)'
                : 'none',
            }}
          />

          {/* Neon Corner Effects */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${position}`}
              style={{
                background: `linear-gradient(${45 + i * 90}deg, #F0F, transparent)`,
                opacity: 0.5,
                filter: 'blur(4px)',
              }}
              animate={{
                opacity: isFocused ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}

          {/* Scan Line Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(transparent 50%, rgba(255,0,255,0.1) 50%)',
              backgroundSize: '100% 4px',
            }}
            animate={{
              backgroundPosition: ['0 0', '0 -4px'],
            }}
            transition={{ duration: 0.2, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm"
              animate={{
                textShadow: [
                  '0 0 5px rgba(255,0,0,0.5)',
                  '0 0 10px rgba(255,0,0,0.7)',
                  '0 0 5px rgba(255,0,0,0.5)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {error}
            </motion.p>
          ) : helperText ? (
            <p 
              className="text-fuchsia-400/70 text-sm"
              style={{
                textShadow: '0 0 5px rgba(255,0,255,0.3)',
              }}
            >
              {helperText}
            </p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-fuchsia-300 text-sm px-3 py-1 rounded-full bg-black/50 border"
            animate={{
              borderColor: isFocused 
                ? ['rgba(255,0,255,0.5)', 'rgba(0,255,255,0.5)', 'rgba(255,0,255,0.5)']
                : 'rgba(255,0,255,0.2)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(255,0,255,0.2)',
                    '0 0 10px rgba(0,255,255,0.2)',
                    '0 0 10px rgba(255,0,255,0.2)',
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

export default Textarea_50; 