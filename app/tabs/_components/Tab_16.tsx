import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_16: React.FC<TabProps> = ({
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
        ${isActive ? 'text-blue-300' : 'text-gray-400 hover:text-blue-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ocean Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(180deg, rgba(37,99,235,0.1), rgba(59,130,246,0.1))',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Water Waves */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.1), transparent)',
                transform: 'translateX(-100%)',
              }}
              animate={{
                x: ['0%', '200%'],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
            />
          ))}
        </>
      )}

      {/* Bubbles */}
      {isActive && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-300/20"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-20%',
              }}
              animate={{
                y: [0, -60],
                x: [0, (Math.random() * 20) - 10],
                scale: [0.5, 1, 0.5],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Marine Life */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-2 bg-blue-300/20"
              style={{
                clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)',
                left: `-10%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                x: ['0%', '120%'],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
            />
          ))}
        </>
      )}

      {/* Label */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(59,130,246,0.5)', '0 0 16px rgba(59,130,246,0.3)', '0 0 8px rgba(59,130,246,0.5)']
            : '0 0 0px rgba(59,130,246,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Seaweed */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 bottom-0 bg-blue-400/20"
          style={{
            height: `${20 + Math.random() * 20}px`,
            left: `${25 * i}%`,
          }}
          animate={{
            skewX: [-15, 15, -15],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Depth Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(59,130,246,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_16; 