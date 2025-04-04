"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_47 = ({
  text,
  position = 'top',
  children,
  quantumColor = '#a855f7',
  fieldColor = '#e9d5ff',
  backgroundColor = '#3b0764',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  particleCount = 15,
  fieldIntensity = 1,
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
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            {[...Array(particleCount)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: quantumColor,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 0.5, 1],
                  opacity: [0.8, 0.2, 0.8],
                  x: [0, Math.random() * 30 - 15, 0],
                  y: [0, Math.random() * 30 - 15, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  opacity: 0.2 * fieldIntensity,
                  background: `radial-gradient(
                    circle at ${50 + Math.sin(i * Math.PI / 3) * 30}% ${50 + Math.cos(i * Math.PI / 3) * 30}%,
                    ${fieldColor} 0%,
                    transparent 70%
                  )`,
                  filter: 'blur(8px)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2 * fieldIntensity, 0.4 * fieldIntensity, 0.2 * fieldIntensity],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '1px',
                  backgroundColor: quantumColor,
                  opacity: 0.2,
                  top: `${(i + 1) * 12.5}%`,
                }}
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${quantumColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${quantumColor}`,
                  `0 0 20px ${quantumColor}`,
                  `0 0 10px ${quantumColor}`,
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

export default Tooltip_47;
