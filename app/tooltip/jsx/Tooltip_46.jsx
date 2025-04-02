"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_46 = ({
  text,
  position = 'top',
  children,
  metalColor = '#71717a',
  highlightColor = '#f4f4f5',
  backgroundColor = '#27272a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  flowIntensity = 1,
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
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2)`,
            }}
          >
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={`flow-${index}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `radial-gradient(
                    circle at ${50 + Math.sin(index * Math.PI) * 30}% ${50 + Math.cos(index * Math.PI) * 30}%,
                    ${highlightColor}44 0%,
                    transparent 60%
                  )`,
                  opacity: 0.4 * flowIntensity,
                }}
                animate={{
                  transform: [
                    'scale(1) rotate(0deg)',
                    'scale(1.2) rotate(180deg)',
                    'scale(1) rotate(360deg)',
                  ],
                }}
                transition={{
                  duration: 8 - index * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={`ripple-${index}`}
                style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: `1px solid ${highlightColor}22`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                background: `linear-gradient(
                  45deg,
                  ${textColor} 0%,
                  ${highlightColor} 50%,
                  ${textColor} 100%
                )`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                mixBlendMode: 'overlay',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
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

export default Tooltip_46;
