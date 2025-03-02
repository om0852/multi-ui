'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ParticleButtonProps {
  color?: 'fire' | 'ice' | 'nature' | 'magic';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const particleAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
`;

const buttonPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const Particle = styled.span<{ delay: number; angle: number; distance: number }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
  --tx: ${props => Math.cos(props.angle) * props.distance}px;
  --ty: ${props => Math.sin(props.angle) * props.distance}px;
  animation: ${particleAnimation} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
`;

const StyledParticleButton = styled.button<ParticleButtonProps>`
  position: relative;
  padding: ${props =>
    props.size === 'sm' ? '10px 20px' : props.size === 'md' ? '15px 30px' : '20px 40px'};
  font-size: ${props =>
    props.size === 'sm' ? '14px' : props.size === 'md' ? '16px' : '20px'};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  ${props => {
    const themes = {
      fire: css`
        background: linear-gradient(45deg, #ff4e50, #f9d423);
        color: #ff4e50;
      `,
      ice: css`
        background: linear-gradient(45deg, #89f7fe, #66a6ff);
        color: #66a6ff;
      `,
      nature: css`
        background: linear-gradient(45deg, #56ab2f, #a8e063);
        color: #56ab2f;
      `,
      magic: css`
        background: linear-gradient(45deg, #da22ff, #9733ee);
        color: #da22ff;
      `,
    };
    return themes[props.color || 'fire'];
  }}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: inherit;
    filter: brightness(1.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    animation: ${buttonPulse} 1s infinite;

    &::before {
      opacity: 1;
    }
  }

  .button-content {
    position: relative;
    z-index: 1;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${props =>
      props.size === 'sm' ? '100px' : props.size === 'md' ? '140px' : '180px'};
  }

  .particles-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
`;

const ParticleButton: React.FC<ParticleButtonProps> = ({
  color = 'fire',
  size = 'md',
  children,
  onClick,
}) => {
  const [particles, setParticles] = useState<Array<{ id: number; angle: number; delay: number }>>([]);
  const [key, setKey] = useState(0);

  const handleMouseEnter = () => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: key + i,
      angle: (i * Math.PI * 2) / 12,
      delay: i * 0.05,
    }));
    setParticles(newParticles);
    setKey(key + 12);
  };

  return (
    <StyledParticleButton
      color={color}
      size={size}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
    >
      <div className="button-content">{children}</div>
      <div className="particles-container">
        {particles.map(particle => (
          <Particle
            key={particle.id}
            angle={particle.angle}
            delay={particle.delay}
            distance={100}
          />
        ))}
      </div>
    </StyledParticleButton>
  );
};

export default ParticleButton; 