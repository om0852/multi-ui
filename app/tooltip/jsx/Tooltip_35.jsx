"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_35 = ({
  text,
  position = 'top',
  children,
  energyColor = '#8b5cf6',
  fractalColor = '#c4b5fd',
  backgroundColor = '#2e1065',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  energyIntensity = 1,
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
              borderRadius: '0.75rem',
              overflow: 'hidden',
            }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`fractal-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `
                    repeating-conic-gradient(
                      from ${90 * i}deg,
                      ${fractalColor}00 0deg,
                      ${fractalColor}33 ${90 / (i + 1)}deg,
                      ${fractalColor}00 ${180 / (i + 1)}deg
                    )
                  `,
                  opacity: 0.3 * energyIntensity,
                }}
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 10 / (i + 1), repeat: Infinity, ease: "linear" }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${energyColor}, 0 0 20px ${fractalColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${energyColor}, 0 0 20px ${fractalColor}`,
                  `0 0 15px ${energyColor}, 0 0 30px ${fractalColor}`,
                  `0 0 10px ${energyColor}, 0 0 20px ${fractalColor}`,
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

export default Tooltip_35;
