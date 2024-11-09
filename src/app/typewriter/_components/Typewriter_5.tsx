"use client";
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type TypewriterProps = {
  text: string;
  fontSize?: string;
  cursorColor?: string;
  cursorWidth?: string;
  reverse?: boolean;
  loop?: boolean;
  speed?: number; // in seconds, default 1
};

const typingAnimation = (reverse: boolean, speed: number) => keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const reverseAnimation = (speed: number) => keyframes`
  from { width: 100%; }
  to { width: 0; }
`;

const Container = styled.div`
  display: inline-block;
`;

const TypedOut = styled.div<Omit<TypewriterProps, 'text'>>`
  overflow: hidden;
  border-right: ${({ cursorWidth }) => cursorWidth || '0.15em'} solid ${({ cursorColor }) => cursorColor || 'orange'};
  white-space: nowrap;
  animation: ${({ reverse = false, speed = 1 }) => reverse ? css`${reverseAnimation(speed)} 1s forwards` : css`${typingAnimation(reverse, speed)} 1s forwards`};
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  width: 0;
  animation-iteration-count: ${({ loop }) => loop ? 'infinite' : '1'};
`;

const Typewriter_5: React.FC<TypewriterProps> = ({
  text = 'Web Developer',
  fontSize = '1.6rem',
  cursorColor = 'orange',
  cursorWidth = '0.15em',
  reverse = false,
  loop = false,
  speed = 1,
}) => {
  return (
    <div>
      <h1>I'm Matt, I'm a</h1>
      <Container>
        <TypedOut
          fontSize={fontSize}
          cursorColor={cursorColor}
          cursorWidth={cursorWidth}
          reverse={reverse}
          loop={loop}
          speed={speed}
        >
          {text}
        </TypedOut>
      </Container>
    </div>
  );
};

export default Typewriter_5;
