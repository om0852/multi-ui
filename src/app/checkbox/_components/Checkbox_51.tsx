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

const GlitchBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 6px;
  background: ${props => props.checked ? '#2563EB' : 'white'};
  border: 2px solid ${props => props.checked ? '#2563EB' : '#E5E7EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const GlitchLayer = styled(motion.div)<{ offset: number; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.color};
  mix-blend-mode: overlay;
  transform: translateX(${props => props.offset}px);
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: white;
  z-index: 1;
`;

const glitchVariants = {
  checked: {
    x: [0, -2, 2, -1, 1, 0],
    y: [0, 1, -1, 2, -2, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const layerVariants = (offset: number) => ({
  checked: {
    x: [0, offset, -offset, 0],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.2, 0.8, 1]
    }
  }
});

const checkVariants = {
  checked: {
    scale: [0, 1.2, 1],
    opacity: [0, 1],
    filter: [
      'brightness(1)',
      'brightness(1.5)',
      'brightness(1)'
    ],
    transition: {
      duration: 0.3
    }
  },
  unchecked: {
    scale: 0,
    opacity: 0
  }
};

export default function Checkbox_51({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <GlitchBox
        checked={value}
        size={size}
        variants={glitchVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && (
          <>
            <GlitchLayer
              offset={3}
              color="rgba(255, 0, 0, 0.3)"
              variants={layerVariants(3)}
              initial="unchecked"
              animate="checked"
            />
            <GlitchLayer
              offset={-3}
              color="rgba(0, 255, 255, 0.3)"
              variants={layerVariants(-3)}
              initial="unchecked"
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
      </GlitchBox>
    </Container>
  );
} 