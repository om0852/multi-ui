"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_45 = ({
  text,
  position = 'top',
  children,
  nebulaColors = ['#ff6b6b', '#5c27fe', '#3498db'],
  starColor = '#ffffff',
  backgroundColor = '#0a0a2a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  nebulaIntensity = 1,
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
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            {nebulaColors.map((color, index) => (
              <motion.div
                key={`nebula-${index}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `radial-gradient(circle at ${50 + Math.sin(index * Math.PI / 2) * 30}% ${50 + Math.cos(index * Math.PI / 2) * 30}%, ${color}${Math.floor(50 * nebulaIntensity)} 0%, transparent 70%)`,
                  opacity: 0.4,
                  filter: 'blur(15px)',
                }}
                animate={{ transform: ['scale(1) rotate(0deg)', 'scale(1.3) rotate(120deg)', 'scale(1) rotate(360deg)'] }}
                transition={{ duration: 15, delay: index * 2, repeat: Infinity, ease: "linear" }}
              />
            ))}
            {[...Array(20)].map((_, index) => (
              <motion.div
                key={`star-${index}`}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '2px',
                  background: starColor,
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: `0 0 ${4 + Math.random() * 4}px ${starColor}`,
                }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ duration: 1 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
            <motion.span
              style={{ position: 'relative', zIndex: 1, display: 'block', textShadow: `0 0 10px ${nebulaColors[0]}` }}
              animate={{ textShadow: nebulaColors.map(color => `0 0 15px ${color}`).join(', ') }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_45;
