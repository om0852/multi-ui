'use client';
import React, { useEffect, useState } from 'react';

const burstAnimation = `
  @keyframes burst {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: scale(1.2) rotate(180deg);
      opacity: 0.8;
    }
    100% {
      transform: scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-10px) translateX(5px);
    }
    50% {
      transform: translateY(0) translateX(10px);
    }
    75% {
      transform: translateY(10px) translateX(5px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
`;

interface ConfettiPiece {
  id: number;
  color: string;
  size: number;
  left: number;
  top: number;
  delay: number;
}

const Confetti_8: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#FF69B4', // Pink
    '#4169E1', // Royal Blue
    '#FFD700', // Gold
    '#32CD32', // Lime Green
    '#FF4500', // Orange Red
    '#9370DB', // Medium Purple
  ];

  const createPieces = () => {
    const newPieces: ConfettiPiece[] = [];
    const numPieces = 50;

    for (let i = 0; i < numPieces; i++) {
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
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

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <style>{burstAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
          color: 'white',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Burst Confetti
      </button>

      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '16px',
        background: '#1a1a1a',
      }}>
        {isActive && pieces.map((piece) => (
          <div
            key={piece.id}
            style={{
              position: 'absolute',
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              left: `${piece.left}%`,
              top: `${piece.top}%`,
              background: piece.color,
              borderRadius: '50%',
              animation: `
                burst 2s ease-out forwards,
                float 3s ease-in-out infinite
              `,
              animationDelay: `${piece.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_8; 