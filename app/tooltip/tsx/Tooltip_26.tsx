"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  crystalColor?: string;
  highlightColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  refractionIntensity?: number;
}

const Tooltip_26: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  crystalColor = '#e2e8f0',
  highlightColor = '#ffffff',
  backgroundColor = '#1e293b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  refractionIntensity = 1,
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
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${crystalColor}22`,
            }}
          >
            {/* Crystal facets */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  inset: -20,
                  background: `
                    linear-gradient(
                      ${45 + i * 72}deg,
                      ${crystalColor}00 0%,
                      ${crystalColor}${Math.floor(20 * refractionIntensity)} 45%,
                      ${crystalColor}00 55%
                    )
                  `,
                  transform: `rotate(${i * 72}deg)`,
                  opacity: 0.5,
                }}
                animate={{
                  transform: [
                    `rotate(${i * 72}deg)`,
                    `rotate(${i * 72 + 360}deg)`,
                  ],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {/* Dynamic highlight */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(
                    circle at ${mousePosition.x}% ${mousePosition.y}%,
                    ${highlightColor}44 0%,
                    ${highlightColor}00 50%
                  )
                `,
                mixBlendMode: 'overlay',
              }}
            />
            {/* Prismatic edge */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(
                    to right,
                    #ff000022,
                    #00ff0022,
                    #0000ff22
                  )
                `,
                mixBlendMode: 'color',
                opacity: 0.3 * refractionIntensity,
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Text with crystal effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                textShadow: `
                  0 0 10px ${highlightColor},
                  0 0 20px ${highlightColor}66
                `,
                mixBlendMode: 'difference',
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${highlightColor}, 0 0 20px ${highlightColor}66`,
                  `0 0 15px ${highlightColor}, 0 0 30px ${highlightColor}66`,
                  `0 0 10px ${highlightColor}, 0 0 20px ${highlightColor}66`,
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

export default Tooltip_26; 