"use client";
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const TypedOut = styled.div`
  overflow: hidden;
  border-right: ${props => props.cursorWidth || '0.15em'} solid ${props => props.cursorColor || 'orange'};
  white-space: nowrap;
  animation: ${props =>
    props.reverse
      ? css`${reverseAnimation()} ${props.speed || 1}s forwards`
      : css`${typingAnimation()} ${props.speed || 1}s forwards`};
  font-size: ${props => props.fontSize || '1.6rem'};
  width: 0;
  animation-iteration-count: ${props => (props.loop ? 'infinite' : '1')};
`;

const Typewriter = ({
  text = 'Web Developer',
  fontSize = '1.6rem',
  cursorColor = 'orange',
  cursorWidth = '0.15em',
  loop = false,
  reverse = false,
  speed = 1,
}) => {
  return (
    <div>
      <h1>I&apos;m Matt, I&apos;m a</h1>
      <Container>
        <TypedOut
          fontSize={fontSize}
          cursorColor={cursorColor}
          cursorWidth={cursorWidth}
          loop={loop}
          reverse={reverse}
          speed={speed}
        >
          {text}
        </TypedOut>
      </Container>
    </div>
  );
};

export default Typewriter;
