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

const MorphBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#38A169' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const MorphPath = styled(motion.path)`
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const Particle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const particleColors = ['#9AE6B4', '#68D391', '#48BB78', '#38A169'];

const morphVariants = {
  unchecked: {
    d: "M12 12 A 0 0 0 0 0 12 12 A 0 0 0 0 0 12 12"
  },
  checking: {
    d: [
      "M12 12 A 0 0 0 0 0 12 12 A 0 0 0 0 0 12 12",
      "M12 12 A 5 5 0 0 1 12 12 A 5 5 0 0 1 12 12",
      "M20 6L9 17L4 12"
    ],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const particleVariants = {
  unchecked: {
    x: 0,
    y: 0,
    opacity: 0
  },
  checked: (i: number) => ({
    x: [0, (i % 2 === 0 ? 15 : -15) * Math.cos(i * Math.PI / 4)],
    y: [0, -15 * Math.sin(i * Math.PI / 4)],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.5,
      delay: 0.2 + (i * 0.05)
    }
  })
};

export default function Checkbox_83({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const particles = Array.from({ length: 8 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <MorphBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <MorphBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <motion.svg
          viewBox="0 0 24 24"
          style={{
            position: 'absolute',
            width: '65%',
            height: '65%',
            top: '17.5%',
            left: '17.5%'
          }}
        >
          <MorphPath
            variants={morphVariants}
            initial="unchecked"
            animate={value ? "checking" : "unchecked"}
          />
        </motion.svg>
        {value && particles.map((_, i) => (
          <Particle
            key={i}
            $color={particleColors[i % particleColors.length]}
            style={{
              top: '50%',
              left: '50%'
            }}
            variants={particleVariants}
            custom={i}
            initial="unchecked"
            animate="checked"
          />
        ))}
      </MorphBox>
    </Container>
  );
} 