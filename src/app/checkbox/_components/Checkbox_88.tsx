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

const WaveBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#0BC5EA' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Wave = styled(motion.div)<{ $color: string; $delay: number }>`
  position: absolute;
  width: 200%;
  height: 200%;
  background: ${props => props.$color};
  opacity: 0;
  border-radius: 40%;
  left: -50%;
  top: -50%;
`;

const CheckMark = styled(motion.svg)`
  position: absolute;
  width: 65%;
  height: 65%;
  top: 17.5%;
  left: 17.5%;
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const waveColors = ['rgba(11, 197, 234, 0.4)', 'rgba(11, 197, 234, 0.3)', 'rgba(11, 197, 234, 0.2)'];

const waveVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    rotate: 0
  },
  checked: (delay: number) => ({
    scale: 1,
    opacity: [0, 0.5, 0],
    rotate: 360,
    transition: {
      duration: 2,
      delay: delay * 0.2,
      repeat: Infinity,
      ease: "linear"
    }
  })
};

const checkVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const boxVariants = {
  checked: {
    scale: [1, 0.95, 1],
    transition: {
      duration: 0.2
    }
  }
};

export default function Checkbox_88({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <WaveBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <WaveBox
        $checked={value}
        $size={size}
        variants={boxVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <>
            {waveColors.map((color, index) => (
              <Wave
                key={index}
                $color={color}
                $delay={index}
                variants={waveVariants}
                custom={index}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <CheckMark
              viewBox="0 0 24 24"
            >
              <motion.path
                d="M20 6L9 17L4 12"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </CheckMark>
          </>
        )}
      </WaveBox>
    </Container>
  );
} 