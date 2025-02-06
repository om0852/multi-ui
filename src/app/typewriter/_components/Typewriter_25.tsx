"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  sparkColor?: string;
  boltColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
}

const Typewriter_25: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  sparkColor = "#4f46e5",
  boltColor = "#818cf8",
  fontSize = "2.5rem",
  fontFamily = "'Audiowide', cursive",
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
            initial={{ opacity: 0, scale: 2, filter: "brightness(2)" }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: "brightness(1)",
              color: sparkColor,
              textShadow: `0 0 10px ${boltColor}`,
            }}
            exit={{ opacity: 0, scale: 0, filter: "brightness(2)" }}
            style={{ 
              display: "inline-block", 
              whiteSpace: "pre",
              position: "relative",
            }}
          >
            {char}
            {/* Lightning bolts */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`bolt-${i}`}
                style={{
                  position: "absolute",
                  top: i === 0 ? "-100%" : "100%",
                  left: "50%",
                  width: "2px",
                  height: "100%",
                  background: boltColor,
                  transformOrigin: i === 0 ? "bottom" : "top",
                }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, i === 0 ? -15 : 15, 0],
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
            {/* Spark particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`spark-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: sparkColor,
                }}
                animate={{
                  x: [0, (i % 2 ? 20 : -20) * Math.cos(i * Math.PI / 2)],
                  y: [0, -20 * Math.sin(i * Math.PI / 2)],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_25; 