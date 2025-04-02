'use client';

import React from 'react';
import styled from 'styled-components';

interface LinkedInButtonProps {
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
  border: 1px solid #0077B5;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: #0077B5;
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
    border: 1px solid #0077B5;
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em #0077B5;
  }
`;

const LinkedInIcon = () => (
  <svg viewBox="0 0 16 16" className="bi bi-linkedin" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

const LinkedInButton: React.FC<LinkedInButtonProps> = ({
  children = 'LinkedIn',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      <LinkedInIcon />
      <span>{children}</span>
    </Button>
  );
};

export default LinkedInButton; 