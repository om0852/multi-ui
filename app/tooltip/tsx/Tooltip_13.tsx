"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  shadowColor?: string;
  delay?: number;
  className?: string;
}

const Tooltip_13: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  backgroundColor = '#2563eb',
  textColor = '#ffffff',
  shadowColor = 'rgba(37, 99, 235, 0.5)',
  delay = 0.2,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPosition = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%) translateZ(0)' };
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%) translateZ(0)' };
      case 'left':
        return { right: '100%', top: '50%', transform: 'translateY(-50%) translateZ(0)' };
      case 'right':
        return { left: '100%', top: '50%', transform: 'translateY(-50%) translateZ(0)' };
      default:
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%) translateZ(0)' };
    }
  };

  const getInitialAnimation = () => {
    switch (position) {
      case 'top':
        return { opacity: 0, y: 20, rotateX: 90 };
      case 'bottom':
        return { opacity: 0, y: -20, rotateX: -90 };
      case 'left':
        return { opacity: 0, x: 20, rotateY: -90 };
      case 'right':
        return { opacity: 0, x: -20, rotateY: 90 };
      default:
        return { opacity: 0, y: 20, rotateX: 90 };
    }
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ perspective: '1000px' }}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={getInitialAnimation()}
            animate={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 }}
            exit={getInitialAnimation()}
            transition={{ 
              duration: 0.4,
              delay,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              backgroundColor,
              color: textColor,
              boxShadow: `
                0 10px 20px -5px ${shadowColor},
                0 0 10px ${shadowColor}
              `,
              whiteSpace: 'nowrap',
              zIndex: 50,
              transformStyle: 'preserve-3d',
              marginBottom: position === 'top' ? '1rem' : 0,
              marginTop: position === 'bottom' ? '1rem' : 0,
              marginLeft: position === 'right' ? '1rem' : 0,
              marginRight: position === 'left' ? '1rem' : 0,
            }}
          >
            <motion.div
              animate={{
                rotateX: [0, 5, 0, -5, 0],
                rotateY: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {text}
            </motion.div>
            {/* 3D shadow effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(45deg, ${shadowColor}, transparent)`,
                borderRadius: '0.75rem',
                filter: 'blur(8px)',
                transform: 'translateZ(-10px)',
                opacity: 0.5,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_13; 