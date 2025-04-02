"use client";
import React, { useEffect, useState } from 'react';

const Typewriter_4 = ({
  messages,
  cursorColor = '#000', // Default cursor color
  cursorWidth = 4, // Default cursor width
  typingSpeed = 100, // Default typing speed (in ms)
  className = "", // Optional custom className
  loop = true, // Default to looping
  cursorHeight = 4
}) => {
  const [currentText, setCurrentText] = useState(''); // Text being typed out
  const [index, setIndex] = useState(0); // Index of the current message
  const [textPos, setTextPos] = useState(0); // Current position of text

  useEffect(() => {
    if (messages.length === 0) return; // Early exit if messages array is empty

    const typewriterEffect = () => {
      const currentMessage = messages[index];
      if (!currentMessage) return;

      const currentMessageLength = currentMessage.length;

      if (textPos < currentMessageLength) {
        setCurrentText((prevText) => prevText + currentMessage[textPos]);
        setTextPos((prevPos) => prevPos + 1);
      } else if (textPos === currentMessageLength) {
        setTimeout(() => {
          if (index < messages.length - 1) {
            setIndex((prevIndex) => prevIndex + 1);
            setTextPos(1);
            setCurrentText(messages[index + 1][0]);
          } else if (loop) {
            setIndex(0);
            setTextPos(1);
            setCurrentText(messages[0][0]);
          }
        }, 500);
      }
    };
    
    const timeoutId = setTimeout(typewriterEffect, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [textPos, index, messages, typingSpeed, loop]);

  return (
    <div className={className}>
      <div
        id="typedtext"
        style={{
          display: 'flex',
          alignItems: 'end',
        }}
        dangerouslySetInnerHTML={{
          __html: currentText + `<div style="width:${cursorWidth}vh; height:auto; border-bottom: ${cursorHeight}px solid ${cursorColor};"></div>`
        }}
      />
    </div>
  );
};

export default Typewriter_4;
