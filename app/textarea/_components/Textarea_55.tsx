import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_55: React.FC<TextareaProps> = ({
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

  // Circuit paths
  const paths = [
    'M0 50 H30 V20 H70 V80 H100',
    'M20 0 V30 H80 V70 H40 V100',
    'M100 30 H70 V60 H30 V90',
    'M0 80 H20 V40 H60 V70 H100'
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
          className="block text-lg font-medium mb-2 text-lime-400"
          animate={{
            textShadow: isFocused 
              ? '0 0 10px rgba(163,230,53,0.5)'
              : '0 0 0px rgba(163,230,53,0)'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Circuit Board Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #0A0A0A, #171717)',
          }}
        >
          {/* Circuit Paths */}
          {paths.map((path, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{
                opacity: 0.2,
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d={path}
                  fill="none"
                  stroke="rgba(163,230,53,0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </svg>
            </motion.div>
          ))}

          {/* Circuit Nodes */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 rounded-full bg-lime-500/30"
              style={{
                left: `${(index % 3) * 45 + 5}%`,
                top: index < 3 ? '10%' : '90%',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                boxShadow: [
                  '0 0 0px rgba(163,230,53,0)',
                  '0 0 10px rgba(163,230,53,0.5)',
                  '0 0 0px rgba(163,230,53,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
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
              bg-neutral-900/90 backdrop-blur-sm
              border-2
              text-lime-300 placeholder-lime-800
              transition-all duration-300
              focus:outline-none
              resize-none min-h-[120px]
              font-mono
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-lime-500' : 'border-lime-900'}
            `}
            style={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(163,230,53,0.1), inset 0 0 20px rgba(163,230,53,0.1)'
                : 'none'
            }}
          />

          {/* Power Lines */}
          <motion.div
            className="absolute h-full w-1 left-0 top-0 bg-gradient-to-b from-transparent via-lime-500/20 to-transparent"
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute h-full w-1 right-0 top-0 bg-gradient-to-b from-transparent via-lime-500/20 to-transparent"
            animate={{
              y: ['100%', '-100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Corner LEDs */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, index) => (
            <motion.div
              key={index}
              className={`absolute w-2 h-2 ${position} m-2 rounded-full bg-lime-500`}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                boxShadow: [
                  '0 0 0px rgba(163,230,53,0)',
                  '0 0 10px rgba(163,230,53,0.5)',
                  '0 0 0px rgba(163,230,53,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center font-mono">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm"
              animate={{
                opacity: [0.7, 1, 0.7],
                color: ['#F87171', '#EF4444', '#F87171'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              [ERROR]: {error}
            </motion.p>
          ) : helperText ? (
            <motion.p 
              className="text-lime-600 text-sm"
              animate={{
                opacity: isFocused ? [0.7, 1, 0.7] : 0.7,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {`// ${helperText}`}
            </motion.p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-lime-400 text-sm px-3 py-1 rounded-lg bg-neutral-900/50 border border-lime-700/30"
            animate={{
              borderColor: isFocused 
                ? ['rgba(163,230,53,0.3)', 'rgba(163,230,53,0.6)', 'rgba(163,230,53,0.3)']
                : 'rgba(163,230,53,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 5px rgba(163,230,53,0.2)',
                    '0 0 10px rgba(163,230,53,0.4)',
                    '0 0 5px rgba(163,230,53,0.2)',
                  ]
                : 'none',
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

export default Textarea_55; 