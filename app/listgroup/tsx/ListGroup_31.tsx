"use client";
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ListGroupProps {
  items: ListGroupItem[];
  onSelect?: (item: ListGroupItem) => void;
  className?: string;
  activeItem?: string;
}

interface ListGroupItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: string;
  disabled?: boolean;
}

const torchlight = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 30px rgba(255, 147, 41, 0.2),
      0 0 60px rgba(255, 147, 41, 0.1);
  }
  50% {
    box-shadow: 
      0 0 40px rgba(255, 147, 41, 0.3),
      0 0 80px rgba(255, 147, 41, 0.15);
  }
`;

const parchmentWave = keyframes`
  0%, 100% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(1deg);
  }
`;

const magicSparkle = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f4e4bc;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(139, 69, 19, 0.2),
    inset 0 0 60px rgba(139, 69, 19, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
    pointer-events: none;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 20px;
  background: ${props => props.$active ? '#fff7e6' : '#faf3e3'};
  border: 2px solid #8b4513;
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 
    0 4px 12px rgba(139, 69, 19, 0.1),
    inset 0 0 20px rgba(139, 69, 19, 0.05);

  ${props => props.$active && css`
    animation: ${parchmentWave} 4s ease-in-out infinite;
    border-image: linear-gradient(
      45deg,
      #8b4513,
      #d4a76a,
      #8b4513
    ) 1;
    box-shadow: ${torchlight};

    &::before {
      content: '⚔️';
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at center,
        rgba(255, 215, 0, 0.2),
        transparent 70%
      );
      animation: ${magicSparkle} 2s ease-out infinite;
      pointer-events: none;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      box-shadow: 
        0 8px 24px rgba(139, 69, 19, 0.15),
        inset 0 0 30px rgba(139, 69, 19, 0.08);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  background: ${props => props.$active ? 
    'rgba(139, 69, 19, 0.1)' : 
    'rgba(139, 69, 19, 0.05)'
  };
  border: 2px solid ${props => props.$active ? '#8b4513' : '#d4a76a'};
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: 1px solid #8b4513;
      border-radius: 50%;
      animation: ${parchmentWave} 3s ease-in-out infinite;
    }
  `}

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'MedievalSharp', cursive;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? '0 2px 4px rgba(139, 69, 19, 0.2)' : 'none'};
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#a67b5b' : '#c4a473'};
  font-size: 0.9rem;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.01em;
  line-height: 1.4;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => props.$color || 'rgba(139, 69, 19, 0.1)'};
  color: ${props => props.$color ? 'white' : '#8b4513'};
  min-width: 20px;
  text-align: center;
  font-family: 'MedievalSharp', cursive;
  letter-spacing: 0.02em;
  border: 2px solid ${props => props.$color || '#8b4513'};
  box-shadow: 0 2px 6px rgba(139, 69, 19, 0.15);
  position: relative;

  &::before,
  &::after {
    content: '•';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.$color || '#8b4513'};
  }

  &::before {
    left: 4px;
  }

  &::after {
    right: 4px;
  }
`;

const MedievalListGroup: React.FC<ListGroupProps> = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  return (
    <Container className={className}>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            $active={activeItem === item.id}
            $disabled={!!item.disabled}
            onClick={() => !item.disabled && onSelect?.(item)}
          >
            {item.icon && (
              <IconWrapper $active={activeItem === item.id}>
                {item.icon}
              </IconWrapper>
            )}
            <Content>
              <Title $active={activeItem === item.id}>{item.title}</Title>
              {item.description && (
                <Description $active={activeItem === item.id}>
                  {item.description}
                </Description>
              )}
            </Content>
            {item.badge && (
              <Badge $color={item.badgeColor}>
                {item.badge}
              </Badge>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MedievalListGroup; 