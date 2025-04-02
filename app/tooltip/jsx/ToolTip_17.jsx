"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_17 = ({
  text,
  position = 'top',
  children,
  bubbleColor = 'rgba(96, 165, 250, 0.9)',
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
        return { opacity: 0, y: 10, scale: 0.8 };
      case 'bottom':
        return { opacity: 0, y: -10, scale: 0.8 };
      case 'left':
        return { opacity: 0, x: 10, scale: 0.8 };
      case 'right':
        return { opacity: 0, x: -10, scale: 0.8 };
      default:
        return { opacity: 0, y: 10, scale: 0.8 };
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
            transition={{ 
              duration: 0.4,
              delay,
              type: "spring",
              damping: 15,
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              backgroundColor: bubbleColor,
              color: textColor,
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.75rem' : 0,
              marginTop: position === 'bottom' ? '0.75rem' : 0,
              marginLeft: position === 'right' ? '0.75rem' : 0,
              marginRight: position === 'left' ? '0.75rem' : 0,
              borderRadius: '2rem',
              backdropFilter: 'blur(8px)',
              boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.3)',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>{text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_17;
