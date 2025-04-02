"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  holoColor?: string;
  scanlineColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  glitchIntensity?: number;
}

const Tooltip_48: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  holoColor = '#22d3ee',
  scanlineColor = '#67e8f9',
  backgroundColor = '#164e63',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  glitchIntensity = 1,
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
              border: `1px solid ${holoColor}44`,
            }}
          >
            {/* 3D Layers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`layer-${i}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: `1px solid ${holoColor}22`,
                  borderRadius: '0.5rem',
                  transform: `translateZ(${(i + 1) * 2}px)`,
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Scan lines */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`scanline-${i}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '1px',
                  backgroundColor: scanlineColor,
                  opacity: 0.1,
                  top: `${(i + 1) * 5}%`,
                }}
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scaleX: [1, 1.02, 1],
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Holographic glitch effects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`glitch-${i}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(
                    ${45 + i * 45}deg,
                    transparent 0%,
                    ${holoColor}11 50%,
                    transparent 100%
                  )`,
                  opacity: 0.3 * glitchIntensity,
                }}
                animate={{
                  x: [0, 10 * glitchIntensity, -10 * glitchIntensity, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5,
                }}
              />
            ))}
            {/* Interface elements */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '10px',
                height: '10px',
                border: `1px solid ${holoColor}`,
                borderRight: 'none',
                borderBottom: 'none',
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '10px',
                height: '10px',
                border: `1px solid ${holoColor}`,
                borderLeft: 'none',
                borderBottom: 'none',
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '10px',
                height: '10px',
                border: `1px solid ${holoColor}`,
                borderRight: 'none',
                borderTop: 'none',
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '10px',
                height: '10px',
                border: `1px solid ${holoColor}`,
                borderLeft: 'none',
                borderTop: 'none',
              }}
            />
            {/* Text with holographic effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 5px ${holoColor}`,
                fontFamily: "'Arial', sans-serif",
                letterSpacing: '1px',
              }}
              animate={{
                textShadow: [
                  `0 0 5px ${holoColor}`,
                  `0 0 10px ${holoColor}, 0 0 20px ${scanlineColor}`,
                  `0 0 5px ${holoColor}`,
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

export default Tooltip_48; 