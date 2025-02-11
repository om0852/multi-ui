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

const NeonBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#000' : '#fff'};
  border: 2px solid #FF00FF;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  box-shadow: ${props => props.$checked ? '0 0 10px #FF00FF, inset 0 0 10px #FF00FF' : 'none'};
`;

const NeonGlow = styled(motion.div)`
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle at center, rgba(255, 0, 255, 0.3), transparent 70%);
  opacity: 0;
`;

const NeonFlare = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FF00FF, transparent);
  opacity: 0;
  transform-origin: left;
`;

const NeonPulse = styled(motion.div)`
  position: absolute;
  inset: 0;
  border: 2px solid #FF00FF;
  border-radius: 2px;
  opacity: 0;
`;

const CheckMark = styled(motion.path)`
  stroke: #FF00FF;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px #FF00FF);
`;

const generateFlares = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    y: (i * 100) / (count - 1),
    delay: i * 0.15
  }));
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.6, 0.4],
    scale: [0.8, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const flareVariants = {
  unchecked: {
    opacity: 0,
    scaleX: 0
  },
  checked: (delay: number) => ({
    opacity: [0, 1, 0],
    scaleX: [0, 1],
    transition: {
      duration: 1,
      delay,
      repeat: Infinity,
      repeatDelay: 2
    }
  })
};

const pulseVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.8, 0],
    scale: [0.8, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity
    }
  }
};

const checkVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 0.3,
      opacity: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

export default function Checkbox_101({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const flares = generateFlares(5);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <NeonBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <NeonBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <NeonGlow
              variants={glowVariants}
              initial="unchecked"
              animate="checked"
            />
            {flares.map((flare, index) => (
              <NeonFlare
                key={index}
                style={{
                  top: `${flare.y}%`,
                  left: '-50%'
                }}
                variants={flareVariants}
                custom={flare.delay}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <NeonPulse
              variants={pulseVariants}
              initial="unchecked"
              animate="checked"
            />
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
              <CheckMark
                d="M20 6L9 17L4 12"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </motion.svg>
          </>
        )}
      </NeonBox>
    </Container>
  );
} 