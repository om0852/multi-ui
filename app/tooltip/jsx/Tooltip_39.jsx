"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_39 = ({
  text,
  position = 'top',
  children,
  primaryColor = '#f0abfc',
  secondaryColor = '#818cf8',
  gridColor = '#e879f9',
  backgroundColor = '#2e1065',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  gridIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPosition = () => {
    switch (position) {
      case 'top': return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom': return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'left': return { right: '100%', top: '50%', transform: 'translateY(-50%)' };
      case 'right': return { left: '100%', top: '50%', transform: 'translateY(-50%)' };
      default: return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
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
              fontFamily: "'VT323', monospace",
              fontSize: '1.25rem',
              border: `2px solid ${primaryColor}`,
              boxShadow: `0 0 20px ${primaryColor}66`,
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: -100,
                background: `
                  linear-gradient(transparent 0%, ${gridColor}22 2%, transparent 3%),
                  linear-gradient(90deg, transparent 0%, ${gridColor}22 2%, transparent 3%)
                `,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'center 0%',
                opacity: 0.5 * gridIntensity,
              }}
              animate={{ backgroundPosition: ['0px 0px', '0px 40px'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-100%',
                left: '50%',
                width: '200px',
                height: '200px',
                background: `
                  radial-gradient(
                    circle at center,
                    ${primaryColor} 0%,
                    ${secondaryColor} 50%,
                    transparent 70%
                  )
                `,
                transform: 'translateX(-50%)',
                opacity: 0.3,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.1) 2px,
                    rgba(255, 255, 255, 0.1) 4px
                  )
                `,
                pointerEvents: 'none',
              }}
            />
            <motion.span
              style={{ position: 'relative', zIndex: 1, display: 'block', mixBlendMode: 'difference' }}
              animate={{
                textShadow: [
                  `2px 2px ${primaryColor}, -2px -2px ${secondaryColor}`,
                  `3px 3px ${primaryColor}, -3px -3px ${secondaryColor}`,
                  `2px 2px ${primaryColor}, -2px -2px ${secondaryColor}`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_39;