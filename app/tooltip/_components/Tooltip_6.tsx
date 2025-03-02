"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  shadowColor?: string;
  className?: string;
}

const Tooltip_6: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  backgroundColor = '#ffffff',
  textColor = '#1a1a1a',
  shadowColor = 'rgba(0, 0, 0, 0.1)',
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

  const floatingAnimation = {
    initial: {
      opacity: 0,
      y: position === 'bottom' ? -20 : position === 'top' ? 20 : 0,
      x: position === 'right' ? -20 : position === 'left' ? 20 : 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: [0, -4, 0],
      x: position === 'right' ? [0, 2, 0] : position === 'left' ? [0, -2, 0] : 0,
      scale: 1,
      transition: {
        duration: 2,
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
        x: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
    exit: {
      opacity: 0,
      y: position === 'bottom' ? -10 : position === 'top' ? 10 : 0,
      x: position === 'right' ? -10 : position === 'left' ? 10 : 0,
      scale: 0.95,
    },
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
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '1rem 1.5rem',
              backgroundColor,
              color: textColor,
              borderRadius: '1rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              boxShadow: `0 10px 25px -5px ${shadowColor}, 0 8px 10px -6px ${shadowColor}`,
              marginBottom: position === 'top' ? '1rem' : 0,
              marginTop: position === 'bottom' ? '1rem' : 0,
              marginLeft: position === 'right' ? '1rem' : 0,
              marginRight: position === 'left' ? '1rem' : 0,
              border: '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_6;
