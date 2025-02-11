"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  neonColor?: string;
  pulseColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
}

const Typewriter_23: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  neonColor = "#ff00ff",
  pulseColor = "#ff99ff",
  fontSize = "2.5rem",
  fontFamily = "'Pacifico', cursive",
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
            initial={{ opacity: 0, scale: 2 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              color: neonColor,
              textShadow: [
                `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 20px ${pulseColor}`,
                `0 0 2px ${neonColor}, 0 0 5px ${neonColor}, 0 0 10px ${pulseColor}`,
                `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 20px ${pulseColor}`,
              ],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "120%",
                height: "120%",
                border: `2px solid ${pulseColor}`,
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_23; 