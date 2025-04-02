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

const BubbleBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#E3F2FD' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const MainBubble = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(0.5px);
`;

const PopParticle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const Ripple = styled(motion.div)<{ $color: string }>`
  position: absolute;
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
`;

const bubbleColors = {
  primary: '#64B5F6',
  secondary: '#90CAF9',
  accent: '#BBDEFB'
};

const mainBubbleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: {
    scale: [0, 1.2, 1],
    opacity: [0, 0.8, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const popParticleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    x: [0, (Math.random() - 0.5) * 30],
    y: [0, (Math.random() - 0.5) * 30],
    transition: {
      duration: 0.5,
      delay: 0.3 + delay * 0.1
    }
  })
};

const rippleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 2],
    opacity: [0.6, 0],
    transition: {
      duration: 0.6,
      delay: delay * 0.2
    }
  })
};

const particles = Array.from({ length: 12 }, (_, i) => ({
  delay: i * 0.05,
  color: i % 3 === 0 ? bubbleColors.primary : 
         i % 3 === 1 ? bubbleColors.secondary : 
         bubbleColors.accent
}));

const ripples = Array.from({ length: 3 }, (_, i) => ({
  delay: i * 0.2,
  scale: 1 + i * 0.5
}));

export default function Checkbox_78({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <BubbleBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <BubbleBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <MainBubble
          $color={bubbleColors.primary}
          style={{
            width: '60%',
            height: '60%',
            left: '20%',
            top: '20%'
          }}
          variants={mainBubbleVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {particles.map((particle, index) => (
          <PopParticle
            key={index}
            $color={particle.color}
            style={{ left: '50%', top: '50%' }}
            variants={popParticleVariants}
            custom={particle.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
        {ripples.map((ripple, index) => (
          <Ripple
            key={index}
            $color={bubbleColors.primary}
            style={{
              width: '100%',
              height: '100%',
              left: '0%',
              top: '0%',
              opacity: 0
            }}
            variants={rippleVariants}
            custom={ripple.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </BubbleBox>
    </Container>
  );
} 