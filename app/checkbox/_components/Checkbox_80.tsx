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

const VortexBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#000' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const SpiralArm = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at center,
    ${props => props.$color} 0%,
    transparent 70%
  );
  top: -50%;
  left: -50%;
  transform-origin: center;
  mix-blend-mode: screen;
`;

const Star = styled(motion.div)<{ $size: number; $color: string }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(0.5px);
`;

const CosmicDust = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle at center,
    ${props => props.$color} 0%,
    transparent 80%
  );
  top: -25%;
  left: -25%;
  opacity: 0;
  mix-blend-mode: screen;
`;

const cosmicColors = {
  primary: '#9C27B0',
  secondary: '#E91E63',
  accent: '#2196F3',
  star: '#FFFFFF'
};

const spiralVariants = {
  unchecked: {
    opacity: 0,
    scale: 0,
    rotate: 0
  },
  checked: (index: number) => ({
    opacity: [0, 0.6, 0.4],
    scale: 1,
    rotate: 360,
    transition: {
      duration: 3,
      delay: index * 0.2,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  })
};

const starVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }
  })
};

const dustVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.3, 0],
    scale: [0.8, 1.2, 0.8],
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const spiralArms = [
  { color: cosmicColors.primary, rotation: 0 },
  { color: cosmicColors.secondary, rotation: 120 },
  { color: cosmicColors.accent, rotation: 240 }
];

const stars = Array.from({ length: 15 }, (_, i) => ({
  size: Math.random() * 2 + 1,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  delay: Math.random() * 2
}));

export default function Checkbox_80({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <VortexBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <VortexBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <CosmicDust
          $color={cosmicColors.primary}
          variants={dustVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {spiralArms.map((arm, index) => (
          <SpiralArm
            key={index}
            $color={arm.color}
            style={{ rotate: arm.rotation }}
            variants={spiralVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
        {stars.map((star, index) => (
          <Star
            key={index}
            $size={star.size}
            $color={cosmicColors.star}
            style={{ left: star.x, top: star.y }}
            variants={starVariants}
            custom={star.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </VortexBox>
    </Container>
  );
} 