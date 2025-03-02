"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  neonColor?: string;
  glowIntensity?: number;
  delay?: number;
  className?: string;
}

const Tooltip_3: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  neonColor = '#00ff00',
  glowIntensity = 1,
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
        return { opacity: 0, y: 10, scale: 0.9 };
      case 'bottom':
        return { opacity: 0, y: -10, scale: 0.9 };
      case 'left':
        return { opacity: 0, x: 10, scale: 0.9 };
      case 'right':
        return { opacity: 0, x: -10, scale: 0.9 };
      default:
        return { opacity: 0, y: 10, scale: 0.9 };
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
              duration: 0.3,
              delay,
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: neonColor,
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              boxShadow: `0 0 ${5 * glowIntensity}px ${neonColor}, 
                         0 0 ${10 * glowIntensity}px ${neonColor}, 
                         0 0 ${20 * glowIntensity}px ${neonColor}`,
              textShadow: `0 0 ${5 * glowIntensity}px ${neonColor}`,
              border: `1px solid ${neonColor}`,
              marginBottom: position === 'top' ? '0.75rem' : 0,
              marginTop: position === 'bottom' ? '0.75rem' : 0,
              marginLeft: position === 'right' ? '0.75rem' : 0,
              marginRight: position === 'left' ? '0.75rem' : 0,
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_3;
