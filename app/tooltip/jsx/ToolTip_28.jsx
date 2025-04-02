"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_28 = ({
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
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isVisible) {
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, delay }}
            style={{
              ...getPosition(),
              position: 'absolute',
              padding: '0.75rem 1.5rem',
              backgroundColor,
              color: textColor,
              whiteSpace: 'nowrap',
              zIndex: 50,
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 50% 50%, ${fieldColor} 0%, transparent 70%)`,
                opacity: 0.3 * fieldIntensity,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2 * fieldIntensity, 0.4 * fieldIntensity, 0.2 * fieldIntensity] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
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
                  x: [0, Math.sin(particle.speed * Math.PI) * 30 * fieldIntensity, 0],
                  y: [0, Math.cos(particle.speed * Math.PI) * 30 * fieldIntensity, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 2, 1],
                }}
                transition={{ duration: 3 / particle.speed, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${particleColor}`,
              }}
              animate={{ textShadow: [`0 0 10px ${particleColor}`, `0 0 20px ${particleColor}`, `0 0 10px ${particleColor}`] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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
