"use client";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface InputMaskProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  format?: 'hex' | 'rgb' | 'hsl';
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;
  font-family: 'Inter', sans-serif;
`;

const InputWrapper = styled.div<{ $isFocused: boolean; $hasError: boolean; $isSuccess: boolean }>`
  position: relative;
  width: 100%;
  background: white;
  border: 2px solid ${props => {
    if (props.$hasError) return '#ef4444';
    if (props.$isSuccess) return '#10b981';
    return props.$isFocused ? '#6366f1' : '#e5e7eb';
  }};
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ $hasIcon: boolean }>`
  flex: 1;
  padding: 12px;
  padding-left: ${props => props.$hasIcon ? '40px' : '12px'};
  font-size: 16px;
  color: #1f2937;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Label = styled.label<{ $isFocused: boolean; $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: -24px;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isFocused ? '#6366f1' : '#9ca3af'};
  transition: all 0.2s ease;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const ColorPreview = styled.div<{ $color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  margin: 6px;
  background: ${props => props.$color};
  border: 2px solid #f3f4f6;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover::before {
    content: 'Click to copy';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #1f2937;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    animation: ${fadeIn} 0.2s ease;
  }
`;

const FormatToggle = styled.button<{ $active: boolean }>`
  padding: 4px 8px;
  font-size: 12px;
  color: ${props => props.$active ? '#6366f1' : '#6b7280'};
  background: ${props => props.$active ? '#eef2ff' : 'transparent'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background: #eef2ff;
  }
`;

const FormatGroup = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  padding: 8px;
  background: #f9fafb;
  border-radius: 6px;
  font-size: 12px;
  color: #4b5563;
  animation: ${fadeIn} 0.3s ease;
`;

const ColorMaskInput: React.FC<InputMaskProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  error,
  success,
  disabled,
  required,
  icon,
  className,
  format: initialFormat = 'hex',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [format, setFormat] = useState(initialFormat);
  const [colorInfo, setColorInfo] = useState<{ hex: string; rgb: string; hsl: string }>({
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    hsl: 'hsl(0, 0%, 0%)',
  });

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const parseColor = (input: string): { r: number; g: number; b: number } | null => {
    // HEX
    if (input.startsWith('#')) {
      const hex = input.slice(1);
      if (hex.length === 3) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        return { r, g, b };
      }
      if (hex.length === 6) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return { r, g, b };
      }
    }
    
    // RGB
    const rgbMatch = input.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch.map(Number);
      return { r, g, b };
    }
    
    return null;
  };

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const updateColorInfo = (input: string) => {
    const color = parseColor(input);
    if (color) {
      const { r, g, b } = color;
      const { h, s, l } = rgbToHsl(r, g, b);
      
      setColorInfo({
        hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
        rgb: `rgb(${r}, ${g}, ${b})`,
        hsl: `hsl(${h}, ${s}%, ${l}%)`,
      });
    }
  };

  const formatColor = (input: string): string => {
    if (format === 'hex') {
      return input.replace(/[^0-9a-fA-F#]/g, '').slice(0, 7);
    }
    return input;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatColor(e.target.value);
    setLocalValue(formattedValue);
    updateColorInfo(formattedValue);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorInfo[format]);
  };

  const isValidColor = (input: string): boolean => {
    if (format === 'hex') {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
    }
    return !!parseColor(input);
  };

  return (
    <Container className={className}>
      {label && (
        <Label 
          $isFocused={isFocused} 
          $hasValue={!!localValue}
        >
          {label}{required && '*'}
        </Label>
      )}
      <InputWrapper 
        $isFocused={isFocused} 
        $hasError={!!error} 
        $isSuccess={!!success}
      >
        {icon && <IconWrapper $isFocused={isFocused}>{icon}</IconWrapper>}
        <StyledInput
          type="text"
          value={localValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || '#000000'}
          disabled={disabled}
          required={required}
          $hasIcon={!!icon}
        />
        <ColorPreview 
          $color={isValidColor(localValue) ? localValue : '#e5e7eb'}
          onClick={copyToClipboard}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormatGroup>
        <FormatToggle 
          $active={format === 'hex'} 
          onClick={() => setFormat('hex')}
        >
          HEX
        </FormatToggle>
        <FormatToggle 
          $active={format === 'rgb'} 
          onClick={() => setFormat('rgb')}
        >
          RGB
        </FormatToggle>
        <FormatToggle 
          $active={format === 'hsl'} 
          onClick={() => setFormat('hsl')}
        >
          HSL
        </FormatToggle>
      </FormatGroup>
      {isValidColor(localValue) && (
        <ColorInfo>
          <div>HEX: {colorInfo.hex}</div>
          <div>RGB: {colorInfo.rgb}</div>
          <div>HSL: {colorInfo.hsl}</div>
        </ColorInfo>
      )}
    </Container>
  );
};

export default ColorMaskInput; 