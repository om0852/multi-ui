import React from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  position: relative;

  .input {
    background: transparent;
    border: 0;
    outline: none;
    width: ${(props) => props.width || '80vw'};
    max-width: 400px;
    font-size: ${(props) => props.fontSize || '1.5em'};
    transition: padding 0.3s 0.2s ease;

    &:focus {
      padding-bottom: 5px;
    }

    &:focus + .line {
      &:after {
        transform: scaleX(1);
      }
    }
  }

  .line {
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -8px;
    background: #bdc3c7;

    &:after {
      content: " ";
      position: absolute;
      float: right;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      background: #1abc9c;
    }
  }
`;

const InputField_10 = ({ placeholder = "What's your name?", width, height, fontSize, ...props }) => {
  return (
    <StyledInputContainer width={width} height={height} fontSize={fontSize}>
      <input className="input" {...props} type="text" placeholder={placeholder} />
      <div className="line"></div>
    </StyledInputContainer>
  );
};

export default InputField_10;
