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
  background: #000;
  border: 2px solid ${props => props.$checked ? '#FF00FF' : '#333'};
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  box-shadow: ${props => props.$checked ? '0 0 10px #FF00FF, inset 0 0 10px #FF00FF' : 'none'};
`;

const NeonLine = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  filter: blur(2px);
  opacity: 0.8;
`;

const NeonGlow = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: radial-gradient(circle at center,
    ${props => props.$color},
    transparent 70%
  );
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  opacity: 0;
`;

const NeonSpark = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(1px);
`;

const neonColors = {
  primary: '#FF00FF',
  secondary: '#00FFFF',
  accent: '#FF69B4'
};

const lineVariants = {
  unchecked: {
    scaleX: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scaleX: [0, 1],
    opacity: [0, 0.8],
    filter: ['blur(2px)', 'blur(4px)', 'blur(2px)'],
    transition: {
      duration: 0.4,
      delay: delay * 0.1,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  })
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.3, 0],
    scale: 1,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

const sparkVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    x: [0, (Math.random() - 0.5) * 20],
    y: [0, (Math.random() - 0.5) * 20],
    transition: {
      duration: 0.8,
      delay: delay * 0.2,
      repeat: Infinity
    }
  })
};

const neonLines = [
  { width: '80%', height: '2px', top: '30%', left: '10%', color: neonColors.primary },
  { width: '60%', height: '2px', top: '50%', left: '20%', color: neonColors.secondary },
  { width: '40%', height: '2px', top: '70%', left: '30%', color: neonColors.accent }
];

const sparks = Array.from({ length: 6 }, (_, i) => ({
  delay: i * 0.2,
  color: i % 2 === 0 ? neonColors.primary : neonColors.secondary
}));

export default function Checkbox_79({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

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
        <NeonGlow
          $color={neonColors.primary}
          variants={glowVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {neonLines.map((line, index) => (
          <NeonLine
            key={index}
            $color={line.color}
            style={{
              width: line.width,
              height: line.height,
              top: line.top,
              left: line.left
            }}
            variants={lineVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
        {sparks.map((spark, index) => (
          <NeonSpark
            key={index}
            $color={spark.color}
            style={{ left: '50%', top: '50%' }}
            variants={sparkVariants}
            custom={spark.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </NeonBox>
    </Container>
  );
} 