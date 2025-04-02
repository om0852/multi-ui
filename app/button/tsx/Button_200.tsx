import React, { ReactNode } from 'react';

interface Button200Props {
    children: ReactNode;
}

const Button200: React.FC<Button200Props> = ({ children }) => {
    return <button>{children}</button>;
};

export default Button200; 