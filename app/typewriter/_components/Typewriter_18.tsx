"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  liquidColor?: string;
  rippleColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  flowIntensity?: number;
}

const Typewriter_18: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  liquidColor = "#4f46e5",
  rippleColor = "rgba(79, 70, 229, 0.3)",
  fontSize = "2.5rem",
  fontFamily = "'Quicksand', sans-serif",
  className = "",
  delay = 1000,
  flowIntensity = 1.2
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = Array.isArray(text) ? text : [text];

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
      }}
    >
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0,
              y: 50,
              scale: 0,
              color: "transparent"
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              color: liquidColor,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            exit={{ 
              opacity: 0,
              y: 20,
              scale: 0,
              transition: { duration: 0.3 }
            }}
            style={{
              display: "inline-block",
              position: "relative",
              whiteSpace: "pre",
              filter: `drop-shadow(0 0 8px ${rippleColor})`,
            }}
          >
            {char}
            <motion.div
              style={{
                position: "absolute",
                bottom: -2,
                left: 0,
                right: 0,
                height: "2px",
                background: liquidColor,
                transformOrigin: "center",
              }}
              animate={{
                scaleX: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                y: [0, -flowIntensity, flowIntensity, 0],
              }}
              transition={{
                duration: 2,
                times: [0, 0.4, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 0.5
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: rippleColor,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.6, 0, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: index * 0.1
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_18; 