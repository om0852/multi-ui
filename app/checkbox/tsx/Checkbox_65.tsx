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

const GearBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#455A64' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Gear = styled(motion.div)<{ $size: number; $color: string }>`
  position: absolute;
  width: ${props => props.$size}%;
  height: ${props => props.$size}%;
  background: ${props => props.$color};
  border-radius: 50%;
  transform-origin: center;

  &::before {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background: ${props => props.$color};
    border-radius: 2px;
    top: -15%;
    left: 35%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background: ${props => props.$color};
    border-radius: 2px;
    bottom: -15%;
    left: 35%;
  }
`;

const Tooth = styled(motion.div)<{ $angle: number; $color: string }>`
  position: absolute;
  width: 30%;
  height: 30%;
  background: ${props => props.$color};
  border-radius: 2px;
  top: 35%;
  left: -15%;
  transform-origin: right center;
  transform: rotate(${props => props.$angle}deg);
`;

const gearColors = ['#90A4AE', '#78909C', '#607D8B', '#455A64'];

const gearVariants = {
  unchecked: () => ({
    rotate: 0,
    scale: 0.8,
    opacity: 0.6
  }),
  checked: (isMain: boolean) => ({
    rotate: isMain ? 360 : -360,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  })
};

export default function Checkbox_65({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const gears = [
    { size: 60, x: 20, y: 20, isMain: true },
    { size: 40, x: 65, y: 65, isMain: false }
  ];
  const toothAngles = [0, 90, 180, 270];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <GearBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <GearBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {gears.map((gear, index) => (
          <Gear
            key={index}
            style={{ top: `${gear.y}%`, left: `${gear.x}%` }}
            $size={gear.size}
            $color={gearColors[index * 2]}
            variants={gearVariants}
            custom={gear.isMain}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          >
            {toothAngles.map((angle, i) => (
              <Tooth
                key={i}
                $angle={angle}
                $color={gearColors[index * 2]}
                style={{ transform: `rotate(${angle}deg)` }}
              />
            ))}
          </Gear>
        ))}
      </GearBox>
    </Container>
  );
} 