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

const GalaxyBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#0F172A' : '#fff'};
  border: 2px solid #6366F1;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const GalaxyCore = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.4), transparent 70%);
  opacity: 0;
`;

const GalaxyStar = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px ${props => props.$color};
`;

const GalaxySpiral = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  transform-origin: center;
`;

const CheckMark = styled(motion.path)`
  stroke: #A5B4FC;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px rgba(165, 180, 252, 0.5));
`;

const galaxyColors = ['#A5B4FC', '#818CF8', '#6366F1'];

const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1,
    duration: 0.5 + Math.random()
  }));
};

const generateSpirals = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    scale: 0.2 + (i * 0.2),
    rotation: (i * 360) / count,
    delay: i * 0.1
  }));
};

const coreVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8,
    rotate: 0
  },
  checked: {
    opacity: [0, 0.6, 0.4],
    scale: [0.8, 1.2, 1],
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const starVariants = {
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
      repeatDelay: Math.random() * 2
    }
  })
};

const spiralVariants = {
  unchecked: {
    opacity: 0,
    scale: 0,
    rotate: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    opacity: [0, 0.4, 0],
    scale: [0, 1],
    rotate: [0, 360],
    transition: {
      duration: 2,
      delay,
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
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 0.3,
      opacity: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

export default function Checkbox_103({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const stars = generateStars(12);
  const spirals = generateSpirals(3);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <GalaxyBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <GalaxyBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <GalaxyCore
              variants={coreVariants}
              initial="unchecked"
              animate="checked"
            />
            {spirals.map((spiral, index) => (
              <GalaxySpiral
                key={index}
                $color={galaxyColors[index % galaxyColors.length]}
                style={{
                  transform: `scale(${spiral.scale}) rotate(${spiral.rotation}deg)`
                }}
                variants={spiralVariants}
                custom={{ delay: spiral.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {stars.map((star, index) => (
              <GalaxyStar
                key={index}
                $color={galaxyColors[index % galaxyColors.length]}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`
                }}
                variants={starVariants}
                custom={{ duration: star.duration, delay: star.delay }}
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
      </GalaxyBox>
    </Container>
  );
} 