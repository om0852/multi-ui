"use client"
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div<{ height?: string }>`
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #1e293b;
    --input-text: #f8fafc;
    --input-placeholder: #94a3b8;
    --gradient-start: #0ea5e9;
    --gradient-end: #10b981;
    --glow-start: rgba(16, 185, 129, 0.5);
    --glow-end: rgba(14, 165, 233, 0.5);
    --border-color: #334155;
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #1e293b;
    --input-placeholder: #94a3b8;
    --gradient-start: #10abff;
    --gradient-end: #1beabd;
    --glow-start: #1beabd;
    --glow-end: #10abff;
    --border-color: #e2e8f0;
  }

  .input {
    position: relative;
    font-size: 1.25em;
    background: linear-gradient(21deg, var(--gradient-start), var(--gradient-end));
    padding: 3px;
    display: inline-block;
    border-radius: 9999em;
    width: 100%;
    box-sizing: border-box;
    height: ${(props) => props.height || 'auto'};
    transition: all 0.3s ease;

    /* Inner input styles */
    input {
      position: relative;
      display: inherit;
      border-radius: inherit;
      margin: 0;
      border: none;
      outline: none;
      padding: 0.5em 1em;
      z-index: 1;
      width: 100%;
      height: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--input-text);
      background-color: var(--input-bg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-weight: 500;

      /* Placeholder styling */
      &::placeholder {
        color: var(--input-placeholder);
        opacity: 0.8;
      }

      /* Focus effect on the span */
      &:focus + span {
        opacity: 1;
        transform: scale(1);
      }
      
      /* Autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover, 
      &:-webkit-autofill:focus, 
      &:-webkit-autofill:active  {
        -webkit-text-fill-color: var(--input-text) !important;
        -webkit-box-shadow: 0 0 0 30px var(--input-bg) inset !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    }

    /* Shadow span */
    span {
      transform: scale(0.993, 0.94);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
      background: var(--input-bg);
      box-shadow: inset 0 0 0 2px var(--border-color), 
                  0 0 0 3px rgba(255, 255, 255, 0.1),
                  3px -3px 30px var(--glow-start), 
                  -3px 3px 30px var(--glow-end);
    }
  }
`;

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  height?: string;
  /**
   * Custom gradient start color (overrides theme)
   */
  gradientStart?: string;
  /**
   * Custom gradient end color (overrides theme)
   */
  gradientEnd?: string;
  /**
   * Custom background color (overrides theme)
   */
  backgroundColor?: string;
  /**
   * Custom text color (overrides theme)
   */
  textColor?: string;
  /**
   * Custom placeholder color (overrides theme)
   */
  placeholderColor?: string;
}

const InputField_9: React.FC<AnimatedInputProps> = ({
  placeholder = "Type something...",
  height,
  gradientStart,
  gradientEnd,
  backgroundColor,
  textColor,
  placeholderColor,
  style,
  ...props
}) => {
  const containerStyle = {
    ...style,
    '--gradient-start': gradientStart,
    '--gradient-end': gradientEnd,
    '--input-bg': backgroundColor,
    '--input-text': textColor,
    '--input-placeholder': placeholderColor,
  } as React.CSSProperties;

  return (
    <StyledInputContainer 
      height={height}
      style={containerStyle}
    >
      <div className="input">
        <input 
          {...props} 
          type="text" 
          placeholder={placeholder} 
          aria-label={placeholder}
        />
        <span aria-hidden="true"></span>
      </div>
    </StyledInputContainer>
  );
};

export default InputField_9;
