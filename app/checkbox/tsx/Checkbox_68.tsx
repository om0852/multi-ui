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

const LiquidBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: #fff;
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Liquid = styled(motion.div)`
  position: absolute;
  width: 150%;
  height: 150%;
  background: linear-gradient(45deg, #00C9FF, #92FE9D);
  left: -25%;
  top: 100%;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  filter: url('#liquid-filter');
`;

const Bubble = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
`;

const liquidVariants = {
  unchecked: {
    top: "100%",
    rotate: 0
  },
  checked: {
    top: "-25%",
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const bubbleVariants = {
  unchecked: {
    y: 0,
    opacity: 0,
    scale: 0
  },
  checked: (delay: number) => ({
    y: [-20, -40],
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 1,
      delay: delay * 0.2,
      repeat: Infinity,
      repeatDelay: 0.5
    }
  })
};

export default function Checkbox_68({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const bubbles = [
    { size: 6, left: '30%', delay: 0 },
    { size: 8, left: '50%', delay: 1 },
    { size: 6, left: '70%', delay: 2 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <LiquidBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <LiquidBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <svg width="0" height="0">
          <filter id="liquid-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feColorMatrix
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10"
            />
          </filter>
        </svg>
        <Liquid
          variants={liquidVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {bubbles.map((bubble, index) => (
          <Bubble
            key={index}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              bottom: '20%'
            }}
            variants={bubbleVariants}
            custom={bubble.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </LiquidBox>
    </Container>
  );
} 