"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  glitchColor1?: string;
  glitchColor2?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  glitchIntensity?: number;
}

const Tooltip_21: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  glitchColor1 = '#ff0080',
  glitchColor2 = '#00ff00',
  backgroundColor = '#000000',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  glitchIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (Math.random() < 0.3 * glitchIntensity) {
          setGlitchOffset({
            x: (Math.random() - 0.5) * 10 * glitchIntensity,
            y: (Math.random() - 0.5) * 10 * glitchIntensity,
          });
          setTimeout(() => {
            setGlitchOffset({ x: 0, y: 0 });
          }, 50);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isVisible, glitchIntensity]);

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
              borderRadius: '0.25rem',
              overflow: 'hidden',
            }}
          >
            {/* Glitch layers */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: glitchColor1,
                mixBlendMode: 'multiply',
                opacity: 0.5,
                transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: glitchColor2,
                mixBlendMode: 'multiply',
                opacity: 0.5,
                transform: `translate(${-glitchOffset.x}px, ${-glitchOffset.y}px)`,
              }}
            />
            {/* Scan lines */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  ${backgroundColor}44 3px,
                  ${backgroundColor}44 4px
                )`,
              }}
            />
            {/* Text with glitch effect */}
            <motion.div
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              <motion.span
                style={{
                  display: 'block',
                  position: 'relative',
                  transform: `translate(${glitchOffset.x * 0.5}px, ${glitchOffset.y * 0.5}px)`,
                }}
                animate={{
                  textShadow: [
                    `2px 0 ${glitchColor1}, -2px 0 ${glitchColor2}`,
                    `0 0 ${textColor}`,
                    `2px 0 ${glitchColor1}, -2px 0 ${glitchColor2}`,
                  ],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                {text}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_21; 