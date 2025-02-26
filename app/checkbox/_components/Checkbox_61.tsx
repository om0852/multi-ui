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

const DNABox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: #1a1a1a;
  border: 2px solid #333;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

const Strand = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Base = styled(motion.div)<{ $color: string }>`
  width: 30%;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${props => props.$color};
    border-radius: 50%;
    left: -2px;
    top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${props => props.$color};
    border-radius: 50%;
    right: -2px;
    top: 0;
  }
`;

const baseColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

const strandVariants = {
  unchecked: {
    rotate: 0
  },
  checked: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const baseVariants = {
  unchecked: (i: number) => ({
    x: 0,
    opacity: 0.3,
    rotate: i * 45
  }),
  checked: (i: number) => ({
    x: [-10, 10, -10],
    opacity: 1,
    rotate: [i * 45, i * 45 + 180, i * 45 + 360],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      delay: i * 0.2
    }
  })
};

export default function Checkbox_61({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const baseCount = 4;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <DNABox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <DNABox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <Strand
          variants={strandVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        >
          {Array.from({ length: baseCount }).map((_, i) => (
            <Base
              key={i}
              $color={baseColors[i % baseColors.length]}
              variants={baseVariants}
              custom={i}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
          ))}
        </Strand>
      </DNABox>
    </Container>
  );
} 