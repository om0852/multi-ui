"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip_44 = ({
  text,
  position = 'top',
  children,
  prismColors = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0088ff', '#8800ff'],
  backgroundColor = '#ffffff',
  textColor = '#000000',
  delay = 0.2,
  className = '',
  prismIntensity = 1,
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
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {prismColors.map((color, index) => (
              <motion.div
                key={`prism-${index}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(
                    ${45 + (index * 60)}deg,
                    ${color}${Math.floor(40 * prismIntensity)} 0%,
                    transparent 50%
                  )`,
                  opacity: 0.5,
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                background: `linear-gradient(
                  90deg,
                  ${prismColors.join(', ')}
                )`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                mixBlendMode: 'difference',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
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

export default Tooltip_44;
