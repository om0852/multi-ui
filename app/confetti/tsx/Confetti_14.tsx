'use client';
import React, { useEffect, useState } from 'react';

const galaxyAnimation = `
  @keyframes galaxySpiral {
    0% {
      transform: rotate(0deg) translateX(var(--orbit-radius)) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: rotate(36deg) translateX(var(--orbit-radius)) scale(1);
    }
    90% {
      opacity: 1;
      transform: rotate(324deg) translateX(var(--orbit-radius)) scale(1);
    }
    100% {
      transform: rotate(360deg) translateX(var(--orbit-radius)) scale(0);
      opacity: 0;
    }
  }

  @keyframes starTwinkle {
    0%, 100% {
      transform: scale(1);
      filter: brightness(1);
    }
    50% {
      transform: scale(1.5);
      filter: brightness(1.5);
    }
  }

  @keyframes centerPulse {
    0%, 100% {
      transform: scale(1);
      filter: brightness(1) blur(0px);
    }
    50% {
      transform: scale(1.2);
      filter: brightness(1.3) blur(2px);
    }
  }
`;

interface GalaxyParticle {
  id: number;
  color: string;
  size: number;
  orbitRadius: number;
  delay: number;
  duration: number;
  twinkleSpeed: number;
}

const Confetti_14: React.FC = () => {
  const [particles, setParticles] = useState<GalaxyParticle[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF69B4', // Pink
    '#4169E1', // Royal Blue
    '#9370DB', // Medium Purple
    '#FFD700', // Gold
    '#FF6347', // Tomato
    '#00CED1', // Dark Turquoise
  ];

  const createParticles = () => {
    const newParticles: GalaxyParticle[] = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
        orbitRadius: Math.random() * 100 + 20,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 3,
        twinkleSpeed: Math.random() * 0.5 + 0.5,
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    if (isActive) {
      createParticles();
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
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
      <style>{galaxyAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #4169E1, #9370DB)',
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
        Galaxy Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, #000000, #1a1a1a)',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
      }}>
        {/* Galaxy center */}
        {isActive && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, #fff, #4169E1)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'centerPulse 2s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(65, 105, 225, 0.5)',
          }} />
        )}
        
        {/* Galaxy particles */}
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
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              '--orbit-radius': `${particle.orbitRadius}px`,
              animation: `
                galaxySpiral ${particle.duration}s linear infinite,
                starTwinkle ${particle.twinkleSpeed}s ease-in-out infinite
              `,
              animationDelay: `${particle.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_14; 