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

const CosmicBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? 
    'linear-gradient(135deg, #000B3F, #0F2167)' : 
    'white'};
  border: 2px solid ${props => props.checked ? '#4D4DFF' : '#E5E7EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Star = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  filter: blur(0.5px);
`;

const Galaxy = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center,
    transparent 0%,
    rgba(123, 31, 162, 0.2) 50%,
    transparent 100%
  );
  opacity: 0;
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: #4D4DFF;
  filter: drop-shadow(0 0 2px rgba(77, 77, 255, 0.5));
  z-index: 1;
`;

const starVariants = (index: number) => ({
  checked: {
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: index * 0.2,
      ease: "easeInOut"
    }
  }
});

const galaxyVariants = {
  checked: {
    rotate: 360,
    opacity: [0, 0.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: 1,
    filter: [
      'drop-shadow(0 0 2px rgba(77, 77, 255, 0.5))',
      'drop-shadow(0 0 8px rgba(77, 77, 255, 0.8))',
      'drop-shadow(0 0 4px rgba(77, 77, 255, 0.5))'
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

export default function Checkbox_56({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <CosmicBox
        checked={value}
        size={size}
      >
        {value && (
          <>
            <Galaxy
              variants={galaxyVariants}
              animate="checked"
            />
            {Array.from({ length: 10 }).map((_, i) => (
              <Star
                key={i}
                size={Math.random() * 2 + 1}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
                variants={starVariants(i)}
                animate="checked"
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
      </CosmicBox>
    </Container>
  );
} 