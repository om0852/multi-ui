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
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  perspective: 1000px;
`;

const PaperFold = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  transform-origin: top left;
  backface-visibility: hidden;
`;

const Shadow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  transform-origin: center;
`;

const paperColors = {
  primary: '#F8F9FA',
  shadow: '#E9ECEF',
  accent: '#DEE2E6'
};

const foldVariants = {
  unchecked: {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    opacity: 0
  },
  checked: (index: number) => ({
    rotateX: [-20, 0],
    rotateY: [index * 30, 0],
    rotateZ: [index * 15, 0],
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut"
    }
  })
};

const shadowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.2, 0],
    scale: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const folds = [
  { width: '100%', height: '100%', top: '0%', left: '0%', zIndex: 1 },
  { width: '75%', height: '75%', top: '12.5%', left: '12.5%', zIndex: 2 },
  { width: '50%', height: '50%', top: '25%', left: '25%', zIndex: 3 },
  { width: '25%', height: '25%', top: '37.5%', left: '37.5%', zIndex: 4 }
];

export default function Checkbox_77({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
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
        <Shadow
          variants={shadowVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {folds.map((fold, index) => (
          <PaperFold
            key={index}
            $color={index === folds.length - 1 ? paperColors.accent : paperColors.primary}
            style={{
              width: fold.width,
              height: fold.height,
              top: fold.top,
              left: fold.left,
              zIndex: fold.zIndex,
              boxShadow: `0 0 ${index * 2}px rgba(0,0,0,0.1)`
            }}
            variants={foldVariants}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </PaperBox>
    </Container>
  );
} 