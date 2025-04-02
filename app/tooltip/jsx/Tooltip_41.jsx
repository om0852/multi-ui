"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_41 = ({
  text,
  position = 'top',
  children,
  circuitColor = '#0ea5e9',
  pulseColor = '#7dd3fc',
  backgroundColor = '#0c4a6e',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  circuitIntensity = 1,
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
              borderRadius: '0.5rem',
              overflow: 'hidden',
              border: `1px solid ${circuitColor}`,
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(90deg, transparent 50%, ${circuitColor}22 50%),
                  linear-gradient(0deg, transparent 50%, ${circuitColor}22 50%)
                `,
                backgroundSize: '10px 10px',
                opacity: 0.3 * circuitIntensity,
              }}
              animate={{ backgroundPosition: ['0px 0px', '10px 10px'] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${25 * i}%`,
                  top: 0,
                  width: '2px',
                  height: '100%',
                  background: circuitColor,
                  opacity: 0.2 * circuitIntensity,
                }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.2 * circuitIntensity, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${pulseColor}33 0%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                fontFamily: "'Share Tech Mono', monospace",
              }}
              animate={{
                textShadow: [
                  `0 0 5px ${circuitColor}`,
                  `0 0 10px ${circuitColor}`,
                  `0 0 5px ${circuitColor}`,
                ],
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_41;
