"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  fireColor?: string;
  emberColor?: string;
  smokeColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  burnIntensity?: number;
}

const Typewriter_20: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  fireColor = "#ff4d00",
  emberColor = "#ffb700",
  smokeColor = "rgba(255, 255, 255, 0.3)",
  fontSize = "2.5rem",
  fontFamily = "'Cinzel', serif",
  className = "",
  delay = 1000,
  burnIntensity = 1.2
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
              y: 20,
              scale: 1.5,
              color: fireColor,
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              color: emberColor,
              textShadow: `
                0 0 ${burnIntensity * 4}px ${fireColor},
                0 0 ${burnIntensity * 8}px ${fireColor},
                0 0 ${burnIntensity * 12}px ${emberColor}
              `,
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              scale: 0.5,
              transition: { duration: 0.3 }
            }}
            style={{
              display: "inline-block",
              position: "relative",
              whiteSpace: "pre",
            }}
          >
            {char}
            {/* Fire particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`fire-${i}`}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: fireColor,
                }}
                animate={{
                  y: [-20 * (i + 1), -40 * (i + 1)],
                  x: [0, (i - 1) * 10],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 1 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
            {/* Embers */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`ember-${i}`}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "2px",
                  height: "2px",
                  borderRadius: "50%",
                  background: emberColor,
                }}
                animate={{
                  y: [-30 * (i + 1), -60 * (i + 1)],
                  x: [(i - 0.5) * 20, (i - 0.5) * 40],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            {/* Smoke */}
            <motion.div
              style={{
                position: "absolute",
                bottom: -10,
                left: "50%",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: smokeColor,
                filter: "blur(8px)",
              }}
              animate={{
                y: [-20, -40],
                x: [-10, 10],
                opacity: [0.3, 0],
                scale: [1, 2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_20; 