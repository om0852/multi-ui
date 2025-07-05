const Container = styled.div`
  @media (prefers-color-scheme: dark) {
    --input-bg: #1a1a2e;
    --input-text: #e6e6e6;
    --input-border: #4a4a6a;
    --input-placeholder: #a0a0c0;
    --label-color: rgba(255, 220, 255, 0.8);
    --container-bg: linear-gradient(100deg, #301030, #000033);
    --gradient-1: #f09;
    --gradient-2: #0ff;
    --gradient-3: #9f0;
  }
  
  @media (prefers-color-scheme: light) {
    --input-bg: #f0f0f5;
    --input-text: #33334d;
    --input-border: #d1d1e0;
    --input-placeholder: #7a7a8c;
    --label-color: #6b46c1;
    --container-bg: linear-gradient(100deg, #f0f0ff, #e6f2ff);
    --gradient-1: #c71585;
    --gradient-2: #00bfff;
    --gradient-3: #32cd32;
  }
  
  background: var(--container-bg);
  padding: 2em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  animation: background-move 10s linear infinite;
  background-size: max(100vw, 30em) auto, 100% 100%;
  transition: background 0.3s ease;
`;

const InputGroup = styled.div`
  width: 100%;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  mix-blend-mode: lighten;
`;

const Label = styled.label`
  padding: 0 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 0.875em;
  letter-spacing: 0.1em;
  color: var(--label-color);
  cursor: pointer;
  transition: color 0.3s ease;
`;

const Input = styled.input`
  color: var(--input-text);
  font-size: 1.25rem;
  line-height: 1;
  border-style: none;
  outline: none;
  height: calc(1em + 1.6em + 0.5em);
  width: 100%;
  padding: 0.8em 1em;
  border: 0.25em solid transparent;
  background-image: linear-gradient(var(--input-bg), var(--input-bg)),
    linear-gradient(120deg, var(--gradient-1) 0%, var(--gradient-2) 50%, var(--gradient-3) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 1.8em;
  background-size: 200% 100%;
  transition: all 0.8s ease-out;

  &::placeholder {
    color: var(--input-placeholder);
    opacity: 0.7;
  }

  &:hover {
    background-position: 100% 0;
  }

  &:focus {
    outline: 2px dashed var(--gradient-1);
    outline-offset: 0.5em;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.8em;
  margin-top: 0.5em;
  padding-left: 1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;
`;

const InputField = ({
  className,
  placeholder = "Enter your text",
  inputType = "text",
  name = "input",
  id = "input",
  label = "Your Input",
  error = "",
  value = ""
}) => {
  return (
    <Container>
      <InputGroup>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputGroup>
    </Container>
  );
};

render(<InputField />);
