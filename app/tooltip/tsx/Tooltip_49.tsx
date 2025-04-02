"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  fireColor?: string;
  iceColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  elementIntensity?: number;
}

const Tooltip_49: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  fireColor = '#ef4444',
  iceColor = '#3b82f6',
  backgroundColor = '#1e293b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  elementIntensity = 1,
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
            {/* Fire effect */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`flame-${i}`}
                style={{
                  position: 'absolute',
                  left: `${(i * 100) / 5}%`,
                  bottom: '-20%',
                  width: '40%',
                  height: '60%',
                  background: `linear-gradient(0deg, 
                    ${fireColor} 0%, 
                    ${fireColor}88 40%, 
                    transparent 100%
                  )`,
                  filter: 'blur(8px)',
                  opacity: 0.6 * elementIntensity,
                }}
                animate={{
                  height: ['60%', '80%', '60%'],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Ice effect */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`frost-${i}`}
                style={{
                  position: 'absolute',
                  right: `${(i * 100) / 5}%`,
                  top: '-20%',
                  width: '40%',
                  height: '60%',
                  background: `linear-gradient(180deg, 
                    ${iceColor} 0%, 
                    ${iceColor}88 40%, 
                    transparent 100%
                  )`,
                  filter: 'blur(8px)',
                  opacity: 0.6 * elementIntensity,
                }}
                animate={{
                  height: ['60%', '80%', '60%'],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Ice crystals */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`crystal-${i}`}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '10px',
                  backgroundColor: iceColor,
                  top: `${Math.random() * 100}%`,
                  right: `${(i * 100) / 8}%`,
                  transform: `rotate(${45 + Math.random() * 90}deg)`,
                  opacity: 0.7 * elementIntensity,
                }}
                animate={{
                  opacity: [0.7, 0.3, 0.7],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Fire sparks */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`spark-${i}`}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '2px',
                  backgroundColor: fireColor,
                  bottom: `${Math.random() * 100}%`,
                  left: `${(i * 100) / 8}%`,
                }}
                animate={{
                  y: [0, -20],
                  x: [0, (Math.random() - 0.5) * 20],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
            {/* Text with dual effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                background: `linear-gradient(45deg, ${fireColor}, ${iceColor})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                textShadow: `
                  0 0 10px ${fireColor}66,
                  0 0 20px ${iceColor}66
                `,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${fireColor}66, 0 0 20px ${iceColor}66`,
                  `0 0 15px ${fireColor}88, 0 0 30px ${iceColor}88`,
                  `0 0 10px ${fireColor}66, 0 0 20px ${iceColor}66`,
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

export default Tooltip_49; 