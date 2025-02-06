"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  smokeColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
}

const Typewriter_17: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  smokeColor = "#6366f1",
  fontSize = "2.5rem",
  fontFamily = "'Rajdhani', sans-serif",
  className = "",
  delay = 1000,
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
    <div className={className} style={{ display: "inline-block", fontFamily, fontSize }}>
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
              color: "transparent"
            }}
            animate={{ 
              opacity: [0, 1, 1],
              y: [20, 0, 0],
              filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
              color: smokeColor,
              textShadow: [
                `0 0 20px ${smokeColor}`,
                `0 0 10px ${smokeColor}`,
                `0 0 5px ${smokeColor}`
              ]
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.03,
              ease: "easeOut"
            }}
            style={{
              display: "inline-block",
              position: "relative",
              whiteSpace: "pre"
            }}
          >
            {char}
            <motion.span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0.3,
                filter: "blur(8px)",
                color: smokeColor
              }}
              animate={{
                y: [-2, 2, -2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1
              }}
            >
              {char}
            </motion.span>
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
          filter: ["blur(0px)", "blur(4px)", "blur(0px)"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
        style={{
          display: "inline-block",
          width: "3px",
          height: "1.2em",
          background: smokeColor,
          marginLeft: "4px",
          borderRadius: "2px"
        }}
      />
    </div>
  );
};

export default Typewriter_17; 