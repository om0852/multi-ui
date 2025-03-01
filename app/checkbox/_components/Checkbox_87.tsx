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

const PixelBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#2D3748' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Pixel = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background: ${props => props.$color};
  opacity: 0;
`;

const pixelColors = ['#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096'];

const generatePixels = (size: number) => {
  const grid = 5;
  const pixels = [];
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      pixels.push({
        x: (x * 100) / grid,
        y: (y * 100) / grid,
        delay: (x + y) * 0.05,
        size,
      });
    }
  }
  return pixels;
};

const pixelVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  })
};

const boxVariants = {
  checked: {
    scale: [1, 0.95, 1],
    transition: {
      duration: 0.2
    }
  }
};

export default function Checkbox_87({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const pixels = generatePixels(size === 'small' ? 20 : size === 'large' ? 32 : 26);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PixelBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PixelBox
        $checked={value}
        $size={size}
        variants={boxVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && pixels.map((pixel, index) => (
          <Pixel
            key={index}
            $color={pixelColors[index % pixelColors.length]}
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`
            }}
            variants={pixelVariants}
            custom={pixel.delay}
            initial="unchecked"
            animate="checked"
          />
        ))}
      </PixelBox>
    </Container>
  );
} 