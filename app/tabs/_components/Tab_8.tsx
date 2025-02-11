import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_8: React.FC<TabProps> = ({
  label,
  isActive = false,
  onClick,
  disabled = false,
}) => {
  // Leaf SVG path
  const leafPath = "M12 1.5c-1.3 0-2.5.9-2.9 2.2-.4-.2-.8-.2-1.2-.2C4.6 3.5 2 6.1 2 9.4c0 1.5.5 2.9 1.4 4-.9 1.1-1.4 2.5-1.4 4 0 3.3 2.6 5.9 5.9 5.9.4 0 .8-.1 1.2-.2.4 1.3 1.6 2.2 2.9 2.2 1.3 0 2.5-.9 2.9-2.2.4.2.8.2 1.2.2 3.3 0 5.9-2.6 5.9-5.9 0-1.5-.5-2.9-1.4-4 .9-1.1 1.4-2.5 1.4-4 0-3.3-2.6-5.9-5.9-5.9-.4 0-.8.1-1.2.2-.4-1.3-1.6-2.2-2.9-2.2z";

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 text-sm font-medium
        transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isActive ? 'text-emerald-300' : 'text-gray-400 hover:text-emerald-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Nature Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(16,185,129,0.1), rgba(52,211,153,0.1))',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Floating Leaves */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              className="absolute w-3 h-3 text-emerald-500/20"
              style={{
                left: `${20 * i}%`,
                top: '50%',
              }}
              initial={{
                y: -20,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <path d={leafPath} fill="currentColor" />
            </motion.svg>
          ))}
        </>
      )}

      {/* Growing Vines */}
      <motion.div
        className="absolute left-0 bottom-0 w-full h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, #10B981, transparent)',
        }}
        animate={{
          scaleX: isActive ? [0.3, 1, 0.3] : 0,
          opacity: isActive ? [0.3, 0.7, 0.3] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Label */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(16,185,129,0.5)', '0 0 16px rgba(16,185,129,0.3)', '0 0 8px rgba(16,185,129,0.5)']
            : '0 0 0px rgba(16,185,129,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Corner Vines */}
      {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
        <motion.div
          key={i}
          className={`absolute w-4 h-4 ${position} pointer-events-none`}
          style={{
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: 'transparent',
            borderRadius: '2px',
            borderTopColor: i < 2 ? '#10B981' : 'transparent',
            borderLeftColor: i % 2 === 0 ? '#10B981' : 'transparent',
            borderRightColor: i % 2 === 1 ? '#10B981' : 'transparent',
            borderBottomColor: i >= 2 ? '#10B981' : 'transparent',
            opacity: 0.3,
          }}
          animate={{
            scale: isActive ? [0.8, 1, 0.8] : 0.8,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Hover Effect - Radial Gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(16,185,129,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_8; 