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

const HologramBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#000' : '#fff'};
  border: 2px solid #00FFFF;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const HologramLine = styled(motion.div)`
  position: absolute;
  width: 150%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00FFFF, transparent);
  opacity: 0;
  left: -25%;
`;

const HologramGlitch = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: rgba(0, 255, 255, 0.2);
  opacity: 0;
  mix-blend-mode: screen;
`;

const HologramGrid = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 4px 4px;
  opacity: 0;
`;

const CheckMark = styled(motion.path)`
  stroke: #00FFFF;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 2px #00FFFF);
`;

const generateLines = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    y: (i * 100) / count,
    delay: i * 0.1
  }));
};

const lineVariants = {
  unchecked: {
    opacity: 0,
    x: '-100%'
  },
  checked: (delay: number) => ({
    opacity: [0, 1, 0],
    x: ['100%', '-100%'],
    transition: {
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: "linear"
    }
  })
};

const glitchVariants = {
  unchecked: {
    opacity: 0,
    x: 0
  },
  checked: {
    opacity: [0, 0.5, 0],
    x: [-2, 2, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

const gridVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: 0.3,
    scale: 1,
    transition: {
      duration: 0.3
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

export default function Checkbox_96({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const lines = generateLines(5);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <HologramBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <HologramBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <HologramGrid
              variants={gridVariants}
              initial="unchecked"
              animate="checked"
            />
            {lines.map((line, index) => (
              <HologramLine
                key={index}
                style={{ top: `${line.y}%` }}
                variants={lineVariants}
                custom={line.delay}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <HologramGlitch
              variants={glitchVariants}
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
      </HologramBox>
    </Container>
  );
} 