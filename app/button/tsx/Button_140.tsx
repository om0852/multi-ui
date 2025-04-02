'use client';

import React from 'react';
import styled from 'styled-components';

interface FacebookButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = styled.button`
  background: transparent;
  position: relative;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #4267B2;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: #4267B2;
  transition: color 0.3s 0.1s ease-out;
  text-align: center;

  span {
    margin: 10px;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '';
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: #fff;
    border: 1px solid #4267B2;
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em #4267B2;
  }
`;

const FacebookIcon = () => (
  <svg viewBox="0 0 16 16" className="bi bi-facebook" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
  </svg>
);

const FacebookButton: React.FC<FacebookButtonProps> = ({
  children = 'Facebook',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      <FacebookIcon />
      <span>{children}</span>
    </Button>
  );
};

export default FacebookButton; 