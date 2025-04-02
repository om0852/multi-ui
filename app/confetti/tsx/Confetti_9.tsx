'use client';
import React, { useEffect, useState } from 'react';

const spiralAnimation = `
  @keyframes spiral {
    0% {
      transform: rotate(0deg) translateX(0) scale(0);
      opacity: 1;
    }
    100% {
      transform: rotate(1080deg) translateX(150px) scale(1);
      opacity: 0;
    }
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }
`;

interface SpiralPiece {
  id: number;
  color: string;
  size: number;
  angle: number;
  delay: number;
  direction: number;
}

const Confetti_9: React.FC = () => {
  const [pieces, setPieces] = useState<SpiralPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF1493', // Deep Pink
    '#00CED1', // Dark Turquoise
    '#FFD700', // Gold
    '#7B68EE', // Medium Slate Blue
    '#FF4500', // Orange Red
    '#98FB98', // Pale Green
  ];

  const createPieces = () => {
    const newPieces: SpiralPiece[] = [];
    const numPieces = 60;
    const angleStep = 360 / numPieces;

    for (let i = 0; i < numPieces; i++) {
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        angle: i * angleStep,
        delay: i * 0.05,
        direction: Math.random() > 0.5 ? 1 : -1,
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
      <style>{spiralAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #00CED1, #7B68EE)',
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
        Spiral Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)',
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
              borderRadius: piece.size > 6 ? '50%' : '2px',
              transform: `translate(-50%, -50%) rotate(${piece.angle}deg)`,
              animation: `
                spiral 3s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                twinkle 0.5s ease-in-out infinite
              `,
              animationDelay: `${piece.delay}s`,
              transformOrigin: piece.direction > 0 ? 'left center' : 'right center',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_9; 