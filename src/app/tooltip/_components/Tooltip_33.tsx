"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  dustColor?: string;
  nebulaColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  dustIntensity?: number;
  dustCount?: number;
}

const Tooltip_33: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  dustColor = '#fcd34d',
  nebulaColor = '#7c3aed',
  backgroundColor = '#1e1b4b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  dustIntensity = 1,
  dustCount = 30,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Initialize cosmic dust particles
      const newParticles = Array.from({ length: dustCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        rotation: Math.random() * 360,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isVisible, dustCount]);

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
            {/* Nebula background */}
            <motion.div
              style={{
                position: 'absolute',
                inset: -20,
                background: `
                  radial-gradient(
                    circle at 50% 50%,
                    ${nebulaColor}66 0%,
                    transparent 70%
                  )
                `,
                opacity: 0.3 * dustIntensity,
                filter: 'blur(8px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2 * dustIntensity, 0.4 * dustIntensity, 0.2 * dustIntensity],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Cosmic dust particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                style={{
                  position: 'absolute',
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: dustColor,
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                  transform: `rotate(${particle.rotation}deg)`,
                }}
                animate={{
                  x: [
                    0,
                    Math.sin(particle.rotation * Math.PI / 180) * 30 * dustIntensity,
                    0,
                  ],
                  y: [
                    0,
                    Math.cos(particle.rotation * Math.PI / 180) * 30 * dustIntensity,
                    0,
                  ],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                  rotate: [particle.rotation, particle.rotation + 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random(),
                }}
              />
            ))}
            {/* Star trails */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '20px',
                  height: '1px',
                  background: `linear-gradient(
                    90deg,
                    ${dustColor}00,
                    ${dustColor}66,
                    ${dustColor}00
                  )`,
                  opacity: 0.3 * dustIntensity,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.1 * dustIntensity, 0.3 * dustIntensity, 0.1 * dustIntensity],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                }}
              />
            ))}
            {/* Text with cosmic glow */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `
                  0 0 10px ${dustColor},
                  0 0 20px ${nebulaColor}
                `,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${dustColor}, 0 0 20px ${nebulaColor}`,
                  `0 0 15px ${dustColor}, 0 0 30px ${nebulaColor}`,
                  `0 0 10px ${dustColor}, 0 0 20px ${nebulaColor}`,
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

export default Tooltip_33; 