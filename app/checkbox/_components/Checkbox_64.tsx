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

const LeafBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#4CAF50' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Stem = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 40%;
  background: #81C784;
  bottom: 10%;
  left: 50%;
  transform-origin: bottom center;
`;

const Leaf = styled(motion.div)<{ $angle: number; $scale: number; $color: string }>`
  position: absolute;
  width: 40%;
  height: 40%;
  background: ${props => props.$color};
  border-radius: 50% 0;
  bottom: ${props => 30 + props.$angle * 2}%;
  left: 50%;
  transform-origin: bottom left;
  transform: rotate(${props => props.$angle}deg) scale(${props => props.$scale});
`;

const leafColors = ['#A5D6A7', '#81C784', '#66BB6A', '#4CAF50'];

const stemVariants = {
  unchecked: {
    scaleY: 0,
    opacity: 0
  },
  checked: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const leafVariants = {
  unchecked: {
    scale: 1,
    opacity: 0.5,
    rotate: 0
  },
  checked: {
    scale: 1.1,
    opacity: 1,
    rotate: [0, 360],
    transition: { duration: 0.5 }
  }
};

export default function Checkbox_64({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const leaves = [
    { angle: -45, scale: 0.8 },
    { angle: -15, scale: 1 },
    { angle: 15, scale: 1 },
    { angle: 45, scale: 0.8 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <LeafBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <LeafBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <Stem
          variants={stemVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {leaves.map((leaf, index) => (
          <Leaf
            key={index}
            $angle={leaf.angle}
            $scale={leaf.scale}
            $color={leafColors[index]}
            variants={leafVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </LeafBox>
    </Container>
  );
} 
