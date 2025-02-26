'use client';
import React, { useEffect, useState } from 'react';

const fountainAnimation = `
  @keyframes fountain {
    0% {
      transform: translateY(0) scale(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-150px) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: translateY(300px) scale(0.5);
      opacity: 0;
    }
  }

  @keyframes shimmer {
    0%, 100% {
      filter: brightness(1) contrast(1);
    }
    50% {
      filter: brightness(1.2) contrast(1.1);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface FountainPiece {
  id: number;
  color: string;
  size: number;
  left: number;
  delay: number;
  shape: 'circle' | 'square' | 'triangle';
  rotationSpeed: number;
}

const Confetti_10: React.FC = () => {
  const [pieces, setPieces] = useState<FountainPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF69B4', // Hot Pink
    '#4169E1', // Royal Blue
    '#32CD32', // Lime Green
    '#FFD700', // Gold
    '#9370DB', // Medium Purple
    '#FF6347', // Tomato
  ];

  const shapes = ['circle', 'square', 'triangle'];

  const createPieces = () => {
    const newPieces: FountainPiece[] = [];
    const numPieces = 40;

    for (let i = 0; i < numPieces; i++) {
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 8,
        left: 35 + Math.random() * 30, // Concentrate in the middle
        delay: Math.random() * 2,
        shape: shapes[Math.floor(Math.random() * shapes.length)] as 'circle' | 'square' | 'triangle',
        rotationSpeed: Math.random() * 2 + 1,
      });
    }

    setPieces(newPieces);
  };

  useEffect(() => {
    if (isActive) {
      createPieces();
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const getShapeStyle = (shape: string) => {
    switch (shape) {
      case 'circle':
        return { borderRadius: '50%' };
      case 'square':
        return { borderRadius: '2px' };
      case 'triangle':
        return {
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          borderRadius: '0',
        };
      default:
        return {};
    }
  };

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <style>{fountainAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #FF69B4, #4169E1)',
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
        Fountain Confetti
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
              left: `${piece.left}%`,
              bottom: '-20px',
              background: piece.color,
              ...getShapeStyle(piece.shape),
              animation: `
                fountain 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                shimmer 1s ease-in-out infinite,
                rotate ${piece.rotationSpeed}s linear infinite
              `,
              animationDelay: `${piece.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_10; 