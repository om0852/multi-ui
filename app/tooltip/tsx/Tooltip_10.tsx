"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  arrowSize?: number;
  delay?: number;
  className?: string;
}

const Tooltip_10: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  backgroundColor = '#000000',
  textColor = '#ffffff',
  arrowSize = 6,
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

  const getArrowStyle = () => {
    const size = `${arrowSize}px`;
    const color = backgroundColor;

    switch (position) {
      case 'top':
        return {
          bottom: `-${arrowSize}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: size + ' solid transparent',
          borderRight: size + ' solid transparent',
          borderTop: size + ` solid ${color}`,
        };
      case 'bottom':
        return {
          top: `-${arrowSize}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: size + ' solid transparent',
          borderRight: size + ' solid transparent',
          borderBottom: size + ` solid ${color}`,
        };
      case 'left':
        return {
          right: `-${arrowSize}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: size + ' solid transparent',
          borderBottom: size + ' solid transparent',
          borderLeft: size + ` solid ${color}`,
        };
      case 'right':
        return {
          left: `-${arrowSize}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: size + ' solid transparent',
          borderBottom: size + ' solid transparent',
          borderRight: size + ` solid ${color}`,
        };
      default:
        return {};
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 30,
              delay 
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.5rem 1rem',
              backgroundColor,
              color: textColor,
              borderRadius: '4px',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.5rem' : 0,
              marginTop: position === 'bottom' ? '0.5rem' : 0,
              marginLeft: position === 'right' ? '0.5rem' : 0,
              marginRight: position === 'left' ? '0.5rem' : 0,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.1 }}
            >
              {text}
            </motion.div>
            <div
              style={{
                position: 'absolute',
                width: 0,
                height: 0,
                ...getArrowStyle(),
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_10;
