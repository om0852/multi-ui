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

const HologramBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#000B1A' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const HologramContent = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00FFFF;
  font-family: monospace;
  font-size: 14px;
  text-shadow: 0 0 4px #00FFFF;
  opacity: 0;
`;

const ScanLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 255, 255, 0.5),
    transparent
  );
  filter: blur(1px);
`;

const GlitchOverlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 255, 0.1);
  mix-blend-mode: overlay;
  pointer-events: none;
`;

const hologramVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0.5, 0.8, 0.5],
    scale: 1,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

const scanLineVariants = {
  unchecked: {
    opacity: 0,
    y: 0
  },
  checked: {
    opacity: 1,
    y: ["0%", "100%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const glitchVariants = {
  unchecked: {
    opacity: 0
  },
  checked: {
    opacity: [0, 0.2, 0],
    x: [-2, 2, -2],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

export default function Checkbox_74({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <HologramBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <HologramBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        <HologramContent
          variants={hologramVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        >
          ✓
        </HologramContent>
        <ScanLine
          variants={scanLineVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <GlitchOverlay
          variants={glitchVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
      </HologramBox>
    </Container>
  );
} 