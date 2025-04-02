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

const CrystalBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#9C27B0' : '#E1BEE7'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Facet = styled(motion.div)<{ $position: string; $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  opacity: 0.6;
  ${props => {
    switch (props.$position) {
      case 'top':
        return 'height: 50%; width: 100%; top: 0; transform-origin: bottom;';
      case 'bottom':
        return 'height: 50%; width: 100%; bottom: 0; transform-origin: top;';
      case 'left':
        return 'width: 50%; height: 100%; left: 0; transform-origin: right;';
      case 'right':
        return 'width: 50%; height: 100%; right: 0; transform-origin: left;';
      default:
        return '';
    }
  }}
`;

const Shine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 45%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.4) 55%,
    transparent 100%
  );
  transform: translateX(-100%);
`;

const variants = {
  unchecked: {
    scaleX: 1,
    scaleY: 1,
    opacity: 0,
  },
  checked: {
    scaleX: [1, 1.1, 1],
    scaleY: [1, 1.1, 1],
    opacity: [0, 1],
    transition: { duration: 0.5 },
  },
};

const shineVariants = {
  unchecked: {
    x: "-100%"
  },
  checked: {
    x: ["-100%", "200%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

export default function Checkbox_62({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const facetColors = ['#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0'];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <CrystalBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <CrystalBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4 }
        } : {}}
      >
        <Facet
          $position="top"
          $color={facetColors[0]}
          variants={variants}
          custom={0}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <Facet
          $position="right"
          $color={facetColors[1]}
          variants={variants}
          custom={1}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <Facet
          $position="bottom"
          $color={facetColors[2]}
          variants={variants}
          custom={2}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <Facet
          $position="left"
          $color={facetColors[3]}
          variants={variants}
          custom={3}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
        <Shine
          variants={shineVariants}
          initial="unchecked"
          animate={value ? "checked" : "unchecked"}
        />
      </CrystalBox>
    </Container>
  );
} 
