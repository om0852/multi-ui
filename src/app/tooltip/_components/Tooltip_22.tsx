"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  baseColor?: string;
  shimmerColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  holographicIntensity?: number;
}

const Tooltip_22: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  baseColor = '#7dd3fc',
  shimmerColor = '#ffffff',
  backgroundColor = '#0c4a6e',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  holographicIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const updateMousePosition = (e: MouseEvent) => {
        const rect = tooltipRef.current?.getBoundingClientRect();
        if (rect) {
          setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }
      };

      window.addEventListener('mousemove', updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [isVisible]);

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
            ref={tooltipRef}
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
              backdropFilter: 'blur(8px)',
              border: `1px solid ${baseColor}33`,
            }}
          >
            {/* Holographic gradient */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(
                  circle at ${mousePosition.x}% ${mousePosition.y}%,
                  ${shimmerColor}33 0%,
                  ${baseColor}33 25%,
                  transparent 50%
                )`,
                opacity: 0.7 * holographicIntensity,
              }}
              animate={{
                opacity: [0.7 * holographicIntensity, 0.9 * holographicIntensity, 0.7 * holographicIntensity],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Rainbow lines */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(
                    90deg,
                    ${baseColor}00 0%,
                    ${baseColor}22 2%,
                    ${baseColor}00 4%
                  )
                `,
                opacity: 0.5,
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Text with holographic effect */}
            <motion.span
              style={{
                position: 'relative',
                display: 'block',
                textShadow: `
                  0 0 10px ${baseColor},
                  0 0 20px ${baseColor}66,
                  0 0 30px ${baseColor}33
                `,
                mixBlendMode: 'screen',
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${baseColor}, 0 0 20px ${baseColor}66, 0 0 30px ${baseColor}33`,
                  `0 0 15px ${baseColor}, 0 0 25px ${baseColor}66, 0 0 35px ${baseColor}33`,
                  `0 0 10px ${baseColor}, 0 0 20px ${baseColor}66, 0 0 30px ${baseColor}33`,
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

export default Tooltip_22; 