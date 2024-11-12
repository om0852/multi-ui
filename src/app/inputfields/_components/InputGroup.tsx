import React, { ReactNode } from 'react';

interface InputGroupProps {
  children: ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default InputGroup;
