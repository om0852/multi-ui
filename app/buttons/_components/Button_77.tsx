'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MorphButtonProps {
  variant?: 'circle' | 'diamond' | 'star' | 'hex';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const morph = {
  circle: keyframes`
    0%, 100% { border-radius: 8px; }
    50% { border-radius: 50%; }
  `,
  diamond: keyframes`
    0%, 100% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(45deg) scale(0.9); }
  `,
  star: keyframes`
    0%, 100% { clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }
    50% { clip-path: polygon(50% 0%, 65% 30%, 100% 30%, 72% 55%, 85% 100%, 50% 75%, 15% 100%, 28% 55%, 0% 30%, 35% 30%); }
  `,
  hex: keyframes`
    0%, 100% { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
    50% { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
  `
};

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px currentColor; }
  50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
`;

const StyledMorphButton = styled.button<MorphButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '12px 24px' : props.size === 'md' ? '16px 32px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  background: transparent;
  
  ${props => {
    const variants = {
      circle: css`
        border-radius: 8px;
        &:hover {
          animation: ${morph.circle} 2s infinite ease-in-out;
        }
      `,
      diamond: css`
        border-radius: 8px;
        &:hover {
          animation: ${morph.diamond} 2s infinite ease-in-out;
        }
      `,
      star: css`
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        &:hover {
          animation: ${morph.star} 2s infinite ease-in-out;
        }
      `,
      hex: css`
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        &:hover {
          animation: ${morph.hex} 2s infinite ease-in-out;
        }
      `
    };
    return variants[props.variant || 'circle'];
  }}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => {
      switch (props.variant) {
        case 'circle':
          return 'linear-gradient(45deg, #ff3366, #ff6b6b)';
        case 'diamond':
          return 'linear-gradient(45deg, #4facfe, #00f2fe)';
        case 'star':
          return 'linear-gradient(45deg, #fa709a, #fee140)';
        case 'hex':
          return 'linear-gradient(45deg, #30cfd0, #330867)';
        default:
          return 'linear-gradient(45deg, #ff3366, #ff6b6b)';
      }
    }};
    z-index: -1;
  }

  .content {
    position: relative;
    color: white;
    mix-blend-mode: difference;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
    min-height: ${props =>
      props.size === 'sm' ? '40px' : props.size === 'md' ? '50px' : '60px'};
  }

  &:hover {
    transform: scale(1.05);
    .content {
      animation: ${float} 2s infinite ease-in-out;
    }
  }

  &:hover::before {
    animation: ${glow} 2s infinite;
  }
`;

const MorphButton: React.FC<MorphButtonProps> = ({
  variant = 'circle',
  size = 'md',
  children,
  onClick,
}) => {
  return (
    <StyledMorphButton variant={variant} size={size} onClick={onClick}>
      <div className="content">{children}</div>
    </StyledMorphButton>
  );
};

export default MorphButton; 