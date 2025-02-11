import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_1: React.FC<TabProps> = ({
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
        relative px-6 py-3 rounded-lg text-sm font-medium
        transition-all duration-300 ease-in-out
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={false}
        animate={{
          background: isActive
            ? 'linear-gradient(135deg, #6366F1, #8B5CF6, #D946EF)'
            : 'transparent',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover Gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #D946EF)',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border Gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(135deg, #6366F1, #8B5CF6, #D946EF)`,
          opacity: 0.3,
          padding: '1px',
        }}
        initial={false}
        animate={{
          opacity: isActive ? 0.5 : 0.2,
        }}
        whileHover={{ opacity: 0.5 }}
      >
        <div className="h-full w-full bg-gray-900 rounded-lg" />
      </motion.div>

      {/* Animated Particles */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-indigo-400"
              style={{
                left: `${30 * i + 20}%`,
                top: '50%',
              }}
              animate={{
                y: [10, -10, 10],
                opacity: [0, 1, 0],
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

      {/* Label */}
      <span className="relative z-10">{label}</span>

      {/* Active Indicator */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ width: 0, x: '-50%' }}
        animate={{
          width: isActive ? '80%' : '0%',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 20px rgba(99,102,241,0.3)',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActive ? [0.3, 0.6, 0.3] : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.button>
  );
};

export default Tab_1; 