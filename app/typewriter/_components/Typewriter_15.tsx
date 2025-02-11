"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  primaryColor?: string;
  secondaryColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  flickerIntensity?: number;
}

const Typewriter_15: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  primaryColor = "#ff00ff",
  secondaryColor = "#00ffff",
  fontSize = "2rem",
  fontFamily = "'Monoton', cursive",
  className = "",
  delay = 1000,
  flickerIntensity = 0.8
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
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, flickerIntensity, 1, flickerIntensity, 1],
              textShadow: [
                `0 0 7px ${primaryColor}, 0 0 10px ${primaryColor}, 0 0 21px ${primaryColor}, 0 0 42px ${secondaryColor}, 0 0 82px ${secondaryColor}, 0 0 92px ${secondaryColor}, 0 0 102px ${secondaryColor}, 0 0 151px ${secondaryColor}`,
                `0 0 7px ${primaryColor}, 0 0 10px ${primaryColor}, 0 0 21px ${primaryColor}, 0 0 42px ${secondaryColor}, 0 0 82px ${secondaryColor}, 0 0 92px ${secondaryColor}, 0 0 102px ${secondaryColor}, 0 0 151px ${secondaryColor}`,
              ],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              times: [0, 0.1, 0.2, 0.3, 1],
              delay: index * 0.1
            }}
            style={{
              display: "inline-block",
              color: primaryColor,
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          boxShadow: [
            `0 0 7px ${primaryColor}, 0 0 10px ${primaryColor}, 0 0 21px ${primaryColor}, 0 0 42px ${secondaryColor}`,
            `0 0 7px ${primaryColor}, 0 0 10px ${primaryColor}, 0 0 21px ${primaryColor}, 0 0 42px ${secondaryColor}`,
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          display: "inline-block",
          width: "0.5em",
          height: "1.2em",
          background: primaryColor,
          marginLeft: "2px",
          verticalAlign: "middle"
        }}
      />
    </div>
  );
};

export default Typewriter_15; 