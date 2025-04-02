import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const rotate3D = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(90deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(0deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.9);
    opacity: 1;
  }
`;

const electronOrbit = keyframes`
  0% {
    transform: rotateZ(0deg) translateX(0) rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg) translateX(0) rotateZ(-360deg);
  }
`;

const getSizeValue = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '60px';
    case 'large':
      return '120px';
    default:
      return '80px';
  }
};

const Container = styled.div<{ $size: string }>`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const Molecule = styled.div<{ $color: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate3D} 8s linear infinite;
`;

const Atom = styled.div<{ $color: string; $size: number; $x: number; $y: number; $z: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) 
             translate3d(${props => props.$x}px, ${props => props.$y}px, ${props => props.$z}px);
  animation: ${pulse} 2s ease-in-out infinite;
  filter: drop-shadow(0 0 5px ${props => props.$color});

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, 
      rgba(255, 255, 255, 0.8),
      transparent 70%
    );
  }
`;

const Bond = styled.div<{ 
  $color: string;
  $length: number;
  $x: number;
  $y: number;
  $z: number;
  $rotateX: number;
  $rotateY: number;
  $rotateZ: number;
}>`
  position: absolute;
  width: ${props => props.$length}px;
  height: 2px;
  background: ${props => props.$color}80;
  left: 50%;
  top: 50%;
  transform-origin: left center;
  transform: translate(-50%, -50%)
             translate3d(${props => props.$x}px, ${props => props.$y}px, ${props => props.$z}px)
             rotateX(${props => props.$rotateX}deg)
             rotateY(${props => props.$rotateY}deg)
             rotateZ(${props => props.$rotateZ}deg);
`;

const Electron = styled.div<{ $color: string; $orbitSize: number; $delay: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
  left: calc(50% - 2px);
  top: calc(50% - 2px);
  transform-origin: ${props => props.$orbitSize}px center;
  animation: ${electronOrbit} 3s linear infinite;
  animation-delay: ${props => props.$delay}s;
  filter: drop-shadow(0 0 2px ${props => props.$color});
`;

const MolecularLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  const sizeValue = getSizeValue(size);
  const numSize = parseInt(sizeValue);
  const atomSize = numSize * 0.15;
  const bondLength = numSize * 0.25;

  // Define atom positions in 3D space
  const atoms = [
    { x: 0, y: 0, z: 0, size: atomSize * 1.2 },
    { x: bondLength, y: bondLength, z: bondLength, size: atomSize },
    { x: -bondLength, y: -bondLength, z: bondLength, size: atomSize },
    { x: bondLength, y: -bondLength, z: -bondLength, size: atomSize },
    { x: -bondLength, y: bondLength, z: -bondLength, size: atomSize }
  ];

  // Define bonds between atoms
  const bonds = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 }
  ].map(bond => {
    const fromAtom = atoms[bond.from];
    const toAtom = atoms[bond.to];
    const dx = toAtom.x - fromAtom.x;
    const dy = toAtom.y - fromAtom.y;
    const dz = toAtom.z - fromAtom.z;
    const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
    
    // Calculate rotation angles
    const rotateX = Math.atan2(Math.sqrt(dx * dx + dz * dz), dy) * (180 / Math.PI);
    const rotateY = Math.atan2(dz, dx) * (180 / Math.PI);
    
    return {
      x: fromAtom.x,
      y: fromAtom.y,
      z: fromAtom.z,
      length,
      rotateX,
      rotateY,
      rotateZ: 0
    };
  });

  return (
    <Container $size={sizeValue} className={className}>
      <Molecule $color={color}>
        {atoms.map((atom, index) => (
          <React.Fragment key={index}>
            <Atom
              $color={color}
              $size={atom.size}
              $x={atom.x}
              $y={atom.y}
              $z={atom.z}
            />
            {index > 0 && (
              <Electron
                $color={color}
                $orbitSize={bondLength}
                $delay={index * 0.5}
              />
            )}
          </React.Fragment>
        ))}
        {bonds.map((bond, index) => (
          <Bond
            key={index}
            $color={color}
            $length={bond.length}
            $x={bond.x}
            $y={bond.y}
            $z={bond.z}
            $rotateX={bond.rotateX}
            $rotateY={bond.rotateY}
            $rotateZ={bond.rotateZ}
          />
        ))}
      </Molecule>
    </Container>
  );
};

export default MolecularLoader; 