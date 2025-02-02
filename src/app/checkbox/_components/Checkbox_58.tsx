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

const PaperBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: #fff;
  border: 2px solid #ddd;
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FoldCorner = styled(motion.div)<{ $position: string }>`
  position: absolute;
  width: 50%;
  height: 50%;
  background: #f5f5f5;
  ${props => props.$position === 'topLeft' && 'top: 0; left: 0; transform-origin: bottom right;'}
  ${props => props.$position === 'topRight' && 'top: 0; right: 0; transform-origin: bottom left;'}
  ${props => props.$position === 'bottomLeft' && 'bottom: 0; left: 0; transform-origin: top right;'}
  ${props => props.$position === 'bottomRight' && 'bottom: 0; right: 0; transform-origin: top left;'}
`;

const CheckMark = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 60%;
  border-radius: 1px;
  background: #4CAF50;
  transform: translate(-50%, -50%) scale(0);
`;

const foldVariants = {
  unchecked: {
    rotateZ: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    rotateZ: 180,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: delay * 0.1,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const checkMarkVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      ease: "backOut"
    }
  }
};

export default function Checkbox_58({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PaperBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PaperBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <FoldCorner
          $position="topLeft"
          variants={foldVariants}
          custom={0}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <FoldCorner
          $position="topRight"
          variants={foldVariants}
          custom={1}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <FoldCorner
          $position="bottomLeft"
          variants={foldVariants}
          custom={2}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <FoldCorner
          $position="bottomRight"
          variants={foldVariants}
          custom={3}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <CheckMark
          variants={checkMarkVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
      </PaperBox>
    </Container>
  );
} 