"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the typewriter and cursor blink animation
const typewriter = (width: string) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${width};
  }
`;

const blinkTextCursor = (ccolor: string) => keyframes`
  from {
    border-right-color: ${ccolor};
  }
  to {
    border-right-color: transparent;
  }
`;

// Styled component for the container
const Container = styled.div`
  overflow: hidden;
`;

// Styled component for the body text
const Body = styled.div`
  color: rgba(15, 15, 15, 0.75);
  font-family: "Anonymous Pro", monospace;
`;

// Styled component for the typewriter text
const TypewriterText = styled.p<{ ccolor: string; textLength: number; duration: number }>`
  position: relative;
  width: auto; /* Dynamic width */
  margin: 0 auto;
  border-right: 2px solid ${(props) => props.ccolor}; /* Cursor */
  font-size: 180%;
  white-space: nowrap;
  overflow: hidden;

  /* Apply animation */
  animation: ${(props) => typewriter(`${props.textLength}ch`)} ${(props) => props.duration}s steps(${props=>props.textLength}) 1s 1 normal both, 
             ${(props) => blinkTextCursor(props.ccolor)} 500ms steps(${props=>props.textLength}) infinite normal; /* Dynamic steps */
`;

interface TypewriterComponentProps {
  message: string;
  cursorColor?: string;
  duration?: number;
  className?: string;
}

const TypewriterComponent: React.FC<TypewriterComponentProps> = ({
  message,
  cursorColor = "green", // Default cursor color
  duration = 3.5, // Default duration
  className = "", // Default className
}) => {
  const textLength = message.length; // Calculate the length of the text

  return (
    <Container>
      <Body>
        <TypewriterText ccolor={cursorColor} textLength={textLength} duration={duration}>
          <span className={className}>{message}</span>
        </TypewriterText>
      </Body>
    </Container>
  );
};

export default TypewriterComponent;
