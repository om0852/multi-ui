"use client";
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type TypewriterProps = {
  text: string;
  fontSize?: string;
  cursorColor?: string;
  cursorWidth?: string;
  loop?: boolean;
  reverse?: boolean; // Add reverse as part of the props
  speed?: number; // Add speed as part of the props
};

const typingAnimation = () => keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const reverseAnimation = () => keyframes`
  from { width: 100%; }
  to { width: 0; }
`;

const Container = styled.div`
  display: inline-block;
`;

const TypedOut = styled.div<{
  fontSize?: string;
  cursorColor?: string;
  cursorWidth?: string;
  loop?: boolean;
  reverse?: boolean;
  speed?: number;
}>`
  overflow: hidden;
  border-right: ${({ cursorWidth }) => cursorWidth || '0.15em'} solid ${({ cursorColor }) => cursorColor || 'orange'};
  white-space: nowrap;
  animation: ${({ reverse = false }) =>
    reverse
      ? css`${reverseAnimation()} 1s forwards`
      : css`${typingAnimation()} 1s forwards`};
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  width: 0;
  animation-iteration-count: ${({ loop }) => loop ? 'infinite' : '1'};
`;

const Typewriter_5: React.FC<TypewriterProps> = ({
  text = 'Web Developer',
  fontSize = '1.6rem',
  cursorColor = 'orange',
  cursorWidth = '0.15em',
  loop = false,
  reverse = false,
  speed = 1,  // Add default value for speed
}) => {
  return (
    <div>
      <h1>I&lsquo;m Matt, I&apos;m a</h1>
      <Container>
        <TypedOut
          fontSize={fontSize}
          cursorColor={cursorColor}
          cursorWidth={cursorWidth}
          loop={loop}
          reverse={reverse}  // Pass reverse prop here
          speed={speed}  // Pass speed prop here
        >
          {text}
        </TypedOut>
      </Container>
    </div>
  );
};

export default Typewriter_5;
