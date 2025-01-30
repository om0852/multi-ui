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

const PaintBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: #fff;
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const PaintBlob = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(1px);
`;

const PaintDrip = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 3px;
  background: ${props => props.$color};
  border-radius: 0 0 2px 2px;
`;

const PaintSplatter = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(0.5px);
`;

const paintColors = {
  primary: '#FF3D7F',
  secondary: '#FF9E9E',
  accent: '#FF5252'
};

const blobVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: {
    scale: 2,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const dripVariants = {
  unchecked: {
    height: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    height: ["0%", "60%", "40%"],
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay * 0.2,
      ease: "easeOut"
    }
  })
};

const splatterVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0.8],
    opacity: [0, 1, 0],
    x: [0, (Math.random() - 0.5) * 20],
    y: [0, (Math.random() - 0.5) * 20],
    transition: {
      duration: 0.6,
      delay: delay * 0.1
    }
  })
};

const drips = [
  { left: '30%', delay: 0 },
  { left: '50%', delay: 0.2 },
  { left: '70%', delay: 0.4 }
];

const splatters = Array.from({ length: 8 }, (_, i) => ({
  delay: i * 0.1,
  color: i % 2 === 0 ? paintColors.primary : paintColors.secondary
}));

export default function Checkbox_76({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PaintBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PaintBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <PaintBlob
          $color={paintColors.primary}
          style={{ 
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
            transformOrigin: 'center'
          }}
          variants={blobVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        {drips.map((drip, index) => (
          <PaintDrip
            key={index}
            $color={paintColors.primary}
            style={{ left: drip.left, top: '50%' }}
            variants={dripVariants}
            custom={drip.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
        {splatters.map((splatter, index) => (
          <PaintSplatter
            key={index}
            $color={splatter.color}
            style={{ left: '50%', top: '50%' }}
            variants={splatterVariants}
            custom={splatter.delay}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </PaintBox>
    </Container>
  );
} 