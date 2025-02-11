import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_5: React.FC<TabProps> = ({
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
        ${isActive ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'}
        perspective-1000
        group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 3D Container */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: isActive ? [0, -10, 0] : 0,
          rotateY: isActive ? [0, 10, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Front Face */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, rgba(251,191,36,0.1), rgba(245,158,11,0.1))',
            border: '1px solid rgba(251,191,36,0.2)',
            transform: 'translateZ(2px)',
          }}
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Back Face */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, rgba(251,191,36,0.05), rgba(245,158,11,0.05))',
            border: '1px solid rgba(251,191,36,0.1)',
            transform: 'translateZ(-2px)',
          }}
        />

        {/* Edge Faces */}
        <motion.div
          className="absolute inset-y-0 left-0 w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, rgba(251,191,36,0.2), rgba(245,158,11,0.2))',
            transform: 'rotateY(-90deg) translateZ(1px)',
          }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, rgba(251,191,36,0.2), rgba(245,158,11,0.2))',
            transform: 'rotateY(90deg) translateZ(1px)',
          }}
        />
      </motion.div>

      {/* Label */}
      <motion.span
        className="relative z-10 block"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(251,191,36,0.5)', '0 0 16px rgba(251,191,36,0.3)', '0 0 8px rgba(251,191,36,0.5)']
            : '0 0 0px rgba(251,191,36,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Hover Highlight */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(251,191,36,0.15), transparent 100px)',
        }}
        initial={false}
        whileHover={{
          '--x': 'var(--mouse-x)',
          '--y': 'var(--mouse-y)',
        } as any}
      />

      {/* Active Indicator */}
      <motion.div
        className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 -translate-x-1/2"
        style={{
          background: 'linear-gradient(90deg, transparent, #FCD34D, transparent)',
        }}
        initial={{ width: '0%' }}
        animate={{
          width: isActive ? '100%' : '0%',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Accents */}
      {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${position}`}
          style={{
            borderStyle: 'solid',
            borderWidth: position.includes('top') ? '2px 0 0 2px' : '0 2px 2px 0',
            borderColor: 'rgba(251,191,36,0.3)',
            borderRadius: '2px',
          }}
          animate={{
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Active Particles */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-400"
              style={{
                left: `${(i % 4) * 30 + 5}%`,
                top: i < 4 ? '-20%' : '120%',
              }}
              animate={{
                y: i < 4 ? [0, -20] : [0, 20],
                opacity: [0, 0.5, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};

export default Tab_5; 