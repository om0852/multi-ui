"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_37 = ({
  text,
  position = 'top',
  children,
  pixelColor = '#fef08a',
  glitchColor = '#facc15',
  backgroundColor = '#422006',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  pixelSize = 4,
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
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.875rem',
              imageRendering: 'pixelated',
              border: `${pixelSize}px solid ${pixelColor}`,
              boxShadow: `
                inset ${pixelSize}px ${pixelSize}px 0 rgba(255, 255, 255, 0.2),
                inset -${pixelSize}px -${pixelSize}px 0 rgba(0, 0, 0, 0.2)
              `,
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent ${pixelSize}px,
                    rgba(0, 0, 0, 0.2) ${pixelSize}px,
                    rgba(0, 0, 0, 0.2) ${pixelSize * 2}px
                  )
                `,
                pointerEvents: 'none',
              }}
            />
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: pixelSize,
                  height: pixelSize,
                  backgroundColor: glitchColor,
                  opacity: 0.5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.5, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.1 }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `${pixelSize}px ${pixelSize}px 0 rgba(0, 0, 0, 0.5)`,
              }}
              animate={{ color: [textColor, glitchColor, textColor] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_37;
