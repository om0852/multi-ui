"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframes for typing and cursor blinking animations
const typing = (duration, steps) => keyframes`
  from { 
    width: 0;
    visibility: visible;
  }
  to { 
    width: ${steps}ch;
    visibility: visible;
  }
`;

const blinkCaret = (cursorColor) => keyframes`
  from, to { border-color: transparent; }
  50% { border-color: ${cursorColor}; }
`;

// Styled component for the container
const TypewriterContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

// Styled component for the typewriter effect
const Typewriter = styled.div`
  --typing-duration: ${(props) => `${props.duration}s`};
  --steps: ${(props) => props.steps};

  h1 {
    color: #000; /* Default color */
    font-family: monospace; /* Default font */
    overflow: hidden;
    border-right: 0.15em solid ${(props) => props.ccolor}; /* Typwriter cursor */
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Default letter-spacing */
    animation: ${(props) => typing(props.duration, props.steps)} var(--typing-duration) steps(var(--steps), end),
      ${(props) => blinkCaret(props.ccolor)} 0.5s step-end infinite;
  }
`;

const Typewriter_1 = ({ message, duration = 3.5, steps = 30, cursorColor = "red", className }) => {
  return (
    <TypewriterContainer>
      <Typewriter duration={duration} steps={steps} ccolor={cursorColor}>
        <h1>
          <p className={className}>{message}</p>
        </h1>
      </Typewriter>
    </TypewriterContainer>
  );
};

export default Typewriter_1;
