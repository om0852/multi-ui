import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const explode = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
`;

const particle = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(
      ${() => (Math.random() - 0.5) * 200}px,
      ${() => (Math.random() - 0.5) * 200}px
    ) scale(0);
    opacity: 0;
  }
`;

const StyledParticleButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background: linear-gradient(45deg, #ff3366, #ff6b6b);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, #ff6b6b, #ff3366);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Particle = styled.div<{ $delay: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  animation: ${particle} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
`;

const ExplosionRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  animation: ${explode} 0.6s ease-out forwards;
`;

const ParticleButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [particles, setParticles] = useState<{ id: number; delay: number }[]>([]);
  const [showRing, setShowRing] = useState(false);

  const handleClick = () => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      delay: i * 0.05,
    }));
    
    setParticles(newParticles);
    setShowRing(true);

    setTimeout(() => {
      setParticles([]);
      setShowRing(false);
    }, 1000);
  };

  return (
    <StyledParticleButton onClick={handleClick}>
      {children}
      {particles.map(particle => (
        <Particle key={particle.id} $delay={particle.delay} />
      ))}
      {showRing && <ExplosionRing />}
    </StyledParticleButton>
  );
};

export default ParticleButton; 