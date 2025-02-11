import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_10: React.FC<TabProps> = ({
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
        ${isActive ? 'text-orange-300' : 'text-gray-400 hover:text-orange-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Volcanic Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(234,88,12,0.1), rgba(251,146,60,0.1))',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
          background: isActive ? [
            'linear-gradient(45deg, rgba(234,88,12,0.1), rgba(251,146,60,0.1))',
            'linear-gradient(45deg, rgba(251,146,60,0.1), rgba(234,88,12,0.1))',
            'linear-gradient(45deg, rgba(234,88,12,0.1), rgba(251,146,60,0.1))',
          ] : 'linear-gradient(45deg, rgba(234,88,12,0.1), rgba(251,146,60,0.1))',
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Lava Flow */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${33 * (i + 1)}% 50%, rgba(234,88,12,0.2), transparent 30%)`,
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
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

      {/* Embers */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-orange-500/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
              animate={{
                y: [0, -40 - (Math.random() * 20)],
                x: [0, (Math.random() * 20) - 10],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}

      {/* Magma Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, rgba(234,88,12,0.3), rgba(251,146,60,0.3)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        animate={{
          background: isActive ? [
            'linear-gradient(45deg, rgba(234,88,12,0.3), rgba(251,146,60,0.3)) border-box',
            'linear-gradient(225deg, rgba(234,88,12,0.3), rgba(251,146,60,0.3)) border-box',
            'linear-gradient(45deg, rgba(234,88,12,0.3), rgba(251,146,60,0.3)) border-box',
          ] : 'linear-gradient(45deg, rgba(234,88,12,0.3), rgba(251,146,60,0.3)) border-box',
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Label */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isActive 
            ? ['0 0 8px rgba(234,88,12,0.5)', '0 0 16px rgba(234,88,12,0.3)', '0 0 8px rgba(234,88,12,0.5)']
            : '0 0 0px rgba(234,88,12,0)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Heat Distortion */}
      {isActive && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            opacity: 0.05,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Hover Effect - Heat Wave */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(234,88,12,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(234,88,12,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_10; 