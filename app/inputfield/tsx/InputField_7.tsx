import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

// Color Variables
const cornflowerLilac = "#ffaea9";
const salmon = "#ff7b73";
const white = "#ffffff";
const yourPink = "#ffcccc";

// Styled Components
const Body = styled.div`
  font-size: 10px;
  font-family: Roboto, sans-serif;
  margin: 0;
  display: grid;
`;

const ErrorText = styled.div`
  color: var(--error-color);
  font-size: 0.75rem;
  margin-top: 6px;
  padding: 0 16px;
  line-height: 1.3;
  display: grid;
`;

const Checkbox = styled.input`
  display: none;

  &:checked + .formContainer .form {
    width: 37.5em;
  }

  &:checked + .formContainer .formToggle {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.7);
  }

  &:checked + .formContainer .formInput,
  &:checked + .formContainer .formButtonLabel {
    transition: 0.2s 0.1s;
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  &:not(:checked) + .formContainer .formInput:required:valid ~ .formToggle::before {
    content: "Thank You! 😊";
  }

  &:not(:checked) + .formContainer .formInput:required:valid ~ .formToggle {
    pointer-events: none;
    cursor: default;
  }
`;

const FormContainer = styled.div`
  position: relative;
  font-weight: 700;
  width: 20em;
  height: 6.25em;
`;

const Form = styled.form`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.625em;
  box-sizing: border-box;
  box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.3);
  border-radius: 6.25em;
  background-color: ${white};
  display: flex;
  justify-content: center;
  transition: 0.2s;
`;

const FormToggle = styled.label`
  color: ${salmon};
  top: 0;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  border-radius: 6.25em;
  background-color: ${white};
  width: 20em;
  height: 6.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &::before {
    font-size: 1.75em;
    content: attr(data-title);
  }
`;

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  margin-bottom: 1.5rem;

  /* System color scheme detection */
  @media (prefers-color-scheme: dark) {
    --input-bg: #2d3748;
    --input-text: #e2e8f0;
    --input-border: #4a5568;
    --input-placeholder: #a0aec0;
    --label-color: #a0aec0;
    --label-focus: #63b3ed;
    --error-color: #fc8181;
    --hover-border: #718096;
    --filled-bg: rgba(255, 255, 255, 0.05);
    --standard-border: #4a5568;
  }

  @media (prefers-color-scheme: light) {
    --input-bg: #ffffff;
    --input-text: #2d3748;
    --input-border: #e2e8f0;
    --input-placeholder: #a0aec0;
    --label-color: #718096;
    --label-focus: #3182ce;
    --error-color: #e53e3e;
    --hover-border: #4a5568;
    --filled-bg: rgba(0, 0, 0, 0.05);
    --standard-border: #cbd5e0;
  }
`;

const Label = styled.label<{
  isFloating: boolean;
  variant?: string;
  hasError?: boolean;
  isFocused: boolean;
}>`
  position: absolute;
  left: ${({ variant }) => (variant === "standard" ? 0 : "16px")};
  top: ${({ isFloating, variant }) =>
    isFloating ? (variant === "standard" ? "-20px" : "-8px") : "50%"};
  transform: ${({ isFloating }) =>
    isFloating ? "translateY(0) scale(0.75)" : "translateY(-50%)"};
  font-size: ${({ isFloating }) => (isFloating ? "0.75rem" : "1rem")};
  color: ${({ hasError, isFocused }) =>
    hasError ? "var(--error-color)" : isFocused ? "var(--label-focus)" : "var(--label-color)"};
  background: ${({ variant, isFloating }) =>
    variant !== "standard" && isFloating ? "var(--input-bg)" : "transparent"};
  padding: 0 4px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 1;
  max-width: calc(100% - 32px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FormInput = styled.input.attrs({
  placeholder: "E-mail",
  type: "email",
  pattern: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$",
  required: true,
})<{ $inputHeight?: string; $inputWidth?: string; }>`
  font: inherit;
  color: var(--input-text);
  height: ${(props) => props.$inputHeight || "100%"};
  width: ${(props) => props.$inputWidth || "100%"};
  padding: 0 0.714em;
  font-size: 1.75em;
  border: 0;
  outline: 0;
  border-radius: 5em;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.7);
  transition: 0s;

  &::placeholder {
    color: var(--input-placeholder);
  }

  &:required:valid {
    color: ${salmon};

    & + .formButtonLabel {
      color: ${white};

      &::before {
        pointer-events: initial;
      }
    }
  }
`;

const FormButtonLabel = styled.label`
  color: ${cornflowerLilac};
  height: 100%;
  width: auto;
  font-size: 1.75em;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.7);
  transition: 0s;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    cursor: pointer;
  }
`;

const FormButton = styled.button<{ $buttonHeight?: string; $buttonWidth?: string; }>`
  font: inherit;
  color: inherit;
  height: ${(props) => props.$buttonHeight || "100%"};
  width: ${(props) => props.$buttonWidth || "5em"};
  padding: 0;
  border: 0;
  outline: 0;
  border-radius: 5em;
  background-color: ${salmon};
`;

// Props interface for NotifyForm
interface NotifyFormProps extends InputHTMLAttributes<HTMLInputElement> {
  inputHeight?: string;
  inputWidth?: string;
  buttonHeight?: string;
  buttonWidth?: string;
}

const InputField_7: React.FC<NotifyFormProps> = ({
  inputHeight,
  inputWidth,
  buttonHeight,
  buttonWidth,
  ...props
}) => {
  return (
    <Body>
      <Checkbox className="checkbox" type="checkbox" id="checkbox" />
      <FormContainer className="formContainer">
        <Form className="form" action="">
          <FormInput
            className="formInput"
            $inputHeight={inputHeight}
            $inputWidth={inputWidth}
            {...props}
          />
          <FormButtonLabel className="formButtonLabel" htmlFor="checkbox">
            <FormButton
              className="formButton"
              type="button"
              $buttonHeight={buttonHeight}
              $buttonWidth={buttonWidth}
            >
              Send
            </FormButton>
          </FormButtonLabel>
          <FormToggle className="formToggle" htmlFor="checkbox" data-title="Notify me" />
        </Form>
      </FormContainer>
    </Body>
  );
};

export default InputField_7;
