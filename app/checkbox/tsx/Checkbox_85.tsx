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

const BurstBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#D53F8C' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const BurstParticle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 2px;
`;

const Ring = styled(motion.div)<{ $color: string; $size: number }>`
  position: absolute;
  width: ${props => props.$size}%;
  height: ${props => props.$size}%;
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const burstColors = ['#FBB6CE', '#F687B3', '#ED64A6', '#D53F8C'];

const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    distance: Math.random() * 20 + 10
  }));
};

const particleVariants = {
  unchecked: {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0
  },
  checked: ({ angle, distance }: { angle: number; distance: number }) => ({
    x: [0, Math.cos(angle * Math.PI / 180) * distance],
    y: [0, Math.sin(angle * Math.PI / 180) * distance],
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ringVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1.5],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.4,
      delay: delay * 0.1
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
      delay: 0.2
    }
  }
};

export default function Checkbox_85({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const particles = generateParticles(12);
  const rings = [60, 80, 100];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <BurstBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <BurstBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {particles.map((particle, index) => (
              <BurstParticle
                key={index}
                $color={burstColors[index % burstColors.length]}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                variants={particleVariants}
                custom={particle}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {rings.map((size, index) => (
              <Ring
                key={index}
                $color={burstColors[index]}
                $size={size}
                variants={ringVariants}
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
      </BurstBox>
    </Container>
  );
} 