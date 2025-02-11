import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_3: React.FC<TabProps> = ({
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
        relative px-6 py-3 rounded-xl text-sm font-medium
        backdrop-blur-md
        transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isActive ? 'text-sky-300' : 'text-gray-400 hover:text-sky-300'}
        overflow-hidden
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glass Background */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.1), transparent)',
          transform: 'translateX(-100%)',
        }}
        animate={{
          x: ['0%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Label */}
      <span className="relative z-10 mix-blend-plus-lighter">{label}</span>

      {/* Floating Orbs */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-sky-400/30"
              style={{
                filter: 'blur(4px)',
              }}
              animate={{
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
                opacity: [0.3, 0.6, 0.3],
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

      {/* Active Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #0EA5E9, transparent)',
        }}
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 4,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover Ring */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          border: '1px solid rgba(56, 189, 248, 0.2)',
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Active Glow */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: [
              '0 0 0px rgba(56,189,248,0)',
              '0 0 20px rgba(56,189,248,0.3)',
              '0 0 0px rgba(56,189,248,0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}
    </motion.button>
  );
};

export default Tab_3; 