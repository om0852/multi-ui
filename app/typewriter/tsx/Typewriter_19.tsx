"use client"
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  primaryColor?: string;
  glitchColor1?: string;
  glitchColor2?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  glitchIntensity?: number;
}

const Typewriter_19: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  primaryColor = "#00ff00",
  glitchColor1 = "#ff00ff",
  glitchColor2 = "#00ffff",
  fontSize = "2.5rem",
  fontFamily = "'Share Tech Mono', monospace",
  className = "",
  delay = 1000,
  glitchIntensity = 1.5
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
      }}
    >
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0,
              x: -20,
              filter: "blur(10px)",
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              color: primaryColor,
              textShadow: `
                ${glitchIntensity}px 0 ${glitchColor1},
                -${glitchIntensity}px 0 ${glitchColor2}
              `,
            }}
            exit={{ 
              opacity: 0,
              x: 20,
              filter: "blur(10px)",
              transition: { duration: 0.2 }
            }}
            style={{
              display: "inline-block",
              position: "relative",
              whiteSpace: "pre",
            }}
          >
            {char}
            <motion.span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                color: glitchColor1,
                clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              }}
              animate={{
                x: [-2, 2, -2],
                y: [-1, 1, -1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              {char}
            </motion.span>
            <motion.span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                color: glitchColor2,
                clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              }}
              animate={{
                x: [2, -2, 2],
                y: [1, -1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              {char}
            </motion.span>
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(
                  transparent 0%,
                  rgba(32, 32, 32, 0.2) 50%,
                  transparent 100%
                )`,
                backgroundSize: "100% 4px",
                zIndex: 1,
                pointerEvents: "none",
              }}
              animate={{
                backgroundPosition: ["0 0", "0 -100%"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_19; 