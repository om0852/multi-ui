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

const Tooltip_44: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  prismColors = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0088ff', '#8800ff'],
  backgroundColor = '#ffffff',
  textColor = '#000000',
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
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Prismatic layers */}
            {prismColors.map((color, index) => (
              <motion.div
                key={`prism-${index}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(
                    ${45 + (index * 60)}deg,
                    ${color}${Math.floor(40 * prismIntensity)} 0%,
                    transparent 50%
                  )`,
                  opacity: 0.5,
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Crystal facets */}
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={`facet-${index}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(
                    ${60 * index}deg,
                    rgba(255, 255, 255, 0.8) 0%,
                    transparent 20%
                  )`,
                  opacity: 0.3 * prismIntensity,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Sparkles */}
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={`sparkle-${index}`}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  left: `${(index * 100) / 8}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: '0 0 8px #ffffff',
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
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
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                mixBlendMode: 'difference',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
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

export default Tooltip_44; 