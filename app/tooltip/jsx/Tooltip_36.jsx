"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_36 = ({
  text,
  position = 'top',
  children,
  plasmaColor = '#ec4899',
  rippleColor = '#f472b6',
  backgroundColor = '#831843',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  rippleIntensity = 1,
  rippleCount = 5,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const newRipples = Array.from({ length: rippleCount }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 20,
        y: 50 + (Math.random() - 0.5) * 20,
        scale: 0.5 + Math.random() * 0.5,
      }));
      setRipples(newRipples);
    } else {
      setRipples([]);
    }
  }, [isVisible, rippleCount]);

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
            <motion.div
              style={{
                position: 'absolute',
                inset: -20,
                background: `radial-gradient(circle at 50% 50%, ${plasmaColor}66 0%, transparent 70%)`,
                opacity: 0.3 * rippleIntensity,
                filter: 'blur(8px)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2 * rippleIntensity, 0.4 * rippleIntensity, 0.2 * rippleIntensity] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                style={{
                  position: 'absolute',
                  left: `${ripple.x}%`,
                  top: `${ripple.y}%`,
                  width: '100px',
                  height: '100px',
                  background: `radial-gradient(circle at center, ${rippleColor}66 0%, transparent 70%)`,
                  transform: `translate(-50%, -50%) scale(${ripple.scale})`,
                  opacity: 0.3 * rippleIntensity,
                  filter: 'blur(4px)',
                }}
                animate={{ scale: [ripple.scale, ripple.scale * 2, ripple.scale], opacity: [0.2 * rippleIntensity, 0.4 * rippleIntensity, 0.2 * rippleIntensity] }}
                transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                style={{
                  position: 'absolute',
                  inset: -10,
                  background: `linear-gradient(${120 * i}deg, ${plasmaColor}00 0%, ${plasmaColor}33 45%, ${plasmaColor}00 55%)`,
                  opacity: 0.3 * rippleIntensity,
                }}
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `0 0 10px ${plasmaColor}, 0 0 20px ${rippleColor}`,
              }}
              animate={{ textShadow: [`0 0 10px ${plasmaColor}, 0 0 20px ${rippleColor}`, `0 0 15px ${plasmaColor}, 0 0 30px ${rippleColor}`, `0 0 10px ${plasmaColor}, 0 0 20px ${rippleColor}`] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_36;
