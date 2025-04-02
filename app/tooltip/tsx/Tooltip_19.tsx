"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  starColor?: string;
  nebulaColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_19: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  starColor = '#ffffff',
  nebulaColor = '#4c1d95',
  backgroundColor = '#0f172a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
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
        return { opacity: 0, y: 10, scale: 0.9 };
      case 'bottom':
        return { opacity: 0, y: -10, scale: 0.9 };
      case 'left':
        return { opacity: 0, x: 10, scale: 0.9 };
      case 'right':
        return { opacity: 0, x: -10, scale: 0.9 };
      default:
        return { opacity: 0, y: 10, scale: 0.9 };
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
            transition={{ duration: 0.4, delay }}
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
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            {/* Stars */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '2px',
                  backgroundColor: starColor,
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            {/* Nebula effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`nebula-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `radial-gradient(
                    circle at ${50 + (i - 1) * 30}% ${50 + (i - 1) * 20}%,
                    ${nebulaColor}66 0%,
                    transparent 70%
                  )`,
                  opacity: 0.3,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Text with glow */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                textShadow: `0 0 8px ${starColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 8px ${starColor}`,
                  `0 0 12px ${starColor}`,
                  `0 0 8px ${starColor}`,
                ],
              }}
              transition={{
                duration: 2,
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

export default Tooltip_19; 