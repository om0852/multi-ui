'use client';
import React, { useEffect, useState } from 'react';

const vortexAnimation = `
  @keyframes vortex {
    0% {
      transform: rotate(0deg) translateX(0) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: rotate(1080deg) translateX(var(--final-distance)) scale(0);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      filter: brightness(1);
    }
    50% {
      transform: scale(1.2);
      filter: brightness(1.3);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

interface VortexPiece {
  id: number;
  color: string;
  size: number;
  angle: number;
  distance: number;
  delay: number;
  duration: number;
  finalDistance: number;
}

const Confetti_13: React.FC = () => {
  const [pieces, setPieces] = useState<VortexPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF1493', // Deep Pink
    '#9400D3', // Dark Violet
    '#4B0082', // Indigo
    '#0000FF', // Blue
    '#00FF00', // Lime
    '#FFD700', // Gold
  ];

  const createPieces = () => {
    const newPieces: VortexPiece[] = [];
    const numPieces = 80;
    const angleStep = (2 * Math.PI) / (numPieces / 4); // Creates 4 arms

    for (let i = 0; i < numPieces; i++) {
      const baseAngle = (i % (numPieces / 4)) * angleStep;
      const armOffset = Math.floor(i / (numPieces / 4)) * (Math.PI / 2);
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        angle: baseAngle + armOffset,
        distance: Math.random() * 30 + 20,
        delay: (i % (numPieces / 4)) * 0.1,
        duration: Math.random() * 1 + 2,
        finalDistance: Math.random() * 100 + 100,
      });
    }

    setPieces(newPieces);
  };

  useEffect(() => {
    if (isActive) {
      createPieces();
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
      <style>{vortexAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #9400D3, #4B0082)',
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
        Vortex Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, #0f0f0f, #1a1a1a)',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
      }}>
        {isActive && pieces.map((piece) => (
          <div
            key={piece.id}
            style={{
              position: 'absolute',
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              left: '50%',
              top: '50%',
              background: piece.color,
              borderRadius: '50%',
              transform: `
                translate(-50%, -50%)
                rotate(${piece.angle}rad)
                translateX(${piece.distance}px)
              `,
              '--final-distance': `${piece.finalDistance}px`,
              animation: `
                vortex ${piece.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite,
                pulse ${piece.duration * 0.5}s ease-in-out infinite,
                float ${piece.duration * 0.3}s ease-in-out infinite
              `,
              animationDelay: `${piece.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_13; 