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

const SpaceBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1a1a1a' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Galaxy = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center,
    #9C27B0,
    #673AB7 20%,
    #3F51B5 40%,
    transparent 60%
  );
  top: -50%;
  left: -50%;
  opacity: 0;
  filter: blur(2px);
`;

const Star = styled(motion.div)<{ $size: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: white;
  border-radius: 50%;
  filter: blur(0.5px);
`;

const Comet = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 8px;
  background: linear-gradient(to bottom, white, transparent);
  transform-origin: center;
`;

const galaxyVariants = {
  unchecked: {
    scale: 0,
    rotate: 0,
    opacity: 0
  },
  checked: {
    scale: 1,
    rotate: 360,
    opacity: 0.8,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
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
      duration: 2,
      delay: delay * 0.3,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

const cometVariants = {
  unchecked: {
    x: "-100%",
    y: "-100%",
    opacity: 0
  },
  checked: {
    x: "200%",
    y: "200%",
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "linear"
    }
  }
};

export default function Checkbox_69({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const stars = [
    { size: 2, x: '20%', y: '20%', delay: 0 },
    { size: 3, x: '70%', y: '30%', delay: 1 },
    { size: 2, x: '40%', y: '60%', delay: 2 },
    { size: 3, x: '80%', y: '70%', delay: 3 },
    { size: 2, x: '30%', y: '80%', delay: 4 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <SpaceBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <SpaceBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <Galaxy
          variants={galaxyVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {stars.map((star, index) => (
          <Star
            key={index}
            $size={star.size}
            style={{ left: star.x, top: star.y }}
            variants={starVariants}
            custom={star.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
        <Comet
          style={{ rotate: 45 }}
          variants={cometVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
      </SpaceBox>
    </Container>
  );
} 