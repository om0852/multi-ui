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

const NeonBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? '#000' : '#1a1a1a'};
  border: 2px solid ${props => props.checked ? '#0ff' : '#333'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.checked ? 
    'inset 0 0 10px #0ff, 0 0 10px #0ff' : 
    'none'};
`;

const ElectricPath = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #0ff, transparent);
  filter: blur(1px);
`;

const NeonGlow = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 6px;
  box-shadow: inset 0 0 15px #0ff;
  opacity: 0;
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: #0ff;
  filter: drop-shadow(0 0 5px #0ff);
  z-index: 1;
`;

const electricVariants = {
  checked: {
    x: ['0%', '100%'],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const glowVariants = {
  checked: {
    opacity: [0, 0.5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: 1,
    filter: [
      'drop-shadow(0 0 2px #0ff)',
      'drop-shadow(0 0 8px #0ff)',
      'drop-shadow(0 0 5px #0ff)'
    ],
    transition: {
      duration: 0.4
    }
  },
  unchecked: {
    scale: 0,
    opacity: 0
  }
};

export default function Checkbox_54({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <NeonBox
        checked={value}
        size={size}
        animate={value ? {
          scale: [1, 1.05, 1],
          transition: { duration: 0.3 }
        } : {}}
      >
        {value && (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <ElectricPath
                key={i}
                style={{ top: `${(i + 1) * 25}%` }}
                variants={electricVariants}
                animate="checked"
                transition={{
                  delay: i * 0.1
                }}
              />
            ))}
            <NeonGlow
              variants={glowVariants}
              animate="checked"
            />
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
      </NeonBox>
    </Container>
  );
} 