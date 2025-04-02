"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  particleColor?: string;
  fieldColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  particleCount?: number;
  fieldIntensity?: number;
}

const Tooltip_28: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  particleColor = '#a78bfa',
  fieldColor = '#4c1d95',
  backgroundColor = '#1e1b4b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  particleCount = 20,
  fieldIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
  }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Initialize quantum particles
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.5,
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
            {/* Quantum field background */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(
                    circle at 50% 50%,
                    ${fieldColor} 0%,
                    transparent 70%
                  )
                `,
                opacity: 0.3 * fieldIntensity,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2 * fieldIntensity, 0.4 * fieldIntensity, 0.2 * fieldIntensity],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Quantum particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                style={{
                  position: 'absolute',
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particleColor,
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                }}
                animate={{
                  x: [
                    0,
                    Math.sin(particle.speed * Math.PI) * 30 * fieldIntensity,
                    0,
                  ],
                  y: [
                    0,
                    Math.cos(particle.speed * Math.PI) * 30 * fieldIntensity,
                    0,
                  ],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 3 / particle.speed,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Quantum connections */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.2,
              }}
            >
              {particles.map((p1, i) =>
                particles.slice(i + 1).map((p2, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke={particleColor}
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (i + j) * 0.1,
                    }}
                  />
                ))
              )}
            </svg>
            {/* Text with quantum effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
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

export default Tooltip_28; 