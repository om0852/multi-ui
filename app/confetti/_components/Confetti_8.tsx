'use client';
import React, { useEffect, useState } from 'react';

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
  
  const colors = [
    '#FF69B4', // Pink
    '#4169E1', // Royal Blue
    '#FFD700', // Gold
    '#32CD32', // Lime Green
    '#FF4500', // Orange Red
    '#9370DB', // Medium Purple
  ];

  // Create confetti pieces based on screen size
  const createPieces = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numPieces = Math.min(50, Math.floor((screenWidth * screenHeight) / 10000)); // Adjust number based on screen size
    
    const newPieces: ConfettiPiece[] = [];

    for (let i = 0; i < numPieces; i++) {
      newPieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        left: Math.random() * 100, // percentage for responsive positioning
        top: Math.random() * 100,  // percentage for responsive positioning
        delay: Math.random() * 2,
      });
    }

    setPieces(newPieces);
  };

  useEffect(() => {
    // Create pieces on initial render
    createPieces();
    
    // Re-create on window resize for responsiveness
    window.addEventListener('resize', createPieces);
    
    // Clean up
    return () => window.removeEventListener('resize', createPieces);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      <style jsx>{`
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
        
        .confetti-piece {
          position: absolute;
          border-radius: 50%;
          animation: burst 2s ease-out forwards, float 3s ease-in-out infinite;
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
            top: `${piece.top}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti_8; 