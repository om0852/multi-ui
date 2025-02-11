import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Tab_11: React.FC<TabProps> = ({
  label,
  isActive = false,
  onClick,
  disabled = false,
}) => {
  // Gear SVG paths
  const gearPath = "M12 0c-.3 0-.5.1-.7.3L9.5 2.1C8.8 2 8.1 2 7.4 2.1L5.7.3C5.5.1 5.3 0 5 0c-.3 0-.5.1-.7.3L2.1 2.5C2 3.2 2 3.9 2.1 4.6L.3 6.3C.1 6.5 0 6.7 0 7c0 .3.1.5.3.7l1.8 1.8C2 10.2 2 10.9 2.1 11.6l-1.8 1.8c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l1.8 1.8c.7.1 1.4.1 2.1 0l1.8 1.8c.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.7.1 1.4.1 2.1 0l1.8 1.8c.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.1-.7.1-1.4 0-2.1l1.8-1.8c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7l-1.8-1.8c.1-.7.1-1.4 0-2.1l1.8-1.8c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7l-1.8-1.8C17 3.9 17 3.2 16.9 2.5L15.1.7C15 .5 14.8.4 14.5.4c-.3 0-.5.1-.7.3l-1.8 1.8c-.7-.1-1.4-.1-2.1 0L8.1.7C7.9.5 7.7.4 7.4.4c-.3 0-.5.1-.7.3L4.9 2.5C4.8 3.2 4.8 3.9 4.9 4.6L3.1 6.3c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l1.8 1.8c-.1.7-.1 1.4 0 2.1L3.1 13.4c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l1.8 1.8c.7.1 1.4.1 2.1 0l1.8 1.8c.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.7.1 1.4.1 2.1 0l1.8 1.8c.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.1-.7.1-1.4 0-2.1l1.8-1.8c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7L19 9.5c.1-.7.1-1.4 0-2.1l1.8-1.8c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7L19 2.5C18.9 1.8 18.9 1.1 18.8.4L17 2.1C16.3 2 15.6 2 14.9 2.1L13.2.3C13 .1 12.8 0 12.5 0c-.3 0-.5.1-.7.3L9.5 2.1C8.8 2 8.1 2 7.4 2.1L5.7.3C5.5.1 5.3 0 5 0z";

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 text-sm font-medium
        transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isActive ? 'text-yellow-300' : 'text-gray-400 hover:text-yellow-300'}
        overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Brass Background */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, rgba(234,179,8,0.1), rgba(202,138,4,0.1))',
          border: '2px solid rgba(234,179,8,0.2)',
        }}
        animate={{
          opacity: isActive ? [0.5, 0.7, 0.5] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Rotating Gears */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              className="absolute w-6 h-6 text-yellow-600/20"
              style={{
                left: `${30 * i}%`,
                top: i % 2 === 0 ? '-20%' : '120%',
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8 - i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <path d={gearPath} fill="currentColor" />
            </motion.svg>
          ))}
        </>
      )}

      {/* Rivets */}
      {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((position, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${position}`}
          style={{
            background: 'radial-gradient(circle at center, rgba(234,179,8,0.3), rgba(202,138,4,0.3))',
            borderRadius: '50%',
            border: '1px solid rgba(234,179,8,0.4)',
          }}
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Steam Effect */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-100/10 rounded-full"
              style={{
                left: `${20 * i + 10}%`,
                bottom: '100%',
              }}
              animate={{
                y: [0, -30],
                x: [0, (i % 2 === 0 ? 10 : -10)],
                scale: [0, 1.5, 0],
                opacity: [0, 0.3, 0],
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
      <motion.span
        className="relative z-10"
        style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}
        animate={{
          textShadow: isActive 
            ? ['0 2px 4px rgba(234,179,8,0.5)', '0 2px 8px rgba(234,179,8,0.3)', '0 2px 4px rgba(234,179,8,0.5)']
            : '0 2px 4px rgba(0,0,0,0.5)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {label}
      </motion.span>

      {/* Mechanical Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'linear-gradient(45deg, rgba(234,179,8,0.3), rgba(202,138,4,0.3)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
        animate={{
          rotate: isActive ? [0, 360] : 0,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(234,179,8,0.15), transparent 100px)',
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
          boxShadow: '0 0 0 2px rgba(234,179,8,0.5)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default Tab_11; 