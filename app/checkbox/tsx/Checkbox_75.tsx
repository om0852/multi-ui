'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const Container = styled.div<{ $disabled?: boolean }>`
  display: inline-block;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const RetroBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#111' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  image-rendering: pixelated;
`;

const Pixel = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 25%;
  height: 25%;
  background: ${props => props.$color};
  image-rendering: pixelated;
`;

const Sparkle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const retroColors = {
  primary: '#FFD700',
  secondary: '#FFA500',
  sparkle: '#FFFFFF'
};

const pixelVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: delay * 0.05
    }
  })
};

const sparkleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.5,
      delay: delay * 0.1,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

const checkmarkPixels = [
  { x: '25%', y: '50%' },
  { x: '50%', y: '75%' },
  { x: '75%', y: '25%' }
];

const sparklePositions = [
  { x: '20%', y: '20%', delay: 0 },
  { x: '80%', y: '30%', delay: 1 },
  { x: '30%', y: '70%', delay: 2 },
  { x: '70%', y: '80%', delay: 3 }
];

export default function Checkbox_75({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <RetroBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <RetroBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {checkmarkPixels.map((pixel, index) => (
          <Pixel
            key={index}
            $color={retroColors.primary}
            style={{ left: pixel.x, top: pixel.y }}
            variants={pixelVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
        {sparklePositions.map((sparkle, index) => (
          <Sparkle
            key={index}
            $color={retroColors.sparkle}
            style={{ left: sparkle.x, top: sparkle.y }}
            variants={sparkleVariants}
            custom={sparkle.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </RetroBox>
    </Container>
  );
} 