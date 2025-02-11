import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_9: React.FC<TabProps> = ({
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
        ${isActive ? 'text-violet-300' : 'text-gray-400 hover:text-violet-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Crystal Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(167,139,250,0.1))',
          clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%, 15% 50%)',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Crystal Facets */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(124,58,237,0.1), transparent)',
                transform: `rotate(${120 * i}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Prismatic Edge */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, transparent, rgba(124,58,237,0.3), transparent) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        animate={{
          rotate: isActive ? [0, 360] : 0,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sparkles */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-300/30"
              style={{
                left: `${20 * i + 10}%`,
                top: '50%',
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [-10, 0, 10],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
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
            ? ['0 0 8px rgba(124,58,237,0.5)', '0 0 16px rgba(124,58,237,0.3)', '0 0 8px rgba(124,58,237,0.5)']
            : '0 0 0px rgba(124,58,237,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Crystal Points */}
      {['top', 'right', 'bottom', 'left'].map((position, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            position === 'top' || position === 'bottom' ? 'left-1/2 w-4 h-2' : 'top-1/2 w-2 h-4'
          } -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
          style={{
            [position]: '-2px',
            background: 'linear-gradient(to bottom, rgba(124,58,237,0.3), transparent)',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            transform: `rotate(${90 * i}deg)`,
          }}
          animate={{
            scale: isActive ? [0.8, 1, 0.8] : 0.8,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Hover Effect - Prismatic Shine */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(124,58,237,0.2), transparent 60%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }}
        whileHover={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Focus Ring */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 0 2px rgba(124,58,237,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_9; 