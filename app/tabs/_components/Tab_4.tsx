import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_4: React.FC<TabProps> = ({
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
        ${isActive ? 'text-rose-400' : 'text-gray-400 hover:text-rose-400'}
        group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Neon Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(244,63,94,0.15), transparent 70%)',
        }}
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Neon Border */}
      <motion.div
        className="absolute inset-0"
        style={{
          border: '2px solid transparent',
          borderRadius: '4px',
          background: 'linear-gradient(45deg, #F43F5E, #FB7185, #F43F5E) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActive ? [0.5, 1, 0.5] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Neon Lines */}
      <motion.div
        className="absolute -top-2 left-1/2 w-px h-2 bg-rose-400"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-2 left-1/2 w-px h-2 bg-rose-400"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Label with Neon Effect */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(244,63,94,0.5)', '0 0 16px rgba(244,63,94,0.3)', '0 0 8px rgba(244,63,94,0.5)']
            : '0 0 0px rgba(244,63,94,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(244,63,94,0.15), transparent 70%)',
        }}
        initial={false}
        whileHover={{
          '--x': 'var(--mouse-x)',
          '--y': 'var(--mouse-y)',
        } as any}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />

      {/* Active Particles */}
      {isActive && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-rose-400"
              style={{
                left: `${(i % 3) * 40 + 10}%`,
                top: i < 3 ? '-10%' : '110%',
              }}
              animate={{
                y: i < 3 ? [0, -20, 0] : [0, 20, 0],
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

      {/* Focus Ring */}
      <motion.div
        className="absolute inset-0 rounded"
        style={{
          boxShadow: '0 0 0 2px rgba(244,63,94,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_4; 