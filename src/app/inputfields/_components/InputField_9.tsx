"use client"
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div<{ height?: string }>`
  .input {
    position: relative;
    font-size: 1.5em;
    background: linear-gradient(21deg, #10abff, #1beabd);
    padding: 3px;
    display: inline-block;
    border-radius: 9999em;
    width: 100%;
    box-sizing: border-box;
    height: ${(props) => props.height || 'auto'};  /* Apply dynamic height */

    /* Inner input styles */
    input {
      position: relative;
      display: inherit;
      border-radius: inherit;
      margin: 0;
      border: none;
      outline: none;
      padding: 0 0.325em;
      z-index: 1;
      width: 100%;
      height: 100%;
      font-family: inherit;
      color: #2e3750;
      transition: all 0.3s;

      /* Placeholder styling */
      &::placeholder {
        color: #cbd0d5;
      }

      /* Focus effect on the span */
      &:focus + span {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Shadow span */
    span {
      transform: scale(0.993, 0.94);
      transition: transform 0.5s, opacity 0.25s;
      opacity: 0;
      position: absolute;
      z-index: 0;
      margin: 4px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      pointer-events: none;

      box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff,
        3px -3px 30px #1beabd, -3px 3px 30px #10abff;
    }
  }
`;

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  height?: string;  // Allow custom height
}

const GradientInput: React.FC<AnimatedInputProps> = ({ placeholder = "Gradient border focus fun", height, ...props }) => {
  return (
    <StyledInputContainer height={height}>
      <div className="input">
        <input {...props} type="text" placeholder={placeholder} />
        <span></span>
      </div>
    </StyledInputContainer>
  );
};

export default GradientInput;
