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

const CircuitBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1a1a1a' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Trace = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  height: 2px;
`;

const Node = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const Pulse = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(1px);
`;

const circuitColors = {
  trace: '#00BCD4',
  node: '#4CAF50',
  pulse: '#FFC107'
};

const traceVariants = {
  unchecked: {
    scaleX: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay * 0.1
    }
  })
};

const nodeVariants = {
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

const pulseVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    x: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    x: ["0%", "100%"],
    transition: {
      duration: 1,
      delay: delay * 0.3,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

export default function Checkbox_72({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const traces = [
    { width: '60%', top: '30%', left: '20%', delay: 0 },
    { width: '40%', top: '50%', left: '30%', delay: 1 },
    { width: '50%', top: '70%', left: '25%', delay: 2 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <CircuitBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <CircuitBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {traces.map((trace, index) => (
          <React.Fragment key={index}>
            <Trace
              $color={circuitColors.trace}
              style={{
                width: trace.width,
                top: trace.top,
                left: trace.left
              }}
              variants={traceVariants}
              custom={trace.delay}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
            <Node
              $color={circuitColors.node}
              style={{
                top: trace.top,
                left: trace.left,
                marginTop: -1,
                marginLeft: -1
              }}
              variants={nodeVariants}
              custom={trace.delay}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
            <Pulse
              $color={circuitColors.pulse}
              style={{
                top: trace.top,
                left: trace.left,
                marginTop: -1,
                marginLeft: -1
              }}
              variants={pulseVariants}
              custom={trace.delay}
              initial="unchecked"
              animate={value ? "checked" : "unchecked"}
            />
          </React.Fragment>
        ))}
      </CircuitBox>
    </Container>
  );
} 