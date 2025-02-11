import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_2: React.FC<TabProps> = ({
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
        ${isActive ? 'text-emerald-400' : 'text-gray-400 hover:text-emerald-400'}
      `}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {/* Floating Dots */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-emerald-400"
              style={{
                left: `${20 * i + 10}%`,
                top: '0',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
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

      {/* Label */}
      <span className="relative">
        {label}
        
        {/* Underline Effect */}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-400"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </span>

      {/* Side Lines */}
      <motion.div
        className="absolute left-0 top-1/2 w-px h-4 bg-emerald-400"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: isActive ? 1 : 0,
          y: '-50%',
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute right-0 top-1/2 w-px h-4 bg-emerald-400"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: isActive ? 1 : 0,
          y: '-50%',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-emerald-400/30"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Active Glow */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-sm"
          animate={{
            boxShadow: [
              '0 0 0px rgba(52,211,153,0)',
              '0 0 8px rgba(52,211,153,0.3)',
              '0 0 0px rgba(52,211,153,0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}

      {/* Focus Ring */}
      <motion.div
        className="absolute inset-0 rounded-sm ring-2 ring-emerald-400/50 ring-offset-2 ring-offset-gray-900"
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_2; 