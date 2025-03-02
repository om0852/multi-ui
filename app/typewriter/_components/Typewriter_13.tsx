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
  spiral3dEffect?: boolean;
  perspective?: string;
}

const Typewriter_13: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  cursorColor = "#00ff00",
  textColor = "#ffffff",
  fontSize = "2rem",
  fontFamily = "'Courier New', monospace",
  glowColor = "rgba(0, 255, 0, 0.5)",
  className = "",
  delay = 1000,
  spiral3dEffect = true,
  perspective = "1000px"
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
        perspective: spiral3dEffect ? perspective : "none",
      }}
    >
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0,
              rotateX: spiral3dEffect ? -180 : 0,
              rotateY: spiral3dEffect ? -180 : 0,
              scale: 0
            }}
            animate={{ 
              opacity: 1,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }
            }}
            exit={{ 
              opacity: 0,
              rotateX: spiral3dEffect ? 180 : 0,
              rotateY: spiral3dEffect ? 180 : 0,
              scale: 0,
              transition: { duration: 0.2 }
            }}
            style={{
              display: "inline-block",
              textShadow: `0 0 8px ${glowColor}`,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          times: [0, 0.2, 0.8, 1]
        }}
        style={{
          display: "inline-block",
          width: "0.5em",
          height: "1.2em",
          background: cursorColor,
          marginLeft: "2px",
          boxShadow: `0 0 10px ${cursorColor}`,
          verticalAlign: "middle",
          transformOrigin: "center"
        }}
      />
    </div>
  );
};

export default Typewriter_13;