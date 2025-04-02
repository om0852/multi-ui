"use client"
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  inkColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  strokeWidth?: number;
  inkSpread?: number;
}

const Typewriter_16: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  inkColor = "#1d4ed8",
  fontSize = "2rem",
  fontFamily = "'Caveat', cursive",
  className = "",
  delay = 1000,
  strokeWidth = 2,
  inkSpread = 3
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
        color: inkColor,
        WebkitTextStroke: `${strokeWidth}px ${inkColor}`,
        WebkitTextFillColor: "transparent",
      }}
    >
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0,
              scale: 0.5,
              filter: "blur(4px)",
              WebkitTextStroke: `0px ${inkColor}`,
              WebkitTextFillColor: inkColor,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              WebkitTextStroke: `${strokeWidth}px ${inkColor}`,
              WebkitTextFillColor: "transparent",
              transition: {
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 0.5,
              filter: "blur(4px)",
              transition: { duration: 0.2 }
            }}
            style={{
              display: "inline-block",
              position: "relative",
            }}
          >
            <motion.span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                WebkitTextStroke: "0",
                WebkitTextFillColor: inkColor,
                opacity: 0.3,
                filter: `blur(${inkSpread}px)`,
              }}
            >
              {char}
            </motion.span>
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.5, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          display: "inline-block",
          width: "0.15em",
          height: "1.2em",
          background: inkColor,
          marginLeft: "2px",
          verticalAlign: "middle",
          borderRadius: "2px",
          filter: `blur(${inkSpread/2}px)`,
        }}
      />
    </div>
  );
};

export default Typewriter_16; 