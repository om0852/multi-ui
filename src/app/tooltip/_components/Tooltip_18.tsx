"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  magnetColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  magnetStrength?: number;
}

const Tooltip_18: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  magnetColor = '#6366f1',
  backgroundColor = '#1a1a1a',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  magnetStrength = 30,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

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
        return { opacity: 0, y: 10 };
      case 'bottom':
        return { opacity: 0, y: -10 };
      case 'left':
        return { opacity: 0, x: 10 };
      case 'right':
        return { opacity: 0, x: -10 };
      default:
        return { opacity: 0, y: 10 };
    }
  };

  useEffect(() => {
    if (!isVisible || !tooltipRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const tooltip = tooltipRef.current;
      if (!tooltip) return;

      const rect = tooltip.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 100) {
        const moveX = (deltaX / distance) * magnetStrength;
        const moveY = (deltaY / distance) * magnetStrength;
        setMousePosition({ x: moveX, y: moveY });
      } else {
        setMousePosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible, magnetStrength]);

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
            animate={{ 
              opacity: 1,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            exit={getInitialAnimation()}
            transition={{ 
              duration: 0.3,
              delay,
              type: "spring",
              damping: 15,
            }}
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
              boxShadow: `0 0 20px ${magnetColor}33`,
            }}
          >
            {/* Magnetic field effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: -20,
                background: `radial-gradient(circle at 50% 50%, ${magnetColor}22 0%, transparent 70%)`,
                borderRadius: '1rem',
                pointerEvents: 'none',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Magnetic particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '2px',
                  backgroundColor: magnetColor,
                  borderRadius: '50%',
                }}
                animate={{
                  x: [
                    Math.cos(i * Math.PI / 4) * 30,
                    Math.cos(i * Math.PI / 4 + Math.PI) * 30,
                  ],
                  y: [
                    Math.sin(i * Math.PI / 4) * 30,
                    Math.sin(i * Math.PI / 4 + Math.PI) * 30,
                  ],
                  opacity: [0.8, 0.2],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1,
                }}
              />
            ))}
            <span style={{ position: 'relative', zIndex: 1 }}>{text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip_18; 