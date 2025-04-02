"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  metalColor?: string;
  highlightColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  flowIntensity?: number;
}

const Tooltip_32: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  metalColor = '#94a3b8',
  highlightColor = '#e2e8f0',
  backgroundColor = '#334155',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  flowIntensity = 1,
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
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: `
                0 4px 6px -1px ${metalColor}33,
                0 2px 4px -2px ${metalColor}33
              `,
            }}
          >
            {/* Liquid metal surface */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    linear-gradient(
                      ${45 + i * 60}deg,
                      ${metalColor}00 0%,
                      ${metalColor}66 45%,
                      ${metalColor}00 55%
                    )
                  `,
                  opacity: 0.5,
                }}
                animate={{
                  backgroundPosition: ['200% 50%', '-100% 50%'],
                }}
                transition={{
                  duration: 3 / flowIntensity,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            ))}
            {/* Metallic highlights */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`highlight-${i}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    linear-gradient(
                      ${90 + i * 90}deg,
                      ${highlightColor}00 0%,
                      ${highlightColor}33 25%,
                      ${highlightColor}66 50%,
                      ${highlightColor}33 75%,
                      ${highlightColor}00 100%
                    )
                  `,
                  opacity: 0.3 * flowIntensity,
                }}
                animate={{
                  x: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5 / flowIntensity,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1,
                }}
              />
            ))}
            {/* Ripple effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ripple-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `
                    radial-gradient(
                      circle at ${50 + (i - 1) * 30}% ${50 + (i - 1) * 20}%,
                      ${highlightColor}22 0%,
                      transparent 70%
                    )
                  `,
                  opacity: 0.2 * flowIntensity,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1 * flowIntensity, 0.3 * flowIntensity, 0.1 * flowIntensity],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
            {/* Text with metallic effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                background: `
                  linear-gradient(
                    to bottom,
                    ${highlightColor} 0%,
                    ${metalColor} 50%,
                    ${highlightColor} 100%
                  )
                `,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: `0 2px 4px ${metalColor}66`,
              }}
              animate={{
                backgroundPosition: ['0 0', '0 -200%'],
              }}
              transition={{
                duration: 3,
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

export default Tooltip_32; 