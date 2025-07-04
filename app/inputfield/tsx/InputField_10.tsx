import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

// Styled component for the input container and line
const StyledInputContainer = styled.div<{ 
  width?: string; 
  height?: string; 
  fontSize?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}>`
  position: relative;
  width: 100%;
  max-width: ${({ width }) => width || '400px'};
  margin: 0.5rem 0 1.5rem;
  
  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-text: #f3f4f6;
    --input-placeholder: #9ca3af;
    --input-bg: transparent;
    --line-color: #4b5563;
    --focus-line: #60a5fa;
    --focus-text: #ffffff;
  }
  
  @media (prefers-color-scheme: light) {
    --input-text: #111827;
    --input-placeholder: #9ca3af;
    --input-bg: transparent;
    --line-color: #d1d5db;
    --focus-line: #3b82f6;
    --focus-text: #1f2937;
  }

  .input {
    background: var(--input-bg);
    border: 0;
    outline: none;
    width: 100%;
    padding: 0.75rem 0.5rem 0.5rem 0;
    font-size: ${(props) => props.fontSize || '1.125rem'};
    font-weight: 500;
    color: var(--input-text);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &::placeholder {
      color: var(--input-placeholder);
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }

    &:focus {
      padding-bottom: 8px;
      color: var(--focus-text);
      
      &::placeholder {
        opacity: 0.5;
      }
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

  .line {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--line-color);
    overflow: hidden;
    border-radius: 1px;
    transition: all 0.3s ease;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      background: ${({ variant }) => {
        switch(variant) {
          case 'primary': return '#3b82f6';
          case 'secondary': return '#10b981';
          case 'accent': return '#8b5cf6';
          default: return 'var(--focus-line)';
        }
      }};
    }
  }

  /* Focus state for the line */
  .input:focus + .line:after {
    transform: scaleX(1);
  }
`;

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Placeholder text for the input
   */
  placeholder?: string;
  /**
   * Width of the input container
   */
  width?: string;
  /**
   * Height of the input (not recommended to change as it may affect the animation)
   */
  height?: string;
  /**
   * Font size for the input text
   */
  fontSize?: string;
  /**
   * Visual variant of the input
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent';
  /**
   * Custom color for the focus line
   */
  lineColor?: string;
}

const InputField_10: React.FC<AnimatedInputProps> = ({
  placeholder = "Type something...",
  width,
  height,
  fontSize,
  variant = 'primary',
  lineColor,
  style,
  className = '',
  ...props
}) => {
  const containerStyle = {
    ...style,
    '--focus-line': lineColor,
  } as React.CSSProperties;

  return (
    <StyledInputContainer 
      width={width} 
      height={height} 
      fontSize={fontSize}
      variant={variant}
      style={containerStyle}
      className={`animated-input ${className}`}
    >
      <input 
        className="input" 
        type="text" 
        placeholder={placeholder} 
        aria-label={placeholder}
        {...props} 
      />
      <div className="line" aria-hidden="true"></div>
    </StyledInputContainer>
  );
};

export default InputField_10;
