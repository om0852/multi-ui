"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  baseColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_8: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  baseColor = '#e0e5ec',
  textColor = '#2d3748',
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

  const getNeumorphicAnimation = () => {
    return {
      initial: {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(8px)',
      },
      animate: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(8px)',
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
            variants={getNeumorphicAnimation()}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ 
              duration: 0.3,
              delay,
              ease: [0.23, 1, 0.32, 1]
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '1rem 1.5rem',
              backgroundColor: baseColor,
              color: textColor,
              borderRadius: '1rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              zIndex: 50,
              boxShadow: `
                6px 6px 10px rgba(163, 177, 198, 0.6),
                -6px -6px 10px rgba(255, 255, 255, 0.8),
                inset 2px 2px 4px rgba(255, 255, 255, 0.4),
                inset -2px -2px 4px rgba(163, 177, 198, 0.4)
              `,
              marginBottom: position === 'top' ? '1rem' : 0,
              marginTop: position === 'bottom' ? '1rem' : 0,
              marginLeft: position === 'right' ? '1rem' : 0,
              marginRight: position === 'left' ? '1rem' : 0,
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                textShadow: '1px 1px 1px rgba(255, 255, 255, 0.5)',
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

export default Tooltip_8;
