"use client"
import React, { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed: number; // in milliseconds
  loop?: boolean;
  reverse?: boolean;
  className?: string;
};

const Typewriter_6: React.FC<TypewriterProps> = ({ text, speed, loop = false, reverse = false, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (reverse) {
        if (isDeleting) {
          if (index > 0) {
            setDisplayedText((prev) => prev.slice(0, index - 1));
            setIndex(index - 1);
          } else {
            setIsDeleting(false);
            if (loop) setIndex(0);
          }
        } else {
          if (index < text.length) {
            setDisplayedText((prev) => prev + text[index]);
            setIndex(index + 1);
          } else if (loop) {
            setIsDeleting(true);
          }
        }
      } else {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        } else if (loop) {
          setIndex(0);
          setDisplayedText("");
        }
      }
    };

    const intervalId = setInterval(handleTyping, speed);

    return () => clearInterval(intervalId);
  }, [index, displayedText, isDeleting, text, speed, loop, reverse]);

  return (
    <div className={className} style={{ fontFamily: "monospace", whiteSpace: "nowrap" }}>
      {displayedText}
    </div>
  );
};

export default Typewriter_6;
