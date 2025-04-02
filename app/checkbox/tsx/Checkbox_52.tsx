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

const HoloBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? 
    'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))' : 
    'white'};
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.checked ?
    '0 8px 32px 0 rgba(31, 38, 135, 0.37)' :
    'none'};
`;

const HolographicOverlay = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 0, 140, 0.2) 25%,
    rgba(0, 255, 255, 0.2) 50%,
    rgba(255, 255, 0, 0.2) 75%,
    transparent 100%
  );
  mix-blend-mode: color-dodge;
  pointer-events: none;
`;

const Shine = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  pointer-events: none;
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: #fff;
  filter: drop-shadow(0 0 2px rgba(255,255,255,0.5));
  z-index: 1;
`;

const holographicVariants = {
  checked: {
    backgroundPosition: ['0% 0%', '200% 200%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const shineVariants = {
  checked: {
    x: ['-100%', '200%'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 0.5
    }
  }
};

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: 1,
    filter: [
      'drop-shadow(0 0 0px rgba(255,255,255,0))',
      'drop-shadow(0 0 10px rgba(255,255,255,0.8))',
      'drop-shadow(0 0 5px rgba(255,255,255,0.5))'
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

export default function Checkbox_52({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <HoloBox
        checked={value}
        size={size}
      >
        {value && (
          <>
            <HolographicOverlay
              variants={holographicVariants}
              animate="checked"
            />
            <Shine
              variants={shineVariants}
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
      </HoloBox>
    </Container>
  );
} 