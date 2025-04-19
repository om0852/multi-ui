'use client';
import React, { useEffect, useState } from 'react';

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

  // Automatically start confetti when component mounts
  useEffect(() => {
    createPieces();
    
    // Continuously create new confetti pieces for a more dynamic effect
    const refreshInterval = setInterval(() => {
      createPieces();
    }, 3000); // Create new pieces every 3 seconds
    
    // Cleanup when component unmounts
    return () => clearInterval(refreshInterval);
  }, []);

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
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      <style jsx>{`
        @keyframes fountain {
          0% {
            transform: translateY(0) scale(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-30vh) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(60vh) scale(0.5);
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
        
        .confetti-piece {
          position: absolute;
          bottom: -20px;
        }
      `}</style>
      
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            left: `${piece.left}%`,
            backgroundColor: piece.color,
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
  );
};

export default Confetti_10; 