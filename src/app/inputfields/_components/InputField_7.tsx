import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

// Color Variables
const black = "#000000";
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

const FormInput = styled.input.attrs({
  placeholder: "E-mail",
  type: "email",
  pattern: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$",
  required: true,
})<{ $inputHeight?: string; $inputWidth?: string; }>`
  font: inherit;
  color: ${yourPink};
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
    color: currentColor;
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

const NotifyForm: React.FC<NotifyFormProps> = ({
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

export default NotifyForm;
