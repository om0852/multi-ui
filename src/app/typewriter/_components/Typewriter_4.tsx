"use client";
import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  messages: string[]; // Array of messages to display
  cursorColor?: string; // Cursor color
  cursorWidth?: number; // Cursor width
  cursorHeight?: number; // Cursor width
  typingSpeed?: number; // Typing speed (in ms)
  scrollAt?: number; // Scroll at this line
  className?: string; // Custom className for styling
  loop?: boolean; // Whether to loop the typing effect
}

const Typewriter_4: React.FC<TypewriterProps> = ({
  messages,
  cursorColor = '#000', // Default cursor color
  cursorWidth = 4, // Default cursor width
  typingSpeed = 100, // Default typing speed (in ms)
  scrollAt = 20, // Default scroll position
  className = "", // Optional custom className
  loop = true, // Default to false (no looping)
  cursorHeight=4
}) => {
  const [currentText, setCurrentText] = useState<string>(''); // Text being typed out
  const [index, setIndex] = useState<number>(0); // Index of the current message
  const [textPos, setTextPos] = useState<number>(0); // Current position of text

  useEffect(() => {
    if (messages.length === 0) return; // Early exit if messages array is empty

    let timeoutId: NodeJS.Timeout;

    const typewriterEffect = () => {
      // Check if the current message exists before trying to access it
      const currentMessage = messages[index];
      if (!currentMessage) return; // Prevent errors if currentMessage is undefined

      const currentMessageLength = currentMessage.length;

      if (textPos < currentMessageLength) {
        setCurrentText((prevText) => prevText + currentMessage[textPos]);
        setTextPos((prevPos) => prevPos + 1);
      } else if (textPos === currentMessageLength) {
        setTimeout(() => {
          if (index < messages.length - 1) {
            setIndex((prevIndex) => prevIndex + 1);
            setTextPos(1);
            setCurrentText(messages[index+1][0]);
          } else if (loop) {
            // Restart the typing effect from the first message if loop is true
            setIndex(0);
            setTextPos(1);
            setCurrentText(messages[0][0]);
          }
        }, 500); // Delay before typing the next message
      }
    };

    timeoutId = setTimeout(typewriterEffect, typingSpeed);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [textPos, index, messages, typingSpeed, loop]);

  return (
    <div className={className}>
      <div
        id="typedtext"
        style={{
          display: 'flex',
          alignItems:"end",
        }}
        dangerouslySetInnerHTML={{
          __html: currentText + `<div style="width:${cursorWidth}vh; height:auto; border-bottom: ${cursorHeight}px solid ${cursorColor};"></div>`, // Dynamic cursor width
        }}
      />
    </div>
  );
};

export default Typewriter_4;
