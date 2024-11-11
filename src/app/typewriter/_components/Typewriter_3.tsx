"use client";
import React, { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  messages: string[]; // Array of messages to rotate through
  typingSpeed: number; // Period before starting the next message
  className?: string; // Optional class name for styling
  cursorColor?: string; // Custom cursor color
  cursorWidth?: number; // Custom cursor width in pixels
}

const Typewriter_3: React.FC<TypewriterProps> = ({
  messages,
  typingSpeed = 2000,
  className = "",
  cursorColor = "#000",
  cursorWidth = 4,
}) => {
  const [text, setText] = useState<string>(""); // Text to display
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Is deleting the current text
  const [loopNum, setLoopNum] = useState<number>(0); // Current message index
  const textRef = useRef<string>(""); // Use ref to hold the current text value

  // Function to update the text every interval
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentMessage = messages[loopNum % messages.length];

    const handleTick = () => {
      if (isDeleting) {
        textRef.current = currentMessage.substring(0, textRef.current.length - 1); // Delete character
      } else {
        textRef.current = currentMessage.substring(0, textRef.current.length + 1); // Add character
      }

      setText(textRef.current); // Update the displayed text

      let nextDelta = 200 - Math.random() * 100;

      if (isDeleting) nextDelta /= 2;

      // When typing is complete
      if (!isDeleting && textRef.current === currentMessage) {
        nextDelta = typingSpeed;
        setIsDeleting(true);
      } else if (isDeleting && textRef.current === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextDelta = 500;
      }

      // Schedule next tick
      timeoutId = setTimeout(handleTick, nextDelta);
    };

    handleTick(); // Start the animation

    // Cleanup effect when component is unmounted or changes
    return () => clearTimeout(timeoutId);
  }, [isDeleting, loopNum, messages, typingSpeed]); // Removed 'text' from dependencies

  return (
    <h1>
      <a
        href="#"
        className={`typewrite ${className}`}
        data-period={typingSpeed}
        style={{
          borderRight: `${cursorWidth}px solid ${cursorColor}`,
        }}
      >
        <span className="wrap">{text}</span>
      </a>
    </h1>
  );
};

export default Typewriter_3;
