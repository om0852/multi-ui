"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  messages: string[];
  typeSpeed?: number;
  cursorColor?: string;
  cursorWidth?: string;
  duration?: number;
  className?: string;
  cursorClassName?: string;
  loop?: boolean; // New prop for looping
}

const Typewriter_9: React.FC<TypewriterProps> = ({
  messages,
  typeSpeed = 100,
  cursorColor = "#0b00d4",
  cursorWidth = "6px",
  duration = 0.5,
  className = "",
  cursorClassName = "",
  loop = false, // Set default loop to false
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [stage, setStage] = useState<number>(0); // 0: Typing, 1: Erasing
  const [index, setIndex] = useState<number>(0); // Tracks the current character index
  const [messageIndex, setMessageIndex] = useState<number>(0); // Tracks the current message

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;

    if (stage === 0) {
      // Typing the text vertically
      if (index < messages[messageIndex].length) {
        intervalId = setInterval(() => {
          setDisplayedText((prev) => [...prev, messages[messageIndex].charAt(index)]);
          setIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        setStage(1);
        setIndex(messages[messageIndex].length - 1);
      }
    } else if (stage === 1) {
      // Erasing the text vertically
      if (index >= 0) {
        intervalId = setInterval(() => {
          setDisplayedText((prev) => prev.slice(0, index));
          setIndex((prev) => prev - 1);
        }, typeSpeed);
      } else {
        // Check for loop condition
        if (loop) {
          setStage(0);
          setMessageIndex((prev) => (prev + 1) % messages.length); // Move to next message
          setIndex(0);
        } else {
          clearInterval(intervalId); // Stop animation if not looping
        }
      }
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [stage, index, messages, messageIndex, typeSpeed, loop]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, duration * 1000);
    return () => clearInterval(cursorBlink);
  }, [duration]);

  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "24px", fontFamily: "monospace", lineHeight: "1.5em", justifyContent: "center" }}>
      {/* Typing Text Vertically */}
      <div className={className}>
        {displayedText.map((char, i) => (
          <span key={i} style={{ display: "block" }}>{char}</span>
        ))}
      </div>

      {/* Vertical Cursor */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isCursorVisible ? 1 : 0 }}
        transition={{ duration }}
        style={{
          color: cursorColor,
          width: cursorWidth,
          display: "block", // Make cursor appear vertically as well
        }}
        className={cursorClassName}
      >
        _
      </motion.div>
    </div>
  );
};

export default Typewriter_9;