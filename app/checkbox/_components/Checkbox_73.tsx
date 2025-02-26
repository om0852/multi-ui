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

const MatrixBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#000' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Character = styled(motion.div)<{ $color: string }>`
  position: absolute;
  font-family: monospace;
  font-size: 10px;
  color: ${props => props.$color};
  text-shadow: 0 0 2px ${props => props.$color};
  user-select: none;
`;

const matrixColors = {
  bright: '#00FF41',
  medium: '#00CC33',
  dim: '#008F11'
};

const characterVariants = {
  unchecked: {
    opacity: 0,
    y: -20
  },
  checked: (delay: number) => ({
    opacity: [0, 1, 0],
    y: ["0%", "100%"],
    transition: {
      duration: 2,
      delay: delay * 0.3,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }
  })
};

const getRandomChar = () => {
  const chars = '01アイウエオカキクケコサシスセソタチツテト';
  return chars[Math.floor(Math.random() * chars.length)];
};

export default function Checkbox_73({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const characters = Array.from({ length: 12 }, (_, i) => ({
    char: getRandomChar(),
    x: `${Math.random() * 80 + 10}%`,
    delay: Math.random() * 2,
    color: i % 3 === 0 ? matrixColors.bright : 
           i % 3 === 1 ? matrixColors.medium : 
           matrixColors.dim
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <MatrixBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <MatrixBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {characters.map((char, index) => (
          <Character
            key={index}
            $color={char.color}
            style={{ left: char.x }}
            variants={characterVariants}
            custom={char.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          >
            {char.char}
          </Character>
        ))}
      </MatrixBox>
    </Container>
  );
} 