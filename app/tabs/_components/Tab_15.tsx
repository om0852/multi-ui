import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_15: React.FC<TabProps> = ({
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
        ${isActive ? 'text-red-300' : 'text-gray-400 hover:text-red-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Sunset Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(251,113,133,0.1), rgba(251,146,60,0.1))',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
          background: isActive ? [
            'linear-gradient(45deg, rgba(251,113,133,0.1), rgba(251,146,60,0.1))',
            'linear-gradient(45deg, rgba(251,146,60,0.1), rgba(251,113,133,0.1))',
            'linear-gradient(45deg, rgba(251,113,133,0.1), rgba(251,146,60,0.1))',
          ] : 'linear-gradient(45deg, rgba(251,113,133,0.1), rgba(251,146,60,0.1))',
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Sun Effect */}
      {isActive && (
        <motion.div
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(251,113,133,0.3), transparent)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Cloud Layers */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent ${30 + i * 20}%, rgba(251,146,60,0.1) ${50 + i * 20}%, transparent)`,
                filter: 'blur(4px)',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 20 - i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </>
      )}

      {/* Birds */}
      {isActive && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-1"
              style={{
                left: `${-10 + i * 20}%`,
                top: `${30 + Math.sin(i) * 10}%`,
                background: 'rgba(251,113,133,0.3)',
                clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%)',
              }}
              animate={{
                x: ['0%', '120%'],
                y: [0, Math.sin(i) * 10],
              }}
              transition={{
                duration: 8,
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
            ? ['0 0 8px rgba(251,113,133,0.5)', '0 0 16px rgba(251,113,133,0.3)', '0 0 8px rgba(251,113,133,0.5)']
            : '0 0 0px rgba(251,113,133,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Warm Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, rgba(251,113,133,0.3), rgba(251,146,60,0.3)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        animate={{
          opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Atmospheric Particles */}
      {isActive && (
        <>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-red-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20],
                x: [0, (Math.random() - 0.5) * 10],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(251,113,133,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(251,113,133,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_15; 