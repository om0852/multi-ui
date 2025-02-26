"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  energyColor?: string;
  fractalColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  energyIntensity?: number;
}

const Tooltip_35: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  energyColor = '#8b5cf6',
  fractalColor = '#c4b5fd',
  backgroundColor = '#2e1065',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  energyIntensity = 1,
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
            }}
          >
            {/* Fractal patterns */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`fractal-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `
                    repeating-conic-gradient(
                      from ${90 * i}deg,
                      ${fractalColor}00 0deg,
                      ${fractalColor}33 ${90 / (i + 1)}deg,
                      ${fractalColor}00 ${180 / (i + 1)}deg
                    )
                  `,
                  opacity: 0.3 * energyIntensity,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10 / (i + 1),
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Energy pulses */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                style={{
                  position: 'absolute',
                  inset: -10,
                  background: `
                    radial-gradient(
                      circle at ${50 + (i - 1) * 30}% ${50 + (i - 1) * 20}%,
                      ${energyColor}66 0%,
                      transparent 70%
                    )
                  `,
                  opacity: 0.3 * energyIntensity,
                  filter: 'blur(8px)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [
                    0.2 * energyIntensity,
                    0.4 * energyIntensity,
                    0.2 * energyIntensity,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
            {/* Energy arcs */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`arc-${i}`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: `1px solid ${energyColor}33`,
                  transform: `rotate(${60 * i}deg)`,
                }}
                animate={{
                  rotate: [60 * i, 60 * i + 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            ))}
            {/* Text with energy effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `
                  0 0 10px ${energyColor},
                  0 0 20px ${fractalColor}
                `,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${energyColor}, 0 0 20px ${fractalColor}`,
                  `0 0 15px ${energyColor}, 0 0 30px ${fractalColor}`,
                  `0 0 10px ${energyColor}, 0 0 20px ${fractalColor}`,
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

export default Tooltip_35; 