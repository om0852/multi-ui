"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  glowColor?: string;
  textColor?: string;
  backgroundColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_11: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  glowColor = '#ff00ff',
  textColor = '#ffffff',
  backgroundColor = '#1a1a1a',
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
              borderRadius: '0.5rem',
              backgroundColor,
              color: textColor,
              boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.5rem' : 0,
              marginTop: position === 'bottom' ? '0.5rem' : 0,
              marginLeft: position === 'right' ? '0.5rem' : 0,
              marginRight: position === 'left' ? '0.5rem' : 0,
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  `0 0 4px ${glowColor}`,
                  `0 0 8px ${glowColor}`,
                  `0 0 4px ${glowColor}`,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_11; 