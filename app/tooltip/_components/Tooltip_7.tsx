"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_7: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  backgroundColor = '#2a2a2a',
  textColor = '#ffffff',
  accentColor = '#4f46e5',
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

  const get3DAnimation = () => {
    const baseRotation = position === 'top' || position === 'bottom' ? 'rotateX' : 'rotateY';
    const angle = position === 'top' || position === 'left' ? 10 : -10;

    return {
      initial: {
        opacity: 0,
        transform: `${baseRotation}(${angle}deg) scale(0.95)`,
        transformOrigin: position === 'top' ? 'bottom' : position === 'bottom' ? 'top' : position === 'left' ? 'right' : 'left',
      },
      animate: {
        opacity: 1,
        transform: `${baseRotation}(0deg) scale(1)`,
      },
      exit: {
        opacity: 0,
        transform: `${baseRotation}(${angle}deg) scale(0.95)`,
      },
    };
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
            initial={get3DAnimation().initial}
            animate={get3DAnimation().animate}
            exit={get3DAnimation().exit}
            transition={{ 
              duration: 0.3,
              delay,
              ease: "easeOut"
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.25rem',
              background: `linear-gradient(145deg, ${backgroundColor}, ${backgroundColor}cc)`,
              color: textColor,
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1),
                         0 2px 4px -1px rgba(0, 0, 0, 0.06),
                         inset 0 2px 4px rgba(255, 255, 255, 0.1)`,
              border: `1px solid ${accentColor}33`,
              marginBottom: position === 'top' ? '0.75rem' : 0,
              marginTop: position === 'bottom' ? '0.75rem' : 0,
              marginLeft: position === 'right' ? '0.75rem' : 0,
              marginRight: position === 'left' ? '0.75rem' : 0,
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(45deg, ${accentColor}00, ${accentColor}22)`,
                borderRadius: '0.5rem',
                transform: 'translateZ(-1px)',
              }}
            />
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_7;
