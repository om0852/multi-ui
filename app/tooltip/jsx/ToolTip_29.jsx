"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_29 = ({
  text,
  position = 'top',
  children,
  auroraColor1 = '#4ade80',
  auroraColor2 = '#818cf8',
  auroraColor3 = '#fb7185',
  backgroundColor = '#0f172a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  auroraIntensity = 1,
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
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            {[auroraColor1, auroraColor2, auroraColor3].map((color, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  inset: -20,
                  opacity: 0.3 * auroraIntensity,
                  background: `
                    linear-gradient(
                      ${45 + i * 30}deg,
                      ${color}00 20%,
                      ${color}66 50%,
                      ${color}00 80%
                    )
                  `,
                  filter: 'blur(8px)',
                }}
                animate={{
                  transform: ['translateX(0%) scale(1)', 'translateX(10%) scale(1.1)', 'translateX(0%) scale(1)'],
                  opacity: [0.2 * auroraIntensity, 0.4 * auroraIntensity, 0.2 * auroraIntensity],
                }}
                transition={{ duration: 8, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '2px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${auroraColor1}, 0 0 20px ${auroraColor2}, 0 0 30px ${auroraColor3}`,
              }}
              animate={{ textShadow: [`0 0 10px ${auroraColor1}, 0 0 20px ${auroraColor2}, 0 0 30px ${auroraColor3}`] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_29;
