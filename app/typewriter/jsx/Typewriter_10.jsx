'use client';
import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  ${({ showcursor, cursorcolor }) =>
    showcursor &&
    css`
      display: inline-block;
      color: ${cursorcolor};
      animation: ${blink} 0.7s step-end infinite;
    `}
`;

const TypewriterText = styled.span`
  color: ${({ color }) => color};
`;

const Typewriter = ({
  messages,
  colors = ['#000'],
  typeSpeed = 100,
  cursorColor = '#000',
  showCursor = false,
  reverse = false,
  loop = true,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentMessage = messages[messageIndex];
    const isMessageComplete = charIndex === currentMessage.length;

    if (!isDeleting && charIndex <= currentMessage.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typeSpeed);
    } else {
      timeout = setTimeout(() => {
        if (isMessageComplete && reverse) {
          setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          moveToNextMessage();
        } else if (!reverse) {
          moveToNextMessage();
        }
      }, typeSpeed * 10);
    }

    function moveToNextMessage() {
      setMessageIndex((prevIndex) => {
        if (loop) {
          return (prevIndex + 1) % messages.length;
        }
        return prevIndex < messages.length - 1 ? prevIndex + 1 : prevIndex;
      });
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex, messages, typeSpeed, reverse, loop]);

  return (
    <div className={className}>
      {displayedText.split('').map((char, i) => (
        <TypewriterText key={i} color={colors[i % colors.length]}>
          {char}
        </TypewriterText>
      ))}
      {showCursor && <Cursor cursorcolor={cursorColor} showcursor={showCursor}>|</Cursor>}
    </div>
  );
};

export default Typewriter;
