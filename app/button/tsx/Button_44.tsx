import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #6200ea;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #3700b3;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Button_44: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button_44;
