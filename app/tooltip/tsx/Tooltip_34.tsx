"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  streamColor?: string;
  dataColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  streamSpeed?: number;
  streamCount?: number;
}

const Tooltip_34: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  streamColor = '#22c55e',
  dataColor = '#86efac',
  backgroundColor = '#064e3b',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  streamSpeed = 1,
  streamCount = 15,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataStreams, setDataStreams] = useState<Array<{
    id: number;
    x: number;
    chars: string[];
  }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Generate random data streams
      const chars = '01'.split('');
      const newStreams = Array.from({ length: streamCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        chars: Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]),
      }));
      setDataStreams(newStreams);
    } else {
      setDataStreams([]);
    }
  }, [isVisible, streamCount]);

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
              borderRadius: '0.5rem',
              overflow: 'hidden',
            }}
          >
            {/* Data streams */}
            {dataStreams.map((stream) => (
              <motion.div
                key={stream.id}
                style={{
                  position: 'absolute',
                  left: `${stream.x}%`,
                  top: '-20%',
                  color: streamColor,
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  lineHeight: '10px',
                  opacity: 0.5,
                  writingMode: 'vertical-rl',
                }}
                animate={{
                  y: ['0%', '120%'],
                }}
                transition={{
                  duration: 2 / streamSpeed,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                }}
              >
                {stream.chars.map((char, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      color: [streamColor, dataColor, streamColor],
                    }}
                    transition={{
                      duration: 1 / streamSpeed,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
            {/* Data flow overlay */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(
                    180deg,
                    ${backgroundColor}00 0%,
                    ${backgroundColor}ff 50%,
                    ${backgroundColor}00 100%
                  )
                `,
                opacity: 0.8,
              }}
              animate={{
                backgroundPosition: ['0% 0%', '0% 200%'],
              }}
              transition={{
                duration: 2 / streamSpeed,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Text with data effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                fontFamily: 'monospace',
                textShadow: `0 0 10px ${streamColor}`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${streamColor}`,
                  `0 0 20px ${dataColor}`,
                  `0 0 10px ${streamColor}`,
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

export default Tooltip_34; 