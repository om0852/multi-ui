"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  prismColors?: string[];
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  prismIntensity?: number;
}

const Tooltip_38: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  prismColors = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#0ea5e9', '#8b5cf6', '#ec4899'],
  backgroundColor = '#18181b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  prismIntensity = 1,
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
        return { opacity: 0, y: 10, scale: 0.95 };
      case 'bottom':
        return { opacity: 0, y: -10, scale: 0.95 };
      case 'left':
        return { opacity: 0, x: 10, scale: 0.95 };
      case 'right':
        return { opacity: 0, x: -10, scale: 0.95 };
      default:
        return { opacity: 0, y: 10, scale: 0.95 };
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
            transition={{ duration: 0.3, delay }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              backgroundColor,
              color: textColor,
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: position === 'top' ? '0.75rem' : 0,
              marginTop: position === 'bottom' ? '0.75rem' : 0,
              marginLeft: position === 'right' ? '0.75rem' : 0,
              marginRight: position === 'left' ? '0.75rem' : 0,
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Rainbow prism layers */}
            {prismColors.map((color, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `linear-gradient(
                    ${index * (360 / prismColors.length)}deg,
                    ${color}33 0%,
                    transparent 50%
                  )`,
                  opacity: 0.5 * prismIntensity,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 - index,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Refraction lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(
                    ${i * 60}deg,
                    transparent 0%,
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 100%
                  )`,
                  opacity: 0.3 * prismIntensity,
                }}
                animate={{
                  backgroundPosition: ['200% 0%', '-100% 0%'],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Text with rainbow effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                background: `linear-gradient(
                  90deg,
                  ${prismColors.join(', ')}
                )`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
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

export default Tooltip_38; 