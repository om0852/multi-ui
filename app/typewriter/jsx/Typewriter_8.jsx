"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({
  messages,
  typeSpeed = 100,
  cursorColor = "#00bcd4",
  cursorWidth = "2px",
  duration = 0.5,
  className = "",
  cursorClassName = "",
  loop = false,
}) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [stage, setStage] = useState(0); // 0: Typing, 1: Erasing
  const [index, setIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (stage === 0) {
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
      if (index >= 0) {
        intervalId = setInterval(() => {
          setDisplayedText((prev) => prev.slice(0, index));
          setIndex((prev) => prev - 1);
        }, typeSpeed);
      } else {
        if (loop) {
          setStage(0);
          setMessageIndex((prev) => (prev + 1) % messages.length);
          setIndex(0);
        } else {
          clearInterval(intervalId);
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
    <div style={{ display: "flex", flexDirection: "column", fontSize: "24px", fontFamily: "monospace", lineHeight: "1.5em" }}>
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
          display: "block",
        }}
        className={cursorClassName}
      >
        |
      </motion.div>
    </div>
  );
};

export default Typewriter;
