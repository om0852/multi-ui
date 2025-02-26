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

const FireBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1a1a1a' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Flame = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.$color};
  filter: blur(2px);
  transform-origin: center bottom;
  border-radius: 50% 50% 20% 20%;
`;

const Spark = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const flameColors = {
  outer: '#FF9800',
  middle: '#FF5722',
  inner: '#F44336',
  spark: '#FFEB3B'
};

const flameVariants = {
  unchecked: {
    scaleY: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scaleY: [0.8, 1, 0.8],
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay * 0.1,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  })
};

const sparkVariants = {
  unchecked: {
    y: 0,
    opacity: 0,
    scale: 0
  },
  checked: (delay: number) => ({
    y: [-10, -20],
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 0.6,
      delay: delay * 0.2,
      repeat: Infinity
    }
  })
};

export default function Checkbox_70({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const sparks = [
    { x: '30%', delay: 0 },
    { x: '50%', delay: 1 },
    { x: '70%', delay: 2 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <FireBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <FireBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <Flame
          $color={flameColors.outer}
          variants={flameVariants}
          custom={0}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
          style={{ scale: 1.2 }}
        />
        <Flame
          $color={flameColors.middle}
          variants={flameVariants}
          custom={1}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
          style={{ scale: 0.9 }}
        />
        <Flame
          $color={flameColors.inner}
          variants={flameVariants}
          custom={2}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
          style={{ scale: 0.6 }}
        />
        {sparks.map((spark, index) => (
          <Spark
            key={index}
            $color={flameColors.spark}
            style={{ left: spark.x, bottom: '30%' }}
            variants={sparkVariants}
            custom={spark.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </FireBox>
    </Container>
  );
} 
