import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_12: React.FC<TabProps> = ({
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
      {/* Electric Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1))',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
          background: isActive ? [
            'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1))',
            'linear-gradient(225deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1))',
            'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1))',
          ] : 'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1))',
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Lightning Bolts */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-8 bg-blue-400/30"
              style={{
                left: `${30 * i + 20}%`,
                top: '50%',
                transform: 'translateY(-50%) rotate(20deg)',
                clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [1, 1.2, 1],
                rotate: ['20deg', '30deg', '20deg'],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}

      {/* Energy Field */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(59,130,246,0.2), transparent 70%)',
        }}
        animate={{
          scale: isActive ? [0.9, 1.1, 0.9] : 1,
          opacity: isActive ? [0.3, 0.5, 0.3] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Circuit Lines */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '1px solid rgba(59,130,246,0.3)',
          background: `
            linear-gradient(90deg, transparent 50%, rgba(59,130,246,0.1) 50%),
            linear-gradient(0deg, transparent 50%, rgba(59,130,246,0.1) 50%)
          `,
          backgroundSize: '10px 10px',
        }}
        animate={{
          backgroundPosition: isActive 
            ? ['0px 0px', '10px 10px']
            : '0px 0px',
        }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />

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

      {/* Energy Particles */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 20],
                y: [0, (Math.random() - 0.5) * 20],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}

      {/* Power Lines */}
      <motion.div
        className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{ top: 0 }}
        animate={{
          opacity: isActive ? [0.2, 0.4, 0.2] : 0,
          scaleX: isActive ? [0.8, 1, 0.8] : 0.8,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{ bottom: 0 }}
        animate={{
          opacity: isActive ? [0.2, 0.4, 0.2] : 0,
          scaleX: isActive ? [0.8, 1, 0.8] : 0.8,
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      {/* Hover Effect */}
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

export default Tab_12; 