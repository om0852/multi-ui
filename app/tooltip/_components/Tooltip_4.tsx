"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_4: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  gradientFrom = '#FF0080',
  gradientTo = '#7928CA',
  backgroundColor = '#1a1a1a',
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
        return { opacity: 0, y: 10, rotate: -5 };
      case 'bottom':
        return { opacity: 0, y: -10, rotate: 5 };
      case 'left':
        return { opacity: 0, x: 10, rotate: 5 };
      case 'right':
        return { opacity: 0, x: -10, rotate: -5 };
      default:
        return { opacity: 0, y: 10, rotate: -5 };
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
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            exit={getInitialAnimation()}
            transition={{ 
              duration: 0.3,
              delay,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '2px',
              background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
              borderRadius: '0.75rem',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.75rem' : 0,
              marginTop: position === 'bottom' ? '0.75rem' : 0,
              marginLeft: position === 'right' ? '0.75rem' : 0,
              marginRight: position === 'left' ? '0.75rem' : 0,
            }}
          >
            <div
              style={{
                background: backgroundColor,
                color: textColor,
                padding: '0.75rem 1.5rem',
                borderRadius: '0.625rem',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              {text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_4;
