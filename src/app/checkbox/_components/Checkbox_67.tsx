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

const NeonBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: #1a1a1a;
  border: 2px solid ${props => props.$checked ? '#00ff00' : '#333'};
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  box-shadow: ${props => props.$checked ? '0 0 10px #00ff00, inset 0 0 10px #00ff00' : 'none'};
`;

const NeonTube = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  opacity: 0.8;
  filter: blur(2px);
`;

const HorizontalTube = styled(NeonTube)`
  height: 2px;
  width: 100%;
  left: 0;
`;

const VerticalTube = styled(NeonTube)`
  width: 2px;
  height: 100%;
  top: 0;
`;

const neonColors = {
  primary: '#00ff00',
  glow: '#40ff40',
  dim: '#008000'
};

const tubeVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: (delay: number) => ({
    opacity: [0.4, 0.8, 0.4],
    scale: 1,
    transition: {
      duration: 1.5,
      delay: delay * 0.1,
      repeat: Infinity,
      repeatType: "reverse"
    }
  })
};

export default function Checkbox_67({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <NeonBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <NeonBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <HorizontalTube
          $color={neonColors.primary}
          style={{ top: '20%' }}
          variants={tubeVariants}
          custom={0}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <HorizontalTube
          $color={neonColors.glow}
          style={{ bottom: '20%' }}
          variants={tubeVariants}
          custom={1}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <VerticalTube
          $color={neonColors.primary}
          style={{ left: '20%' }}
          variants={tubeVariants}
          custom={2}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <VerticalTube
          $color={neonColors.glow}
          style={{ right: '20%' }}
          variants={tubeVariants}
          custom={3}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
      </NeonBox>
    </Container>
  );
} 