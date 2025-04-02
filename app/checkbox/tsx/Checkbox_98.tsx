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
  background: ${props => props.$checked ? 
    'linear-gradient(135deg, #9F7AEA 0%, #B794F4 50%, #D6BCFA 100%)' : 
    '#fff'};
  border: 2px solid #9F7AEA;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background 0.3s ease;
  backdrop-filter: blur(4px);
`;

const CrystalFacet = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  opacity: 0;
  transform-origin: center;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const CrystalGlow = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle at center,
    rgba(159, 122, 234, 0.4) 0%,
    transparent 70%
  );
  opacity: 0;
  mix-blend-mode: screen;
`;

const CrystalSparkle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px white;
`;

const CheckMark = styled(motion.path)`
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
`;

const facetColors = [
  'rgba(159, 122, 234, 0.4)',
  'rgba(183, 148, 244, 0.4)',
  'rgba(214, 188, 250, 0.4)'
];

const generateFacets = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    size: 30 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: i * 0.1
  }));
};

const generateSparkles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.2
  }));
};

const facetVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    rotate: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    scale: [0, 1, 0.8],
    opacity: [0, 0.8, 0.4],
    rotate: [0, 45],
    transition: {
      duration: 1,
      delay,
      ease: "easeOut"
    }
  })
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.5, 0.3],
    scale: [0.8, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const sparkleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.5,
      delay,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

const checkVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Checkbox_98({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const facets = generateFacets(6);
  const sparkles = generateSparkles(8);

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
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <CrystalGlow
              variants={glowVariants}
              initial="unchecked"
              animate="checked"
            />
            {facets.map((facet, index) => (
              <CrystalFacet
                key={index}
                $color={facetColors[index % facetColors.length]}
                style={{
                  width: `${facet.size}%`,
                  height: `${facet.size}%`,
                  left: `${facet.x}%`,
                  top: `${facet.y}%`,
                  transform: `translate(-50%, -50%) rotate(${facet.rotation}deg)`
                }}
                variants={facetVariants}
                custom={{ delay: facet.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {sparkles.map((sparkle, index) => (
              <CrystalSparkle
                key={index}
                style={{
                  left: `${sparkle.x}%`,
                  top: `${sparkle.y}%`
                }}
                variants={sparkleVariants}
                custom={{ delay: sparkle.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <motion.svg
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                width: '65%',
                height: '65%',
                top: '17.5%',
                left: '17.5%'
              }}
            >
              <CheckMark
                d="M20 6L9 17L4 12"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </motion.svg>
          </>
        )}
      </CrystalBox>
    </Container>
  );
} 