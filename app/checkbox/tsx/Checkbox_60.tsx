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

const WeatherBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#4A90E2' : '#FFD700'};
  border: 2px solid #333;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Sun = styled(motion.div)`
  position: absolute;
  width: 60%;
  height: 60%;
  background: #FFD700;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  box-shadow: 0 0 10px #FFD700;
`;

const Cloud = styled(motion.div)`
  position: absolute;
  width: 70%;
  height: 40%;
  background: #fff;
  border-radius: 20px;
  top: 30%;
  left: 15%;
  opacity: 0;
`;

const Raindrop = styled(motion.div)`
  position: absolute;
  width: 10%;
  height: 20%;
  background: #fff;
  border-radius: 0 0 2px 2px;
  opacity: 0;
`;

const sunVariants = {
  unchecked: {
    scale: 1,
    y: 0,
    opacity: 1
  },
  checked: {
    scale: 0,
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const cloudVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.5,
    y: -20
  },
  checked: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2
    }
  }
};

const rainVariants = {
  unchecked: {
    opacity: 0,
    y: 0
  },
  checked: (delay: number) => ({
    opacity: [0, 1, 0],
    y: [0, 15],
    transition: {
      duration: 0.5,
      delay: delay * 0.1 + 0.4,
      repeat: Infinity,
      repeatDelay: 0.2
    }
  })
};

export default function Checkbox_60({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const raindrops = [
    { left: '30%', delay: 0 },
    { left: '50%', delay: 1 },
    { left: '70%', delay: 2 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <WeatherBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <WeatherBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <Sun
          variants={sunVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <Cloud
          variants={cloudVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {raindrops.map((drop, index) => (
          <Raindrop
            key={index}
            style={{ left: drop.left }}
            variants={rainVariants}
            custom={drop.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </WeatherBox>
    </Container>
  );
} 