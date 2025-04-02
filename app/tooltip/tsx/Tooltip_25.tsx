"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  plasmaColor1?: string;
  plasmaColor2?: string;
  plasmaColor3?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  plasmaSpeed?: number;
}

const Tooltip_25: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  plasmaColor1 = '#4c1d95',
  plasmaColor2 = '#7c3aed',
  plasmaColor3 = '#c4b5fd',
  backgroundColor = '#2e1065',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  plasmaSpeed = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    if (isVisible) {
      const animate = () => {
        setTime(t => t + 0.01 * plasmaSpeed);
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isVisible, plasmaSpeed]);

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
            {/* Plasma layers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  inset: -50,
                  opacity: 0.3,
                  background: `
                    radial-gradient(
                      circle at ${50 + Math.sin(time + i * 2) * 30}% ${50 + Math.cos(time + i * 2) * 30}%,
                      ${i === 0 ? plasmaColor1 : i === 1 ? plasmaColor2 : plasmaColor3} 0%,
                      transparent 50%
                    ),
                    radial-gradient(
                      circle at ${50 + Math.cos(time - i) * 30}% ${50 + Math.sin(time - i) * 30}%,
                      ${i === 0 ? plasmaColor2 : i === 1 ? plasmaColor3 : plasmaColor1} 0%,
                      transparent 50%
                    )
                  `,
                  filter: 'blur(8px)',
                  mixBlendMode: 'screen',
                }}
                animate={{
                  transform: [
                    'scale(1) rotate(0deg)',
                    'scale(1.2) rotate(120deg)',
                    'scale(1) rotate(360deg)',
                  ],
                }}
                transition={{
                  duration: 10 / plasmaSpeed,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Text with glow effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                textShadow: `0 0 10px ${textColor}`,
                mixBlendMode: 'difference',
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${textColor}`,
                  `0 0 20px ${textColor}`,
                  `0 0 10px ${textColor}`,
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

export default Tooltip_25; 