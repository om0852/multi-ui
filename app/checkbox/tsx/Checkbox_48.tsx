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

const PartyBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? '#FCD34D' : 'white'};
  border: 2px solid ${props => props.checked ? '#F59E0B' : '#E5E7EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

const Confetti = styled(motion.div)<{ color: string; delay: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: ${props => props.color};
  border-radius: 2px;
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: #B45309;
`;

const confettiColors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];

const boxVariants = {
  checked: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.3 }
  },
  unchecked: {
    scale: 1
  }
};

const confettiVariants = {
  checked: (i: number) => ({
    x: [0, (i % 2 === 0 ? 20 : -20)],
    y: [0, -30],
    opacity: [1, 0],
    scale: [1, 0],
    transition: {
      duration: 0.5,
      delay: i * 0.1
    }
  })
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

export default function Checkbox_48({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PartyBox
        checked={value}
        size={size}
        variants={boxVariants}
        animate={value ? "checked" : "unchecked"}
      >
        {value && Array.from({ length: 8 }).map((_, i) => (
          <Confetti
            key={i}
            color={confettiColors[i % confettiColors.length]}
            delay={i * 0.1}
            custom={i}
            variants={confettiVariants}
            initial="unchecked"
            animate="checked"
          />
        ))}
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
      </PartyBox>
    </Container>
  );
}