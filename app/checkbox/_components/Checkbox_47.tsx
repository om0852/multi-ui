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
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const RainbowBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? 
    'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)' : 
    'white'};
  background-size: ${props => props.checked ? '300% 300%' : '100% 100%'};
  border: 2px solid ${props => props.checked ? 'transparent' : '#E5E7EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Wave = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, 
    rgba(255,255,255,0.2) 25%, 
    transparent 25%, 
    transparent 50%, 
    rgba(255,255,255,0.2) 50%, 
    rgba(255,255,255,0.2) 75%, 
    transparent 75%, 
    transparent
  );
  background-size: 20px 20px;
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: white;
  filter: drop-shadow(0px 1px 1px rgba(0,0,0,0.3));
  z-index: 1;
`;

const rainbowVariants = {
  checked: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  },
  unchecked: {
    backgroundPosition: '0% 0%'
  }
};

const waveVariants = {
  checked: {
    x: [0, -100],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  },
  unchecked: {
    scale: 0,
    opacity: 0
  }
};

export default function Checkbox_47({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <RainbowBox
        checked={value}
        size={size}
        variants={rainbowVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <Wave
            variants={waveVariants}
            animate="checked"
          />
        )}
        {value && (
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
        )}
      </RainbowBox>
    </Container>
  );
} 