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

const Tooltip_5: React.FC<TooltipProps> = ({
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
    const commonStyle = {
      position: 'absolute' as const,
      width: 0,
      height: 0,
      border: `${arrowSize}px solid transparent`,
    };

    switch (position) {
      case 'top':
        return {
          ...commonStyle,
          bottom: `-${arrowSize * 2}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderTopColor: backgroundColor,
        };
      case 'bottom':
        return {
          ...commonStyle,
          top: `-${arrowSize * 2}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderBottomColor: backgroundColor,
        };
      case 'left':
        return {
          ...commonStyle,
          right: `-${arrowSize * 2}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderLeftColor: backgroundColor,
        };
      case 'right':
        return {
          ...commonStyle,
          left: `-${arrowSize * 2}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          borderRightColor: backgroundColor,
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, delay }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.5rem 0.75rem',
              backgroundColor,
              color: textColor,
              borderRadius: '0.25rem',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.5rem' : 0,
              marginTop: position === 'bottom' ? '0.5rem' : 0,
              marginLeft: position === 'right' ? '0.5rem' : 0,
              marginRight: position === 'left' ? '0.5rem' : 0,
            }}
          >
            {text}
            <div style={getArrowStyle()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_5;
