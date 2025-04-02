'use client';

import React, { useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MagneticButtonProps {
  color?: 'blue' | 'purple' | 'teal' | 'rose';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px currentColor;
  }
  50% {
    box-shadow: 0 0 20px currentColor;
  }
  100% {
    box-shadow: 0 0 5px currentColor;
  }
`;

const StyledMagneticButton = styled.button<MagneticButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '12px 24px' : props.size === 'md' ? '16px 32px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
  perspective: 1000px;

  ${props => {
    const colors = {
      blue: css`
        background: linear-gradient(135deg, #2563eb, #3b82f6);
        color: white;
      `,
      purple: css`
        background: linear-gradient(135deg, #7c3aed, #8b5cf6);
        color: white;
      `,
      teal: css`
        background: linear-gradient(135deg, #0d9488, #14b8a6);
        color: white;
      `,
      rose: css`
        background: linear-gradient(135deg, #e11d48, #f43f5e);
        color: white;
      `,
    };
    return colors[props.color || 'blue'];
  }}

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 14px;
    background: inherit;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.05);
    animation: ${glow} 2s infinite;

    &::before {
      opacity: 0.7;
    }
  }

  .magnetic-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

const MagneticButton: React.FC<MagneticButtonProps> = ({
  color = 'blue',
  size = 'md',
  children,
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const content = contentRef.current;
    if (!button || !content) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxRotation = 15;
      const rotation = maxRotation * distance;

      content.style.transform = `
        rotateY(${deltaX * rotation}deg)
        rotateX(${-deltaY * rotation}deg)
        translateZ(10px)
      `;
    };

    const handleMouseLeave = () => {
      content.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <StyledMagneticButton
      ref={buttonRef}
      color={color}
      size={size}
      onClick={onClick}
    >
      <div ref={contentRef} className="magnetic-content">
        {children}
      </div>
    </StyledMagneticButton>
  );
};

export default MagneticButton; 