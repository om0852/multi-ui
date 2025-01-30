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

const SmokeBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#2D3748' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const SmokeParticle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(2px);
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

const smokeColors = [
  'rgba(160, 174, 192, 0.4)',
  'rgba(160, 174, 192, 0.3)',
  'rgba(160, 174, 192, 0.2)',
  'rgba(160, 174, 192, 0.1)'
];

const generateSmoke = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1,
    duration: 0.8 + Math.random() * 0.4
  }));
};

const smokeVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    y: 0
  },
  checked: ({ delay, duration }: { delay: number; duration: number }) => ({
    scale: [0, 1.5, 0],
    opacity: [0, 0.8, 0],
    y: [0, -20],
    x: [0, Math.random() * 10 - 5],
    transition: {
      duration,
      delay,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: Math.random() * 0.5
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
    opacity: [0, 1, 0.8],
    transition: {
      duration: 0.3,
      opacity: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

export default function Checkbox_94({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const smokeParticles = generateSmoke(12);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <SmokeBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <SmokeBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {smokeParticles.map((particle, index) => (
              <SmokeParticle
                key={index}
                $color={smokeColors[index % smokeColors.length]}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`
                }}
                variants={smokeVariants}
                custom={{
                  delay: particle.delay,
                  duration: particle.duration
                }}
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
      </SmokeBox>
    </Container>
  );
} 