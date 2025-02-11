import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_17: React.FC<TabProps> = ({
  label,
  isActive = false,
  onClick,
  disabled = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 text-sm font-medium
        transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isActive ? 'text-fuchsia-300' : 'text-gray-400 hover:text-fuchsia-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Digital Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(192,38,211,0.1), rgba(236,72,153,0.1))',
          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Glitch Effect */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: i === 0 ? 'rgba(236,72,153,0.2)' : i === 1 ? 'rgba(192,38,211,0.2)' : 'rgba(147,51,234,0.2)',
                clipPath: 'polygon(0 33%, 100% 33%, 100% 66%, 0 66%)',
                mixBlendMode: 'screen',
              }}
              animate={{
                x: [0, (Math.random() * 10) - 5],
                y: [0, (Math.random() * 10) - 5],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}

      {/* Digital Lines */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)',
                top: `${20 * i}%`,
              }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}

      {/* Binary Rain */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[8px] text-fuchsia-500/30 font-mono"
              style={{
                left: `${i * 12}%`,
                top: '-20%',
              }}
              animate={{
                y: ['0%', '120%'],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </>
      )}

      {/* Label with Glitch */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? [
                '2px 0 rgba(236,72,153,0.5), -2px 0 rgba(192,38,211,0.5)',
                '-2px 0 rgba(236,72,153,0.5), 2px 0 rgba(192,38,211,0.5)',
                '2px 0 rgba(236,72,153,0.5), -2px 0 rgba(192,38,211,0.5)',
              ]
            : 'none',
        }}
        transition={{ duration: 0.2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Circuit Pattern */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 50%, rgba(236,72,153,0.1) 50%),
            linear-gradient(0deg, transparent 50%, rgba(236,72,153,0.1) 50%)
          `,
          backgroundSize: '10px 10px',
        }}
        animate={{
          backgroundPosition: isActive ? ['0px 0px', '10px 10px'] : '0px 0px',
        }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(236,72,153,0.15), transparent 100px)',
        }}
        initial={false}
        whileHover={{
          '--x': 'var(--mouse-x)',
          '--y': 'var(--mouse-y)',
        } as any}
      />

      {/* Focus Ring */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 0 2px rgba(236,72,153,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_17; 