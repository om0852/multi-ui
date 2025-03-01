'use client';
import React, { useEffect, useState } from 'react';

const crystalAnimation = `
  @keyframes crystalFloat {
    0% {
      transform: translate(var(--start-x), var(--start-y)) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--end-x), var(--end-y)) rotate(var(--rotation));
      opacity: 0;
    }
  }

  @keyframes prismLight {
    0% {
      filter: hue-rotate(0deg) brightness(1);
    }
    50% {
      filter: hue-rotate(180deg) brightness(1.5);
    }
    100% {
      filter: hue-rotate(360deg) brightness(1);
    }
  }

  @keyframes crystalSpin {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;

interface CrystalPiece {
  id: number;
  baseColor: string;
  size: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rotation: number;
  delay: number;
  duration: number;
  shape: 'diamond' | 'hexagon' | 'octagon';
}

const Confetti_17: React.FC = () => {
  const [crystals, setCrystals] = useState<CrystalPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = [
    '#E6E6FA', // Lavender
    '#E0FFFF', // Light Cyan
    '#F0FFF0', // Honeydew
    '#FFF0F5', // Lavender Blush
    '#F0FFFF', // Azure
    '#F5F5DC', // Beige
  ];

  const shapes = ['diamond', 'hexagon', 'octagon'];

  const getShapeStyle = (shape: string) => {
    switch (shape) {
      case 'diamond':
        return {
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        };
      case 'hexagon':
        return {
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        };
      case 'octagon':
        return {
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        };
      default:
        return {};
    }
  };

  const createCrystals = () => {
    const newCrystals: CrystalPiece[] = [];
    const numCrystals = 30;

    for (let i = 0; i < numCrystals; i++) {
      const startX = Math.random() * 300 - 150;
      const startY = Math.random() * 300 - 150;
      const endX = Math.random() * 300 - 150;
      const endY = Math.random() * 300 - 150;

      newCrystals.push({
        id: i,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 20 + 15,
        startX,
        startY,
        endX,
        endY,
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 3,
        shape: shapes[Math.floor(Math.random() * shapes.length)] as 'diamond' | 'hexagon' | 'octagon',
      });
    }

    setCrystals(newCrystals);
  };

  useEffect(() => {
    if (isActive) {
      createCrystals();
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
      <style>{crystalAnimation}</style>
      
      <button
        onClick={() => setIsActive(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #E6E6FA, #F0FFFF)',
          color: '#4A4A4A',
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
        Crystal Confetti
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
        {isActive && crystals.map((crystal) => (
          <div
            key={crystal.id}
            style={{
              position: 'absolute',
              width: `${crystal.size}px`,
              height: `${crystal.size}px`,
              left: '50%',
              top: '50%',
              background: `linear-gradient(135deg, ${crystal.baseColor}, transparent)`,
              backdropFilter: 'blur(2px)',
              ...getShapeStyle(crystal.shape),
              transform: 'translate(-50%, -50%)',
              '--start-x': `${crystal.startX}px`,
              '--start-y': `${crystal.startY}px`,
              '--end-x': `${crystal.endX}px`,
              '--end-y': `${crystal.endY}px`,
              '--rotation': `${crystal.rotation}deg`,
              animation: `
                crystalFloat ${crystal.duration}s ease-out forwards,
                prismLight ${crystal.duration * 0.5}s linear infinite,
                crystalSpin ${crystal.duration * 0.7}s linear infinite
              `,
              animationDelay: `${crystal.delay}s`,
              boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.2),
                inset 0 0 10px rgba(255, 255, 255, 0.1)
              `,
            } as React.CSSProperties & {
              '--start-x': string;
              '--start-y': string;
              '--end-x': string;
              '--end-y': string;
              '--rotation': string;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Confetti_17; 