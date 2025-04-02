"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  particleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  waveSpeed?: number;
  particleCount?: number;
}

const Tooltip_24: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  particleColor = '#60a5fa',
  backgroundColor = '#1e3a8a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  waveSpeed = 1,
  particleCount = 30,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Initialize particles
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isVisible, particleCount]);

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
            {/* Particle container */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
              }}
            >
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  style={{
                    position: 'absolute',
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: '4px',
                    height: '4px',
                    backgroundColor: particleColor,
                    borderRadius: '50%',
                    filter: 'blur(1px)',
                  }}
                  animate={{
                    x: [
                      0,
                      Math.sin((particle.y / 100) * Math.PI * 2) * 20 * waveSpeed,
                      0,
                    ],
                    y: [
                      0,
                      Math.cos((particle.x / 100) * Math.PI * 2) * 20 * waveSpeed,
                      0,
                    ],
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 / waveSpeed,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (particle.x + particle.y) / 100,
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
                    ${particleColor}22 0%,
                    transparent 70%
                  )
                `,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3 / waveSpeed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Text with glow */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                textShadow: `0 0 10px ${particleColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${particleColor}`,
                  `0 0 20px ${particleColor}`,
                  `0 0 10px ${particleColor}`,
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

export default Tooltip_24; 