"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  runeColor?: string;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
  className?: string;
  runeIntensity?: number;
}

const Tooltip_31: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
  runeColor = '#f472b6',
  glowColor = '#fb7185',
  backgroundColor = '#831843',
  textColor = '#ffffff',
  delay = 0.2,
  className = '',
  runeIntensity = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [runes, setRunes] = useState<Array<{ char: string; x: number; y: number }>>([]);

  // Ancient rune characters
  const runeChars = '᚛᚜ᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜᚝᚞᚟ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯ';

  useEffect(() => {
    if (isVisible) {
      // Generate random rune positions
      const newRunes = Array.from({ length: 20 }, () => ({
        char: runeChars[Math.floor(Math.random() * runeChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setRunes(newRunes);
    } else {
      setRunes([]);
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
              border: `2px solid ${runeColor}44`,
            }}
          >
            {/* Mystic circle */}
            <motion.div
              style={{
                position: 'absolute',
                inset: -20,
                border: `2px solid ${runeColor}22`,
                borderRadius: '50%',
                opacity: 0.5 * runeIntensity,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                opacity: [0.3 * runeIntensity, 0.6 * runeIntensity, 0.3 * runeIntensity],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Floating runes */}
            {runes.map((rune, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${rune.x}%`,
                  top: `${rune.y}%`,
                  color: runeColor,
                  fontSize: '12px',
                  fontFamily: 'serif',
                  textShadow: `0 0 5px ${glowColor}`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.2, 0.8 * runeIntensity, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              >
                {rune.char}
              </motion.div>
            ))}
            {/* Magical glow */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(
                    circle at 50% 50%,
                    ${glowColor}33 0%,
                    transparent 70%
                  )
                `,
                opacity: 0.3 * runeIntensity,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2 * runeIntensity, 0.4 * runeIntensity, 0.2 * runeIntensity],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Text with mystical effect */}
            <motion.span
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                textShadow: `
                  0 0 10px ${glowColor},
                  0 0 20px ${runeColor}
                `,
              }}
              animate={{
                textShadow: [
                  `0 0 10px ${glowColor}, 0 0 20px ${runeColor}`,
                  `0 0 15px ${glowColor}, 0 0 30px ${runeColor}`,
                  `0 0 10px ${glowColor}, 0 0 20px ${runeColor}`,
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

export default Tooltip_31; 