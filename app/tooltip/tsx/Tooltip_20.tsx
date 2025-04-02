"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  neonColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  pulseIntensity?: number;
}

const Tooltip_20: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  neonColor = '#00ff99',
  backgroundColor = '#1a1a1a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  pulseIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPosition = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { right: '100%', top: '50%', transform: 'translateY(-50%)' };
      case 'right':
        return { left: '100%', top: '50%', transform: 'translateY(-50%)' };
      default:
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
    }
  };

  const getInitialAnimation = () => {
    switch (position) {
      case 'top':
        return { opacity: 0, y: 10, scale: 0.95 };
      case 'bottom':
        return { opacity: 0, y: -10, scale: 0.95 };
      case 'left':
        return { opacity: 0, x: 10, scale: 0.95 };
      case 'right':
        return { opacity: 0, x: -10, scale: 0.95 };
      default:
        return { opacity: 0, y: 10, scale: 0.95 };
    }
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={getInitialAnimation()}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={getInitialAnimation()}
            transition={{ duration: 0.3, delay }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              backgroundColor,
              color: textColor,
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.75rem' : 0,
              marginTop: position === 'bottom' ? '0.75rem' : 0,
              marginLeft: position === 'right' ? '0.75rem' : 0,
              marginRight: position === 'left' ? '0.75rem' : 0,
              borderRadius: '0.5rem',
              boxShadow: `0 0 10px ${neonColor}33,
                         0 0 20px ${neonColor}33,
                         0 0 30px ${neonColor}33,
                         0 0 40px ${neonColor}33`,
              border: `2px solid ${neonColor}`,
            }}
          >
            {/* Neon glow layers */}
            <motion.div
              style={{
                position: 'absolute',
                inset: -2,
                borderRadius: 'inherit',
                border: `2px solid ${neonColor}`,
                opacity: 0.5,
              }}
              animate={{
                opacity: [0.5, 0.8 * pulseIntensity, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                inset: -1,
                borderRadius: 'inherit',
                background: `linear-gradient(45deg,
                  ${neonColor}00 25%,
                  ${neonColor}40 50%,
                  ${neonColor}00 75%
                )`,
                filter: 'blur(8px)',
              }}
              animate={{
                backgroundPosition: ['200% 50%', '-200% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Text with neon effect */}
            <motion.span
              style={{
                position: 'relative',
                textShadow: `0 0 5px ${neonColor},
                            0 0 10px ${neonColor},
                            0 0 20px ${neonColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 20px ${neonColor}`,
                  `0 0 7px ${neonColor}, 0 0 14px ${neonColor}, 0 0 28px ${neonColor}`,
                  `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 20px ${neonColor}`,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_20; 