'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const Container = styled.div<{ disabled?: boolean }>`
  display: inline-block;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const FireBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? '#FF4D00' : 'white'};
  border: 2px solid ${props => props.checked ? '#FF4D00' : '#E5E7EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
`;

const Particle = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${props => props.color};
  pointer-events: none;
`;

const FireCore = styled(motion.div)`
  position: absolute;
  inset: -2px;
  border-radius: 8px;
  background: linear-gradient(to top, #FF4D00, #FFA41B);
  filter: blur(1px);
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: white;
  z-index: 1;
  filter: drop-shadow(0 0 2px rgba(255,69,0,0.5));
`;

const fireColors = ['#FF4D00', '#FFA41B', '#FFD700', '#FF6B6B'];

const particleVariants = (index: number) => ({
  checked: {
    y: [-20 - (index * 5)],
    x: [0, (index % 2 === 0 ? 10 : -10)],
    opacity: [1, 0],
    scale: [1, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: index * 0.1,
      ease: "easeOut"
    }
  }
});

const fireVariants = {
  checked: {
    scale: [1, 1.1, 1],
    filter: [
      'blur(1px) brightness(1)',
      'blur(2px) brightness(1.2)',
      'blur(1px) brightness(1)'
    ],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  unchecked: {
    scale: 0,
    opacity: 0
  }
};

export default function Checkbox_53({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <FireBox
        checked={value}
        size={size}
      >
        {value && (
          <>
            <FireCore
              variants={fireVariants}
              animate="checked"
            />
            {Array.from({ length: 8 }).map((_, i) => (
              <Particle
                key={i}
                color={fireColors[i % fireColors.length]}
                custom={i}
                variants={particleVariants(i)}
                animate="checked"
                style={{
                  top: '100%',
                  left: `${(i + 1) * (100 / 9)}%`
                }}
              />
            ))}
            <CheckMark
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={checkVariants}
              initial="unchecked"
              animate="checked"
            >
              <motion.path d="M20 6L9 17L4 12" />
            </CheckMark>
          </>
        )}
      </FireBox>
    </Container>
  );
} 