"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_33 = ({
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
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isVisible) {
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
      case 'top': return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom': return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'left': return { right: '100%', top: '50%', transform: 'translateY(-50%)' };
      case 'right': return { left: '100%', top: '50%', transform: 'translateY(-50%)' };
      default: return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
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
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${dustColor}, 0 0 20px ${nebulaColor}`,
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
