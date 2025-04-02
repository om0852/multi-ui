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

const RainbowBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1A1A1A' : '#fff'};
  border: 2px solid transparent;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
    z-index: -1;
    animation: ${props => props.$checked ? 'rainbow 2s linear infinite' : 'none'};
  }
  @keyframes rainbow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const RainbowTrail = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 10px;
  background: ${props => props.$color};
  opacity: 0;
  filter: blur(1px);
`;

const RainbowGlow = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%);
  opacity: 0;
  mix-blend-mode: screen;
`;

const RainbowSparkle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px ${props => props.$color};
`;

const CheckMark = styled(motion.path)`
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
`;

const rainbowColors = [
  '#FF0000', '#FF7F00', '#FFFF00',
  '#00FF00', '#0000FF', '#4B0082', '#8B00FF'
];

const generateTrails = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    delay: i * 0.1,
    length: 10 + Math.random() * 10
  }));
};

const generateSparkles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1,
    duration: 0.5 + Math.random()
  }));
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.5, 0.3],
    scale: [0.8, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const trailVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 1,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random()
    }
  })
};

const sparkleVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: ({ duration, delay }: { duration: number; delay: number }) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random()
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

export default function Checkbox_105({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const trails = generateTrails(12);
  const sparkles = generateSparkles(10);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <RainbowBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <RainbowBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <RainbowGlow
              variants={glowVariants}
              initial="unchecked"
              animate="checked"
            />
            {trails.map((trail, index) => (
              <RainbowTrail
                key={index}
                $color={rainbowColors[index % rainbowColors.length]}
                style={{
                  top: '50%',
                  left: '50%',
                  height: `${trail.length}px`,
                  transform: `translate(-50%, -50%) rotate(${trail.angle}deg) translateY(${trail.length}px)`
                }}
                variants={trailVariants}
                custom={{ delay: trail.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {sparkles.map((sparkle, index) => (
              <RainbowSparkle
                key={index}
                $color={rainbowColors[index % rainbowColors.length]}
                style={{
                  left: `${sparkle.x}%`,
                  top: `${sparkle.y}%`
                }}
                variants={sparkleVariants}
                custom={{ duration: sparkle.duration, delay: sparkle.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
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
      </RainbowBox>
    </Container>
  );
} 