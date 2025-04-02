"use client"
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  text: string | string[];
  typingSpeed?: number;
  crystalColor?: string;
  glowColor?: string;
  refractionColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  delay?: number;
  crystalGrowth?: number;
}

const Typewriter_21: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  crystalColor = "#a5f3fc",
  glowColor = "rgba(165, 243, 252, 0.5)",
  refractionColor = "#e0f2fe",
  fontSize = "2.5rem",
  fontFamily = "'Orbitron', sans-serif",
  className = "",
  delay = 1000,
  crystalGrowth = 1.2
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
              scale: 0,
              rotate: 45,
              filter: "brightness(2)",
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "brightness(1)",
              color: crystalColor,
              textShadow: `
                0 0 ${crystalGrowth * 5}px ${glowColor},
                0 0 ${crystalGrowth * 10}px ${crystalColor}
              `,
            }}
            exit={{ 
              opacity: 0,
              scale: 0,
              rotate: -45,
              filter: "brightness(2)",
              transition: { duration: 0.3 }
            }}
            style={{
              display: "inline-block",
              position: "relative",
              whiteSpace: "pre",
            }}
          >
            {char}
            {/* Crystal facets */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`facet-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  height: "100%",
                  border: `2px solid ${refractionColor}`,
                  opacity: 0.3,
                  transformOrigin: "center",
                }}
                initial={{
                  transform: `translate(-50%, -50%) rotate(${90 * i}deg) scale(0.5)`,
                }}
                animate={{
                  transform: [
                    `translate(-50%, -50%) rotate(${90 * i}deg) scale(0.5)`,
                    `translate(-50%, -50%) rotate(${90 * i + 45}deg) scale(${1 + crystalGrowth * 0.2})`,
                    `translate(-50%, -50%) rotate(${90 * i}deg) scale(0.5)`,
                  ],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            {/* Light reflections */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(
                  45deg,
                  transparent 0%,
                  ${glowColor} 50%,
                  transparent 100%
                )`,
                opacity: 0.5,
              }}
              animate={{
                backgroundPosition: ["200% 200%", "-100% -100%"],
              }}
              transition={{
                duration: 3,
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

export default Typewriter_21; 