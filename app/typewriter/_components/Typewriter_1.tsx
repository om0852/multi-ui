'use client';
import React from 'react';

interface TypewriterProps {
  message: string;
  className?: string;
  cursorColor?: string;
}

const Typewriter_1: React.FC<TypewriterProps> = ({ message, className, cursorColor = '#ffffff' }) => {
  return (
    <span className={className} style={{ position: 'relative' }}>
      {message}
      <span 
        style={{ 
          backgroundColor: cursorColor,
          width: '2px',
          height: '1em',
          display: 'inline-block',
          marginLeft: '2px',
          animation: 'blink 1s step-end infinite'
        }}
      />
    </span>
  );
};

export default Typewriter_1;
