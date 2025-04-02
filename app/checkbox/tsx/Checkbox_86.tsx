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

const GlitchBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1A202C' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const GlitchLayer = styled(motion.div)<{ $color: string; $offset: number }>`
  position: absolute;
  inset: 0;
  background: ${props => props.$color};
  mix-blend-mode: screen;
  opacity: 0;
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

const glitchColors = ['#FF0000', '#00FF00', '#0000FF'];

const glitchVariants = {
  unchecked: {
    opacity: 0,
    x: 0,
    y: 0
  },
  checked: (i: number) => ({
    opacity: [0, 0.5, 0],
    x: [0, (i - 1) * 3, 0],
    y: [0, (i - 1) * -2, 0],
    transition: {
      duration: 0.2,
      repeat: 3,
      repeatType: "reverse" as const,
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
    opacity: [1, 0.5, 1],
    transition: {
      duration: 0.3,
      opacity: {
        duration: 0.2,
        repeat: 3,
        repeatType: "reverse"
      }
    }
  }
};

const boxVariants = {
  checked: {
    scale: [1, 1.05, 0.95, 1],
    transition: {
      duration: 0.3
    }
  }
};

export default function Checkbox_86({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <GlitchBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <GlitchBox
        $checked={value}
        $size={size}
        variants={boxVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <>
            {glitchColors.map((color, index) => (
              <GlitchLayer
                key={index}
                $color={color}
                $offset={index - 1}
                variants={glitchVariants}
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
      </GlitchBox>
    </Container>
  );
} 
