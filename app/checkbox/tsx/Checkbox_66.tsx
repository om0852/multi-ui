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

const PortalBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#673AB7' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Portal = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    #9C27B0,
    #673AB7,
    #3F51B5,
    #2196F3,
    #03A9F4,
    #00BCD4,
    #009688,
    #4CAF50
  );
  top: -50%;
  left: -50%;
  border-radius: 50%;
  transform-origin: center;
`;

const Sparkle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 20%;
  height: 20%;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(1px);
`;

const sparkleColors = ['#E1BEE7', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA'];

const portalVariants = {
  unchecked: {
    scale: 0,
    rotate: 0,
    opacity: 0
  },
  checked: {
    scale: 1,
    rotate: 360,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const sparkleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1.2, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      delay: delay * 0.2,
      repeat: Infinity,
      repeatDelay: 0.5
    }
  })
};

export default function Checkbox_66({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const sparkles = [
    { x: 20, y: 20 },
    { x: 60, y: 20 },
    { x: 40, y: 50 },
    { x: 20, y: 80 },
    { x: 60, y: 80 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PortalBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PortalBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <Portal
          variants={portalVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {sparkles.map((sparkle, index) => (
          <Sparkle
            key={index}
            style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
            $color={sparkleColors[index]}
            variants={sparkleVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </PortalBox>
    </Container>
  );
}