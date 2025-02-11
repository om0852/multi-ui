import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_14: React.FC<TabProps> = ({
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
        ${isActive ? 'text-sky-200' : 'text-gray-400 hover:text-sky-200'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ice Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(186,230,253,0.1), rgba(125,211,252,0.1))',
          backdropFilter: 'blur(4px)',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Frost Patterns */}
      {isActive && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${25 * i + 10}% 50%, rgba(186,230,253,0.2), transparent 40%)`,
                filter: 'blur(2px)',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.9, 1.1, 0.9],
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

      {/* Ice Crystals */}
      {isActive && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'rgba(186,230,253,0.3)',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transformOrigin: 'center',
              }}
              animate={{
                rotate: [0, 360],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
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

      {/* Snowflakes */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-sky-100/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20%',
                borderRadius: '50%',
              }}
              animate={{
                y: [0, 60],
                x: [0, (Math.random() - 0.5) * 20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
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

      {/* Label */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(186,230,253,0.5)', '0 0 16px rgba(186,230,253,0.3)', '0 0 8px rgba(186,230,253,0.5)']
            : '0 0 0px rgba(186,230,253,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Ice Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, rgba(186,230,253,0.3), rgba(125,211,252,0.3)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        animate={{
          opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Frost Mist */}
      {isActive && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(186,230,253,0.1), transparent)',
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(186,230,253,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(186,230,253,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_14; 