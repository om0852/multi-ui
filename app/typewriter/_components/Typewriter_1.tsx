'use client';
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  message: string;
  className?: string;
  style?: React.CSSProperties;
}

const Typewriter_1: React.FC<TypewriterProps> = ({ 
  message, 
  className,
  style 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, message]);

  return (
    <div className={className} style={style}>
      {displayText}
      <span 
        className="inline-block w-[2px] h-[1em] ml-[2px] bg-current animate-blink"
        aria-hidden="true"
      />
    </div>
  );
};

export default Typewriter_1;
