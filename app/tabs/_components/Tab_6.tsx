import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_6: React.FC<TabProps> = ({
  label,
  isActive = false,
  onClick,
  disabled = false,
}) => {
  // Generate random stars
  const stars = Array.from({ length: 20 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 2 + 1,
  }));

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 text-sm font-medium
        transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isActive ? 'text-purple-300' : 'text-gray-400 hover:text-purple-300'}
        overflow-hidden
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Cosmic Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(88,28,135,0.2), rgba(167,139,250,0.2))',
          opacity: isActive ? 1 : 0,
        }}
        animate={{
          scale: isActive ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Stars */}
      {isActive && stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            scale: [star.scale, star.scale * 1.5, star.scale],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Nebula Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(167,139,250,0.2), transparent)',
        }}
        animate={{
          opacity: isActive ? [0.3, 0.6, 0.3] : 0,
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Label */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(167,139,250,0.5)', '0 0 16px rgba(167,139,250,0.3)', '0 0 8px rgba(167,139,250,0.5)']
            : '0 0 0px rgba(167,139,250,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Cosmic Ring */}
      <motion.div
        className="absolute -inset-1 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(167,139,250,0.2), rgba(88,28,135,0.2))',
          opacity: 0,
        }}
        whileHover={{
          opacity: 0.5,
          scale: 1.1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Active Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)',
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shooting Stars */}
      {isActive && (
        <>
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white"
              style={{
                boxShadow: '0 0 4px 2px rgba(255,255,255,0.5)',
              }}
              initial={{ 
                x: '-10%',
                y: `${30 + i * 40}%`,
              }}
              animate={{
                x: '120%',
                y: `${60 + i * 40}%`,
                opacity: [0, 1, 1, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: 'linear',
              }}
            />
          ))}
        </>
      )}

      {/* Focus Ring */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 0 2px rgba(167,139,250,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_6; 