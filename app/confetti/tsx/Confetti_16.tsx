'use client';
import React, { useEffect, useState } from 'react';

const neonAnimation = `
  @keyframes neonFloat {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translate3d(var(--end-x), var(--end-y), 0) rotate(var(--rotation));
      opacity: 0;
    }
  }

  @keyframes neonPulse {
    0%, 100% {
      filter: brightness(1) blur(0px);
      box-shadow: 0 0 5px var(--color),
                 0 0 10px var(--color),
                 0 0 15px var(--color);
    }
    50% {
      filter: brightness(1.5) blur(1px);
      box-shadow: 0 0 10px var(--color),
                 0 0 20px var(--color),
                 0 0 30px var(--color);
    }
  }

  @keyframes neonSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface NeonParticle {
  id: number;
  color: string;
  size: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rotation: number;
  delay: number;
  duration: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
}

interface CustomCSSProperties extends React.CSSProperties {
  '--color'?: string;
  '--start-x'?: string;
  '--start-y'?: string;
  '--end-x'?: string;
  '--end-y'?: string;
  '--rotation'?: string;
}

const Confetti_16: React.FC = () => {
  const [particles, setParticles] = useState<NeonParticle[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF1493', // Neon Pink
    '#00FF00', // Neon Green
    '#FF00FF', // Neon Purple
    '#00FFFF', // Neon Cyan
    '#FFA500', // Neon Orange
    '#FFFF00', // Neon Yellow
  ];

  const shapes = ['circle', 'square', 'triangle', 'star'];

  const getShapeStyle = (shape: string) => {
    switch (shape) {
      case 'circle':
        return { borderRadius: '50%' };
      case 'square':
        return { borderRadius: '4px' };
      case 'triangle':
        return {
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        };
      case 'star':
        return {
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        };
      default:
        return {};
    }
  };

  const createParticles = () => {
    const newParticles: NeonParticle[] = [];
    const numParticles = 40;

    for (let i = 0; i < numParticles; i++) {
      const startX = Math.random() * 300 - 150;
      const startY = Math.random() * 300 - 150;
      const endX = Math.random() * 300 - 150;
      const endY = Math.random() * 300 - 150;

      newParticles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 15 + 10,
        startX,
        startY,
        endX,
        endY,
        rotation: Math.random() * 720 - 360,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
        shape: shapes[Math.floor(Math.random() * shapes.length)] as 'circle' | 'square' | 'triangle' | 'star',
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    if (isActive) {
      createParticles();
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <style>{neonAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #FF1493, #00FF00)',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
        }}
      >
        Neon Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: '#0a0a0a',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
      }}>
        {isActive && particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: '50%',
              top: '50%',
              background: particle.color,
              ...getShapeStyle(particle.shape),
              '--color': particle.color,
              '--end-x': `${particle.endX}px`,
              '--end-y': `${particle.endY}px`,
              '--rotation': `${particle.rotation}deg`,
              transform: 'translate(-50%, -50%)',
              animation: `
                neonFloat ${particle.duration}s ease-out forwards,
                neonPulse 1s ease-in-out infinite,
                neonSpin ${particle.duration * 0.5}s linear infinite
              `,
              animationDelay: `${particle.delay}s`,
            } as CustomCSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_16; 