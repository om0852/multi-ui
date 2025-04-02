"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  waveColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  waveIntensity?: number;
  waveCount?: number;
}

const Tooltip_27: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  waveColor = '#22d3ee',
  backgroundColor = '#164e63',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  waveIntensity = 1,
  waveCount = 8,
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
            {/* Sound waves */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              {[...Array(waveCount)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: '2px',
                    height: '30%',
                    backgroundColor: waveColor,
                    borderRadius: '4px',
                  }}
                  animate={{
                    height: [
                      '30%',
                      `${30 + Math.sin((i / waveCount) * Math.PI) * 40 * waveIntensity}%`,
                      '30%',
                    ],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: (i / waveCount) * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            {/* Wave overlay */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(
                    circle at 50% 50%,
                    ${waveColor}22 0%,
                    transparent 70%
                  )
                `,
                opacity: 0.5,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Text with wave effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textAlign: 'center',
                textShadow: `0 0 10px ${waveColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${waveColor}`,
                  `0 0 20px ${waveColor}`,
                  `0 0 10px ${waveColor}`,
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

export default Tooltip_27; 