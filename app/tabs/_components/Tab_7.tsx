import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_7: React.FC<TabProps> = ({
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
        ${isActive ? 'text-cyan-300' : 'text-gray-400 hover:text-cyan-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(6,182,212,0.1), rgba(34,211,238,0.1))',
          filter: 'blur(8px)',
        }}
        animate={{
          scale: isActive ? [1, 1.05, 1] : 1,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(34,211,238,0.15), transparent 100px)',
        }}
        initial={false}
        whileHover={{
          '--x': 'var(--mouse-x)',
          '--y': 'var(--mouse-y)',
        } as any}
      />

      {/* Flowing Lines */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(34,211,238,${0.05 + i * 0.02}), transparent)`,
                transform: `translateX(-100%) skewX(-15deg)`,
              }}
              animate={{
                x: ['0%', '200%'],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      {/* Label */}
      <motion.span
        className="relative z-10 mix-blend-plus-lighter"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(34,211,238,0.5)', '0 0 16px rgba(34,211,238,0.3)', '0 0 8px rgba(34,211,238,0.5)']
            : '0 0 0px rgba(34,211,238,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Bubble Effects */}
      {isActive && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-300/30"
              style={{
                left: `${(i % 3) * 40 + 10}%`,
                bottom: '-20%',
              }}
              animate={{
                y: [0, -40],
                x: [0, (i % 2 === 0 ? 10 : -10)],
                opacity: [0, 0.6, 0],
                scale: [1, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Active Indicator - Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.15), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Focus Ring */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 0 2px rgba(34,211,238,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_7; 