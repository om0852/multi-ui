"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  lightningColor?: string;
  arcColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  stormIntensity?: number;
}

const Tooltip_50: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  lightningColor = '#fbbf24',
  arcColor = '#60a5fa',
  backgroundColor = '#1e1b4b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  stormIntensity = 1,
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
            }}
          >
            {/* Lightning bolts */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`lightning-${i}`}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '100%',
                  backgroundColor: lightningColor,
                  left: `${30 + i * 20}%`,
                  opacity: 0,
                  filter: 'blur(1px)',
                }}
                animate={{
                  opacity: [0, 0.8 * stormIntensity, 0],
                  scaleY: [0, 1, 0],
                  rotate: [0, (Math.random() - 0.5) * 20],
                }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3,
                }}
              />
            ))}
            {/* Electric arcs */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`arc-${i}`}
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  border: `2px solid ${arcColor}`,
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0.4 * stormIntensity, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2 + Math.random(),
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
              />
            ))}
            {/* Energy pulses */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `radial-gradient(
                    circle at ${50 + Math.sin(i * Math.PI / 2) * 30}% ${50 + Math.cos(i * Math.PI / 2) * 30}%,
                    ${arcColor}44 0%,
                    transparent 70%
                  )`,
                  opacity: 0.2 * stormIntensity,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2 * stormIntensity, 0.4 * stormIntensity, 0.2 * stormIntensity],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Static electricity */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`static-${i}`}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  backgroundColor: arcColor,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random(),
                }}
              />
            ))}
            {/* Text with electric effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${lightningColor}`,
                fontWeight: 'bold',
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${lightningColor}`,
                  `0 0 20px ${lightningColor}, 0 0 40px ${arcColor}`,
                  `0 0 10px ${lightningColor}`,
                ],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 1,
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

export default Tooltip_50; 