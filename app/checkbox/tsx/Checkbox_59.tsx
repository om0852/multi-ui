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

const PaintBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: #fff;
  border: 2px solid #333;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
`;

const PaintDrop = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  border-radius: 50%;
  width: 150%;
  height: 150%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
`;

const PaintSplash = styled(motion.div)<{ $color: string; $angle: number }>`
  position: absolute;
  width: 30%;
  height: 30%;
  background: ${props => props.$color};
  border-radius: 50%;
  transform-origin: center;
  transform: rotate(${props => props.$angle}deg) translateX(100%) scale(0);
`;

const splashColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

const dropVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const splashVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1.2, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.4,
      delay: delay * 0.1,
      ease: "easeOut"
    }
  })
};

export default function Checkbox_59({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const splashAngles = [0, 90, 180, 270];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PaintBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PaintBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <PaintDrop
          $color={splashColors[0]}
          variants={dropVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {splashAngles.map((angle, index) => (
          <PaintSplash
            key={angle}
            $color={splashColors[(index + 1) % splashColors.length]}
            $angle={angle}
            variants={splashVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </PaintBox>
    </Container>
  );
} 