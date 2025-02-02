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

const ConfettiBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#805AD5' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Confetti = styled(motion.div)<{ $color: string; $shape: string }>`
  position: absolute;
  width: ${props => props.$shape === 'circle' ? '4px' : '3px'};
  height: ${props => props.$shape === 'circle' ? '4px' : '6px'};
  background: ${props => props.$color};
  border-radius: ${props => props.$shape === 'circle' ? '50%' : '0'};
  transform-origin: center;
`;

const CheckMark = styled(motion.svg)`
  position: absolute;
  width: 65%;
  height: 65%;
  top: 17.5%;
  left: 17.5%;
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const confettiColors = ['#B794F4', '#9F7AEA', '#805AD5', '#6B46C1'];
const confettiShapes = ['circle', 'rectangle'];

const generateConfetti = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    delay: i * 0.05,
    distance: Math.random() * 15 + 5,
    rotation: Math.random() * 360,
    shape: confettiShapes[i % confettiShapes.length]
  }));
};

const confettiVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    y: 0,
    rotate: 0
  },
  checked: ({ angle, distance, rotation }: { angle: number; distance: number; rotation: number }) => ({
    scale: [0, 1, 1, 0],
    opacity: [0, 1, 1, 0],
    x: [0, Math.cos(angle * Math.PI / 180) * distance],
    y: [0, Math.sin(angle * Math.PI / 180) * distance],
    rotate: [0, rotation],
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const checkVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Checkbox_90({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const confetti = generateConfetti(16);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <ConfettiBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <ConfettiBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {confetti.map((piece, index) => (
              <Confetti
                key={index}
                $color={confettiColors[index % confettiColors.length]}
                $shape={piece.shape}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                variants={confettiVariants}
                custom={piece}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <CheckMark
              viewBox="0 0 24 24"
            >
              <motion.path
                d="M20 6L9 17L4 12"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </CheckMark>
          </>
        )}
      </ConfettiBox>
    </Container>
  );
} 