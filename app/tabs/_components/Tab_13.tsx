import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_13: React.FC<TabProps> = ({
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
      {/* Magical Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(192,38,211,0.1), rgba(232,121,249,0.1))',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
          background: isActive ? [
            'linear-gradient(45deg, rgba(192,38,211,0.1), rgba(232,121,249,0.1))',
            'linear-gradient(225deg, rgba(192,38,211,0.1), rgba(232,121,249,0.1))',
            'linear-gradient(45deg, rgba(192,38,211,0.1), rgba(232,121,249,0.1))',
          ] : 'linear-gradient(45deg, rgba(192,38,211,0.1), rgba(232,121,249,0.1))',
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Magical Sparkles */}
      {isActive && (
        <>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle at center, rgba(232,121,249,1), transparent)',
                borderRadius: '50%',
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 20],
                y: [0, (Math.random() - 0.5) * 20],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}

      {/* Magical Runes */}
      {isActive && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4"
              style={{
                left: `${25 * i + 10}%`,
                top: '50%',
                transform: 'translateY(-50%)',
                border: '1px solid rgba(232,121,249,0.3)',
                borderRadius: '2px',
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Magical Aura */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(232,121,249,0.2), transparent 70%)',
        }}
        animate={{
          scale: isActive ? [0.9, 1.1, 0.9] : 1,
          opacity: isActive ? [0.3, 0.5, 0.3] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Label */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(232,121,249,0.5)', '0 0 16px rgba(232,121,249,0.3)', '0 0 8px rgba(232,121,249,0.5)']
            : '0 0 0px rgba(232,121,249,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Magical Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, rgba(232,121,249,0.3), rgba(192,38,211,0.3)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        animate={{
          rotate: isActive ? [0, 360] : 0,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Magical Particles */}
      {isActive && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-fuchsia-400/50"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
              animate={{
                y: [0, -40],
                x: [0, (Math.random() - 0.5) * 20],
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
              }}
              transition={{
                duration: 1.5,
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
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(232,121,249,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(232,121,249,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_13; 