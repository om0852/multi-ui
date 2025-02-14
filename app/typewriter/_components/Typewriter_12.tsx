"use client"
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  cursorColor?: string;
  textColor?: string;
  fontSize?: string;
  fontFamily?: string;
  glowColor?: string;
  className?: string;
  delay?: number;
  animationStyle?: 'bounce' | 'fade' | 'scale' | 'slide' | 'wave' | 'rotate' | 'flip' | 'shake' | 'rainbow' | 'glitch';
  textAlign?: 'left' | 'center' | 'right';
  letterSpacing?: string;
}

const animationVariants = {
  bounce: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },
  wave: {
    initial: { y: 0, opacity: 0 },
    animate: (i: number) => ({
      y: [-10, 0, -10],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 1.5,
          delay: i * 0.1,
        },
      },
    }),
    exit: { y: 0, opacity: 0 },
  },
  rotate: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
  },
  flip: {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  shake: {
    initial: { x: 0, opacity: 0 },
    animate: (i: number) => ({
      x: [-2, 2, -2, 2, 0],
      opacity: 1,
      transition: {
        x: {
          repeat: Infinity,
          duration: 0.5,
          delay: i * 0.05,
        },
      },
    }),
    exit: { x: 0, opacity: 0 },
  },
  rainbow: {
    initial: { opacity: 0 },
    animate: (i: number) => ({
      opacity: 1,
      color: [
        '#ff0000',
        '#ff7f00',
        '#ffff00',
        '#00ff00',
        '#0000ff',
        '#4b0082',
        '#8f00ff'
      ][i % 7],
      transition: {
        color: {
          repeat: Infinity,
          duration: 2,
          delay: i * 0.1,
        },
      },
    }),
    exit: { opacity: 0 },
  },
  glitch: {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: (i: number) => ({
      x: [-2, 2, -2, 0],
      y: [2, -2, 2, 0],
      opacity: 1,
      filter: [
        'none',
        'blur(1px)',
        'none',
        'blur(2px)',
        'none'
      ],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        delay: i * 0.05,
      },
    }),
    exit: { x: 0, y: 0, opacity: 0 },
  },
};

const Typewriter_12: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  cursorColor = "#00ff00",
  textColor = "#ffffff",
  fontSize = "2rem",
  fontFamily = "'Courier New', monospace",
  glowColor = "rgba(0, 255, 0, 0.5)",
  className = "",
  delay = 1000,
  animationStyle = 'bounce',
  textAlign = 'left',
  letterSpacing = 'normal',
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = useMemo(() => Array.isArray(text) ? text : [text], [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, texts, typingSpeed, delay, isTyping]);

  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        fontFamily,
        fontSize,
        color: textColor,
        textAlign,
        letterSpacing,
      }}
    >
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={animationVariants[animationStyle]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-block",
              textShadow: `0 0 8px ${glowColor}`,
              whiteSpace: 'pre',
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          times: [0, 0.2, 0.8, 1],
        }}
        style={{
          display: "inline-block",
          width: "0.5em",
          height: "1.2em",
          background: cursorColor,
          marginLeft: "2px",
          boxShadow: `0 0 10px ${cursorColor}`,
          verticalAlign: "middle",
        }}
      />
    </div>
  );
};

export default Typewriter_12; 