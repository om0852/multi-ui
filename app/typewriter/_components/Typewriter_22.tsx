"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  holoColor?: string;
  scanlineColor?: string;
  glitchColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  holoIntensity?: number;
}

const Typewriter_22: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  holoColor = "#00ffff",
  scanlineColor = "rgba(0, 255, 255, 0.1)",
  glitchColor = "#ff00ff",
  fontSize = "2.5rem",
  fontFamily = "'Rajdhani', sans-serif",
  className = "",
  delay = 1000,
  holoIntensity = 1.2
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
        perspective: "1000px",
      }}
    >
      <AnimatePresence mode="popLayout">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0,
              rotateX: 90,
              filter: "blur(10px)",
            }}
            animate={{ 
              opacity: [0, 1, 0.8],
              rotateX: [90, 0, 0],
              filter: ["blur(10px)", "blur(0px)", "blur(1px)"],
              color: holoColor,
              textShadow: `
                0 0 ${holoIntensity * 5}px ${holoColor},
                0 0 ${holoIntensity * 10}px ${glitchColor}
              `,
            }}
            exit={{ 
              opacity: 0,
              rotateX: -90,
              filter: "blur(10px)",
              transition: { duration: 0.3 }
            }}
            style={{
              display: "inline-block",
              position: "relative",
              whiteSpace: "pre",
              transformStyle: "preserve-3d",
            }}
          >
            {char}
            {/* Hologram layers */}
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={`holo-${i}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: holoColor,
                  opacity: 0.3,
                  transform: `translateZ(${(i + 1) * -5}px)`,
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  filter: [
                    "blur(0px)",
                    `blur(${(i + 1) * 2}px)`,
                    "blur(0px)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {char}
              </motion.span>
            ))}
            {/* Scanlines */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `repeating-linear-gradient(
                  0deg,
                  ${scanlineColor} 0%,
                  ${scanlineColor} 1px,
                  transparent 1px,
                  transparent 2px
                )`,
                opacity: 0.5,
                pointerEvents: "none",
              }}
              animate={{
                backgroundPosition: ["0 0", "0 -100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Glitch effect */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: glitchColor,
                mixBlendMode: "overlay",
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter_22; 