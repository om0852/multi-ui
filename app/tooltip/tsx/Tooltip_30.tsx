"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  circuitColor?: string;
  pulseColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  circuitIntensity?: number;
}

const Tooltip_30: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  circuitColor = '#0ea5e9',
  pulseColor = '#7dd3fc',
  backgroundColor = '#0c4a6e',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  circuitIntensity = 1,
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
              border: `1px solid ${circuitColor}44`,
            }}
          >
            {/* Circuit pattern */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.2 * circuitIntensity,
              }}
            >
              {/* Horizontal lines */}
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={`h-${i}`}
                  x1="0"
                  y1={`${20 * (i + 1)}%`}
                  x2="100%"
                  y2={`${20 * (i + 1)}%`}
                  stroke={circuitColor}
                  strokeWidth="1"
                  strokeDasharray="8 4"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -24 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              {/* Vertical lines */}
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={`v-${i}`}
                  x1={`${12.5 * (i + 1)}%`}
                  y1="0"
                  x2={`${12.5 * (i + 1)}%`}
                  y2="100%"
                  stroke={circuitColor}
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: 24 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              {/* Circuit nodes */}
              {[...Array(15)].map((_, i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r="2"
                  fill={circuitColor}
                  initial={{ opacity: 0.2 }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    r: [2, 3, 2],
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </svg>
            {/* Pulse effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `
                    linear-gradient(
                      ${90 + i * 45}deg,
                      ${pulseColor}00 0%,
                      ${pulseColor}22 25%,
                      ${pulseColor}44 50%,
                      ${pulseColor}22 75%,
                      ${pulseColor}00 100%
                    )
                  `,
                  opacity: 0.3 * circuitIntensity,
                }}
                animate={{
                  transform: [
                    'translateX(0%)',
                    'translateX(100%)',
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Text with cyber effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${circuitColor}`,
                fontFamily: 'monospace',
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${circuitColor}`,
                  `0 0 20px ${circuitColor}`,
                  `0 0 10px ${circuitColor}`,
                ],
              }}
              transition={{
                duration: 2,
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

export default Tooltip_30; 