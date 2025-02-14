"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_1: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  backgroundColor = '#333333',
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
        return { opacity: 0, y: 10 };
      case 'bottom':
        return { opacity: 0, y: -10 };
      case 'left':
        return { opacity: 0, x: 10 };
      case 'right':
        return { opacity: 0, x: -10 };
      default:
        return { opacity: 0, y: 10 };
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
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={getInitialAnimation()}
            transition={{ duration: 0.2, delay }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.5rem 1rem',
              backgroundColor,
              color: textColor,
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              marginBottom: position === 'top' ? '0.5rem' : 0,
              marginTop: position === 'bottom' ? '0.5rem' : 0,
              marginLeft: position === 'right' ? '0.5rem' : 0,
              marginRight: position === 'left' ? '0.5rem' : 0,
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_1;
