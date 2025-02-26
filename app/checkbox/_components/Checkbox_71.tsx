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

const DNABox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1a1a1a' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Strand = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 140%;
  height: 2px;
  background: ${props => props.$color};
  left: -20%;
  transform-origin: center;
`;

const BasePair = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const dnaColors = {
  strand1: '#FF4081',
  strand2: '#2196F3',
  basePair: '#4CAF50'
};

const strandVariants = {
  unchecked: {
    scaleX: 0,
    opacity: 0
  },
  checked: (index: number) => ({
    scaleX: 1,
    opacity: 1,
    y: [0, 4, 0, -4, 0],
    transition: {
      duration: 2,
      delay: index * 0.1,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  })
};

const basePairVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: 1,
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1,
      delay: delay * 0.2,
      repeat: Infinity
    }
  })
};

export default function Checkbox_71({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const strands = Array.from({ length: 5 }, (_, i) => ({
    y: `${20 + i * 15}%`,
    delay: i
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <DNABox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <DNABox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {strands.map((strand, index) => (
          <React.Fragment key={index}>
            <Strand
              $color={dnaColors.strand1}
              style={{ top: strand.y }}
              variants={strandVariants}
              custom={strand.delay}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
            <Strand
              $color={dnaColors.strand2}
              style={{ top: strand.y, opacity: 0.7 }}
              variants={strandVariants}
              custom={strand.delay + 0.5}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
            <BasePair
              $color={dnaColors.basePair}
              style={{ top: strand.y, left: '30%' }}
              variants={basePairVariants}
              custom={strand.delay}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
            <BasePair
              $color={dnaColors.basePair}
              style={{ top: strand.y, right: '30%' }}
              variants={basePairVariants}
              custom={strand.delay + 0.3}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
          </React.Fragment>
        ))}
      </DNABox>
    </Container>
  );
} 