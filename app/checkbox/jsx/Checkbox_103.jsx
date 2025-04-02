'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: inline-block;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const GalaxyBox = styled(motion.div)`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#0F172A' : '#fff'};
  border: 2px solid #6366F1;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const GalaxyCore = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.4), transparent 70%);
  opacity: 0;
`;

const GalaxyStar = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px ${props => props.$color};
`;

const GalaxySpiral = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  transform-origin: center;
`;

const CheckMark = styled(motion.path)`
  stroke: #A5B4FC;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px rgba(165, 180, 252, 0.5));
`;

const galaxyColors = ['#A5B4FC', '#818CF8', '#6366F1'];

const generateStars = count => Array.from({ length: count }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 0.5,
  duration: 0.5 + Math.random()
}));

const generateSpirals = count => Array.from({ length: count }).map((_, i) => ({
  scale: 0.2 + (i * 0.2),
  rotation: (i * 360) / count,
  delay: i * 0.1
}));

export default function Checkbox({ value, onChange, disabled = false, size = "medium" }) {
  const [isClient, setIsClient] = useState(false);
  const stars = generateStars(12);
  const spirals = generateSpirals(3);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <GalaxyBox $checked={value} $size={size} />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <GalaxyBox $checked={value} $size={size}>
        {value && (
          <>
            <GalaxyCore animate={{ opacity: [0, 0.6, 0.4], scale: [0.8, 1.2, 1], rotate: 360, transition: { duration: 3, repeat: Infinity, repeatType: "reverse" } }} />
            {spirals.map((spiral, index) => (
              <GalaxySpiral key={index} $color={galaxyColors[index % galaxyColors.length]} style={{ transform: `scale(${spiral.scale}) rotate(${spiral.rotation}deg)` }} animate={{ opacity: [0, 0.4, 0], scale: [0, 1], rotate: [0, 360], transition: { duration: 2, delay: spiral.delay, repeat: Infinity, ease: "linear" } }} />
            ))}
            {stars.map((star, index) => (
              <GalaxyStar key={index} $color={galaxyColors[index % galaxyColors.length]} style={{ left: `${star.x}%`, top: `${star.y}%` }} animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], transition: { duration: star.duration, delay: star.delay, repeat: Infinity, repeatDelay: Math.random() * 2 } }} />
            ))}
          </>
        )}
      </GalaxyBox>
    </Container>
  );
}
