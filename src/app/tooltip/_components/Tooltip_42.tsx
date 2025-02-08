"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  waveColor1?: string;
  waveColor2?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  waveIntensity?: number;
}

const Tooltip_42: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  waveColor1 = '#8b5cf6',
  waveColor2 = '#c084fc',
  backgroundColor = '#2e1065',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  waveIntensity = 1,
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
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            {/* Plasma wave layers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                style={{
                  position: 'absolute',
                  inset: -50,
                  opacity: 0.3 * waveIntensity,
                  background: `
                    radial-gradient(
                      circle at ${50 + Math.sin(i * Math.PI / 3) * 30}% ${50 + Math.cos(i * Math.PI / 3) * 30}%,
                      ${i % 2 ? waveColor1 : waveColor2} 0%,
                      transparent 50%
                    )
                  `,
                  filter: 'blur(8px)',
                }}
                animate={{
                  transform: [
                    'scale(1) rotate(0deg)',
                    'scale(1.2) rotate(120deg)',
                    'scale(1) rotate(360deg)',
                  ],
                }}
                transition={{
                  duration: 8 - i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Wave distortion overlay */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(
                    45deg,
                    ${waveColor1}22 25%,
                    ${waveColor2}22 50%,
                    ${waveColor1}22 75%
                  )
                `,
                mixBlendMode: 'overlay',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Text with glow effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${waveColor1}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${waveColor1}, 0 0 20px ${waveColor2}`,
                  `0 0 15px ${waveColor2}, 0 0 30px ${waveColor1}`,
                  `0 0 10px ${waveColor1}, 0 0 20px ${waveColor2}`,
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

export default Tooltip_42; 