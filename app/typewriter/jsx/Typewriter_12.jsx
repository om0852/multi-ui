"use client"
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
};

const Typewriter_12 = ({
  text,
  typingSpeed = 50,
  cursorColor = "#00ff00",
  textColor = "#ffffff",
  fontSize = "2rem",
  fontFamily = "'Courier New', monospace",
  glowColor = "rgba(0, 255, 0, 0.5)",
  className = "",
  delay = 1000,
  animationStyle = "bounce",
  textAlign = "left",
  letterSpacing = "normal",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    let timeout;
    
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
            variants={animationVariants[animationStyle]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-block",
              textShadow: `0 0 8px ${glowColor}`,
              whiteSpace: "pre",
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
