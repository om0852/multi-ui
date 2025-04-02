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

// Move styled components outside of the component
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
  image-rendering: pixelated;
  border: 2px solid #000;
  background: ${props => props.$checked ? '#000' : '#fff'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.8);
`;

const Pixel = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 25%;
  height: 25%;
  background: ${props => props.$color};
`;

const pixelColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

const pixelVariants = (index: number) => ({
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: {
    opacity: [0, 1, 1, 0],
    scale: [0, 1, 1, 0],
    transition: {
      duration: 0.3,
      delay: index * 0.05,
      ease: "steps(3)"
    }
  }
});

const containerVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.1,
      ease: "steps(2)"
    }
  }
};

const generatePixelGrid = (size: number = 4) => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid.push({
        x: (j * 100) / size,
        y: (i * 100) / size,
        index: i * size + j
      });
    }
  }
  return grid;
};

export default function Checkbox_57({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const pixelGrid = generatePixelGrid(4);

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
        variants={containerVariants}
        whileHover="hover"
        animate={value ? {
          y: [0, -2, 0],
          transition: { duration: 0.2, ease: "steps(3)" }
        } : {}}
      >
        {value && pixelGrid.map((pixel, i) => (
          <Pixel
            key={i}
            $color={pixelColors[i % pixelColors.length]}
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`
            }}
            variants={pixelVariants(pixel.index)}
            initial="unchecked"
            animate="checked"
          />
        ))}
      </PixelBox>
    </Container>
  );
} 