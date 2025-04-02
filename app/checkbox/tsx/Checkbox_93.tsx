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

const RippleBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#3182CE' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Ripple = styled(motion.div)<{ $color: string }>`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color};
  opacity: 0;
  transform-origin: center;
`;

const Drop = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
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

const rippleColors = ['rgba(49, 130, 206, 0.4)', 'rgba(49, 130, 206, 0.3)', 'rgba(49, 130, 206, 0.2)'];

const generateDrops = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    delay: i * 0.1,
    distance: Math.random() * 10 + 5
  }));
};

const rippleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (index: number) => ({
    scale: [0, 2],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 1,
      delay: index * 0.2,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

const dropVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    y: 0
  },
  checked: ({ angle, distance, delay }: { angle: number; distance: number; delay: number }) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    x: [0, Math.cos(angle * Math.PI / 180) * distance],
    y: [0, Math.sin(angle * Math.PI / 180) * distance],
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut"
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

export default function Checkbox_93({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const drops = generateDrops(8);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <RippleBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <RippleBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {rippleColors.map((color, index) => (
              <Ripple
                key={index}
                $color={color}
                style={{
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0'
                }}
                variants={rippleVariants}
                custom={index}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {drops.map((drop, index) => (
              <Drop
                key={index}
                $color={rippleColors[0]}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                variants={dropVariants}
                custom={drop}
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
      </RippleBox>
    </Container>
  );
} 