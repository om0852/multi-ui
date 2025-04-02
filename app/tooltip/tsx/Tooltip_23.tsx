"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  matrixColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  rainSpeed?: number;
  rainDensity?: number;
}

const Tooltip_23: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  matrixColor = '#00ff00',
  backgroundColor = '#000000',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  rainSpeed = 1,
  rainDensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [matrixChars, setMatrixChars] = useState<Array<{ x: number; y: number; char: string }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Generate random matrix characters
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ¥$@#%&*';
      const columns = Math.floor(20 * rainDensity);
      const rows = Math.floor(10 * rainDensity);
      
      const interval = setInterval(() => {
        setMatrixChars(prevChars => {
          const newChars = [...prevChars];
          
          // Add new characters at random positions
          if (newChars.length < columns * rows) {
            newChars.push({
              x: Math.floor(Math.random() * columns),
              y: -1,
              char: chars[Math.floor(Math.random() * chars.length)],
            });
          }
          
          // Update positions
          return newChars.map(char => ({
            ...char,
            y: char.y + 1,
            char: Math.random() < 0.1 ? chars[Math.floor(Math.random() * chars.length)] : char.char,
          })).filter(char => char.y < rows);
        });
      }, 100 / rainSpeed);

      return () => clearInterval(interval);
    } else {
      setMatrixChars([]);
    }
  }, [isVisible, rainSpeed, rainDensity]);

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
            {/* Matrix rain characters */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                fontFamily: 'monospace',
                fontSize: '10px',
                lineHeight: '10px',
                userSelect: 'none',
              }}
            >
              {matrixChars.map((char, index) => (
                <motion.div
                  key={index}
                  style={{
                    position: 'absolute',
                    left: `${(char.x * 100) / (20 * rainDensity)}%`,
                    top: `${(char.y * 100) / (10 * rainDensity)}%`,
                    color: matrixColor,
                    opacity: 1 - (char.y / (10 * rainDensity)),
                    textShadow: `0 0 5px ${matrixColor}`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 - (char.y / (10 * rainDensity)) }}
                  exit={{ opacity: 0 }}
                >
                  {char.char}
                </motion.div>
              ))}
            </div>
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
                  `0 0 15px ${textColor}`,
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

export default Tooltip_23; 