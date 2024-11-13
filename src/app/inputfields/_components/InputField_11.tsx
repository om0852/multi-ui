import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  label?: string;
}

const Wrapper = styled.div`
  font-family: 'Dosis', sans-serif;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.8;
`;

const InputContainer = styled.div<{ width?: string; height?: string; fontSize?: string }>`
  position: relative;
  width: ${(props) => props.width || '80%'};

  .Input-text {
    display: block;
    margin: 0;
    padding: 1rem 2rem;
    width: 100%;
    font-family: inherit;
    font-size: ${(props) => props.fontSize || '2.1rem'};
    line-height: 1.8;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .Input-text::placeholder {
    color: #b0bec5;
  }

  .Input-text:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem #5e35b1;
  }

  .Input-label {
    position: absolute;
    bottom: 50%;
    left: 1rem;
    color: #fff;
    font-size: ${(props) => props.fontSize || '2.1rem'};
    line-height: 1.8;
    opacity: 0;
    transform: translate3d(0, 50%, 0) scale(1);
    transform-origin: 0 0;
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), 
                transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .Input-text:not(:placeholder-shown) + .Input-label,
  .Input-text:focus:not(:placeholder-shown) + .Input-label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, calc(50% - 1.6rem), 0) scale(0.8);
    transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const InputField_11: React.FC<InputProps> = ({ placeholder, width, height, fontSize, label, ...props }) => {
  return (
    <Wrapper>
      <InputContainer width={width} height={height} fontSize={fontSize}>
        <input
          type="text"
          id="input"
          className="Input-text border-[1px] border-slate-700 border-solid"
          placeholder={placeholder || 'Your first name, e.g. Nicholas'}
          {...props}
        />
        {label && <label htmlFor="input" className="Input-label">{label}</label>}
      </InputContainer>
    </Wrapper>
  );
};

export default InputField_11;
