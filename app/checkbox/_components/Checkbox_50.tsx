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

const MorphBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MorphSVG = styled(motion.svg)`
  width: 100%;
  height: 100%;
`;

const boxPath = "M3 3 L21 3 L21 21 L3 21 Z";
const checkPath = "M3 12 L10 19 L21 5";
const circlePath = "M12 21 A 9 9 0 1 1 12 3 A 9 9 0 1 1 12 21";

const pathVariants = {
  box: {
    d: boxPath,
    stroke: "#9CA3AF",
    fill: "transparent"
  },
  check: {
    d: checkPath,
    stroke: "#10B981",
    fill: "transparent"
  },
  circle: {
    d: circlePath,
    stroke: "#10B981",
    fill: "transparent",
    transition: {
      duration: 0.5
    }
  }
};

const svgVariants = {
  unchecked: {
    rotate: 0,
    scale: 1
  },
  checking: {
    rotate: 360,
    scale: [1, 0.8, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export default function Checkbox_50({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <MorphBox
        checked={value}
        size={size}
      >
        <MorphSVG
          viewBox="0 0 24 24"
          variants={svgVariants}
          animate={value ? "checking" : "unchecked"}
        >
          <motion.path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="box"
            animate={value ? ["circle", "check"] : "box"}
            variants={pathVariants}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          />
        </MorphSVG>
      </MorphBox>
    </Container>
  );
} 