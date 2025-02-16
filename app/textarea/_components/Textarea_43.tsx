import React, { TextareaHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea_43: React.FC<TextareaProps> = ({
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

  // SVG path for a gear
  const gearPath = "M12 0c-.3 0-.5.1-.7.3L9.5 2.1c-.2-.1-.5-.1-.7-.2L8 0H4l-.8 1.9c-.3.1-.5.1-.7.2L.7.3C.3.1 0 .3 0 .7v3.3l1.9.8c.1.2.1.5.2.7L0 8v4l1.9.8c.1.2.1.5.2.7L0 15.3c0 .4.3.7.7.7h3.3l.8-1.9c.2.1.5.1.7.2L8 16h4l.8-1.9c.2-.1.5-.1.7-.2l1.8 1.8c.4.2.7 0 .7-.4v-3.3l-1.9-.8c-.1-.2-.1-.5-.2-.7L16 8V4l-1.9-.8c-.1-.2-.1-.5-.2-.7L16 .7c0-.4-.3-.7-.7-.7h-3.3z";

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <motion.label 
          className="block text-lg font-bold mb-2"
          style={{
            color: '#B45309',
            textShadow: '1px 1px 2px rgba(180,83,9,0.3)',
          }}
        >
          <span className="flex items-center gap-2">
            <motion.svg
              viewBox="0 0 16 16"
              className="w-5 h-5 fill-current"
              animate={{ rotate: isFocused ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <path d={gearPath} />
            </motion.svg>
            {label}
          </span>
        </motion.label>
      )}
      <div className="relative">
        {/* Mechanical Background */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #292524, #44403C)',
            border: '2px solid #78350F',
            boxShadow: 'inset 0 0 20px rgba(120,53,15,0.3)',
          }}
        >
          {/* Rotating Gears */}
          {[...Array(4)].map((_, index) => (
            <motion.svg
              key={index}
              viewBox="0 0 16 16"
              className={`absolute w-12 h-12 opacity-10 ${
                index === 0 ? 'top-0 left-0' :
                index === 1 ? 'top-0 right-0' :
                index === 2 ? 'bottom-0 left-0' :
                'bottom-0 right-0'
              }`}
              animate={{ 
                rotate: index % 2 === 0 ? 360 : -360,
                scale: isFocused ? [1, 1.1, 1] : 1,
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <path d={gearPath} className="fill-amber-700" />
            </motion.svg>
          ))}

          {/* Rivets */}
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-amber-600 to-amber-800"
              style={{
                top: index < 4 ? '4px' : 'calc(100% - 16px)',
                left: `${(index % 4) * 33 + 8}%`,
                boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)',
              }}
              animate={{
                scale: isFocused ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 1, delay: index * 0.1, repeat: Infinity }}
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
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${error ? 'border-red-500' : isFocused ? 'border-amber-500' : 'border-amber-900'}
            `}
            style={{
              fontFamily: 'Courier New, monospace',
              boxShadow: isFocused 
                ? 'inset 0 0 20px rgba(217,119,6,0.2)'
                : 'inset 0 0 10px rgba(0,0,0,0.3)',
            }}
          />

          {/* Mechanical Corner Decorations */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, index) => (
            <motion.div
              key={index}
              className={`absolute w-8 h-8 ${position} pointer-events-none`}
              animate={{
                rotate: index % 2 === 0 ? [0, 90, 0] : [0, -90, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
            >
              <div className="absolute inset-0 border-2 border-amber-700"
                   style={{
                     borderRadius: '0 100% 0 0',
                     transform: 'rotate(90deg)',
                     opacity: 0.5,
                   }} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div>
          {error ? (
            <motion.p 
              className="text-red-400 text-sm font-mono"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              [ERROR]: {error}
            </motion.p>
          ) : helperText ? (
            <p className="text-amber-600/70 text-sm font-mono">{`// ${helperText}`}</p>
          ) : null}
        </div>
        {showCharacterCount && maxLength && (
          <motion.div 
            className="text-amber-500 text-sm px-3 py-1 rounded-lg bg-stone-800/50 border border-amber-700/30 font-mono"
            animate={{
              borderColor: isFocused 
                ? ['rgba(217,119,6,0.5)', 'rgba(245,158,11,0.5)', 'rgba(217,119,6,0.5)']
                : 'rgba(217,119,6,0.3)',
              boxShadow: isFocused
                ? [
                    '0 0 10px rgba(217,119,6,0.2)',
                    '0 0 10px rgba(245,158,11,0.2)',
                    '0 0 10px rgba(217,119,6,0.2)',
                  ]
                : 'none',
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

export default Textarea_43; 