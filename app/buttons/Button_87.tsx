'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

interface KineticButtonProps {
  variant?: 'energy' | 'nature' | 'magic' | 'fire';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

interface StyledButtonProps {
  $variant: NonNullable<KineticButtonProps['variant']>;
  $size: NonNullable<KineticButtonProps['size']>;
  $isActive: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const variantStyles = {
  energy: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    particleColor: '#00f2fe',
    glowColor: 'rgba(79, 172, 254, 0.6)',
  },
  nature: {
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    particleColor: '#38f9d7',
    glowColor: 'rgba(67, 233, 123, 0.6)',
  },
  magic: {
    background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    particleColor: '#fbc2eb',
    glowColor: 'rgba(161, 140, 209, 0.6)',
  },
  fire: {
    background: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    particleColor: '#ffb199',
    glowColor: 'rgba(255, 8, 68, 0.6)',
  },
};

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const StyledKineticButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: ${props =>
    props.$size === 'sm' ? '10px 20px' : props.$size === 'md' ? '14px 28px' : '18px 36px'};
  font-size: ${props =>
    props.$size === 'sm' ? '14px' : props.$size === 'md' ? '16px' : '18px'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${props => variantStyles[props.$variant].background};
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 0 15px ${props => variantStyles[props.$variant].glowColor};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 25px ${props => variantStyles[props.$variant].glowColor};

    &::before {
      opacity: 0.4;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  animation: ${pulse} 2s infinite ease-in-out;
`;

const KineticButton: React.FC<KineticButtonProps> = ({
  variant = 'energy',
  size = 'md',
  children,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
    };
  }, []);

  const updateParticles = useCallback(() => {
    setParticles(prevParticles =>
      prevParticles
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - 0.02,
        }))
        .filter(particle => particle.life > 0)
    );
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.life})`;
      ctx.fill();
    });
  }, [particles]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const interval = setInterval(() => {
      if (particles.length < 50) {
        const rect = canvas.getBoundingClientRect();
        const newParticle = createParticle(
          Math.random() * rect.width,
          Math.random() * rect.height
        );
        setParticles(prev => [...prev, newParticle]);
      }
      updateParticles();
    }, 50);

    return () => clearInterval(interval);
  }, [isActive, createParticle, updateParticles, particles.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();
  }, [drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => {
    setIsActive(false);
    setParticles([]);
  };

  return (
    <StyledKineticButton
      $variant={variant}
      $size={size}
      $isActive={isActive}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ParticleCanvas ref={canvasRef} />
      {children}
    </StyledKineticButton>
  );
};

export default KineticButton; 