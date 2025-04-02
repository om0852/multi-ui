"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  matrixColor?: string;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  rainIntensity?: number;
}

const Tooltip_43: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  matrixColor = '#00ff41',
  glowColor = '#4ade80',
  backgroundColor = '#022c22',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  rainIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    // Generate random matrix characters
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$@#%&*';
    const randomChars = Array.from({ length: 50 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(randomChars);
  }, [isVisible]);

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
              fontFamily: "'Courier New', monospace",
            }}
          >
            {/* Matrix rain effect */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                opacity: 0.15 * rainIntensity,
              }}
            >
              {matrixChars.map((char, index) => (
                <motion.div
                  key={`rain-${index}`}
                  style={{
                    position: 'absolute',
                    left: `${(index * 100) / matrixChars.length}%`,
                    color: matrixColor,
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textShadow: `0 0 5px ${glowColor}`,
                  }}
                  initial={{ y: -20 }}
                  animate={{
                    y: ['0%', '120%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "linear",
                  }}
                >
                  {char}
                </motion.div>
              ))}
            </div>
            {/* Glowing overlay */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${glowColor}22 0%, transparent 70%)`,
                opacity: 0.3,
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Text with matrix effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 5px ${matrixColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 5px ${matrixColor}`,
                  `0 0 10px ${matrixColor}, 0 0 20px ${glowColor}`,
                  `0 0 5px ${matrixColor}`,
                ],
              }}
              transition={{
                duration: 1.5,
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

export default Tooltip_43; 