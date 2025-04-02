"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_40 = ({
  text,
  position = 'top',
  children,
  neonColor = '#22d3ee',
  pulseColor = '#67e8f9',
  backgroundColor = '#164e63',
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, delay }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              backgroundColor,
              color: textColor,
              whiteSpace: 'nowrap',
              zIndex: 50,
              borderRadius: '0.5rem',
              boxShadow: `0 0 20px ${neonColor}`,
              border: `2px solid ${neonColor}`,
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${pulseColor}33 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3 * pulseIntensity, 0.6 * pulseIntensity, 0.3 * pulseIntensity],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${neonColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${neonColor}, 0 0 20px ${neonColor}, 0 0 30px ${neonColor}`,
                  `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 15px ${neonColor}`,
                  `0 0 10px ${neonColor}, 0 0 20px ${neonColor}, 0 0 30px ${neonColor}`,
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

export default Tooltip_40;
