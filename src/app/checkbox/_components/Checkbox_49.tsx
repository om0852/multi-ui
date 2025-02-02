'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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
  padding: 10px;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const MagneticBox = styled(motion.div)<{ checked: boolean; size: string }>`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  border-radius: 8px;
  background: ${props => props.checked ? '#7C3AED' : 'white'};
  border: 2px solid ${props => props.checked ? '#7C3AED' : '#E5E7EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CheckMark = styled(motion.svg)`
  width: 65%;
  height: 65%;
  color: white;
`;

const magneticVariants = {
  checked: {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.4
    }
  },
  unchecked: {
    scale: 1,
    rotate: 0
  }
};

const checkVariants = {
  checked: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  },
  unchecked: {
    scale: 0,
    opacity: 0
  }
};

export default function Checkbox_49({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-10, 10], [10, -10]);
  const rotateY = useTransform(springX, [-10, 10], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Container 
      disabled={disabled} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => !disabled && onChange(!value)}
    >
      <HiddenInput checked={value} readOnly />
      <MagneticBox
        checked={value}
        size={size}
        variants={magneticVariants}
        animate={value ? "checked" : "unchecked"}
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY
        }}
      >
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
      </MagneticBox>
    </Container>
  );
} 