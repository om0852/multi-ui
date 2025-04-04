"use client"
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Typewriter_24 = ({
  text,
  typingSpeed = 50,
  pixelColor = "#39ff14",
  glowColor = "rgba(57, 255, 20, 0.5)",
  fontSize = "2.5rem",
  fontFamily = "'Press Start 2P', cursive",
  className = "",
  delay = 1000,
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
    <div className={className} style={{ display: "inline-block", fontFamily, fontSize }}>
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              color: pixelColor,
              textShadow: `0 0 5px ${glowColor}`,
            }}
            exit={{ opacity: 0, y: 20 }}
            style={{ 
              display: "inline-block", 
              whiteSpace: "pre",
              position: "relative",
              imageRendering: "pixelated",
            }}
          >
            {char}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `repeating-linear-gradient(
                  90deg,
                  ${glowColor} 0px,
                  ${glowColor} 2px,
                  transparent 2px,
                  transparent 4px
                )`,
                opacity: 0.2,
                pointerEvents: "none",
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "0",
                width: "100%",
                height: "2px",
                background: pixelColor,
              }}
              animate={{
                opacity: [1, 0.5, 1],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 0.3,
                times: [0, 0.5, 1],
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_24;
