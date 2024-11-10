"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  messages: string[];       // Array of messages to type out
  typeSpeed?: number;       // Typing speed in milliseconds
  cursorColor?: string;     // Cursor color
  className?: string;       // Text class name
  duration?: number;        // Cursor blink duration
  loop?: boolean;           // Loop the typing animation for all messages
  reverse?: boolean;        // Reverse typing animation for each message
}

const Typewriter_7: React.FC<TypewriterProps> = ({
  messages,
  typeSpeed = 100,
  cursorColor = '#00bcd4',
  className = '',
  duration = 0.5,
  loop = false,
  reverse = false
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [isTypingForward, setIsTypingForward] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let index = 0;
    let typingDirection = isTypingForward ? 1 : -1;

    const type = () => {
      setDisplayedText((prev) => {
        const nextText = currentMessage.slice(0, index);
        return nextText;
      });

      if (isTypingForward && index < currentMessage.length) {
        index += typingDirection;
      } else if (!isTypingForward && index > 0) {
        index += typingDirection;
      } else {
        if (reverse && !isTypingForward && index === 0) {
          setMessageIndex((prevIndex) =>
            prevIndex + 1 < messages.length ? prevIndex + 1 : (loop ? 0 : prevIndex)
          );
          setIsTypingForward(true);
        } else if (reverse && isTypingForward) {
          setIsTypingForward(false);
        } else {
          setMessageIndex((prevIndex) =>
            prevIndex + 1 < messages.length ? prevIndex + 1 : (loop ? 0 : prevIndex)
          );
        }
      }
    };

    const typeInterval = setInterval(type, typeSpeed);

    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, duration * 1000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorBlink);
    };
  }, [messages, messageIndex, typeSpeed, loop, reverse, duration, isTypingForward]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'monospace' }}>
      {/* Left cursor */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isCursorVisible ? 1 : 0 }}
        transition={{ duration }}
        style={{ marginRight: '5px', color: cursorColor }}
      >
        |
      </motion.div>

      {/* Typing text */}
      <span className={className}>{displayedText}</span>

      {/* Right cursor */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isCursorVisible ? 1 : 0 }}
        transition={{ duration }}
        style={{ marginLeft: '5px', color: cursorColor }}
      >
        |
      </motion.div>
    </div>
  );
};

export default Typewriter_7;
