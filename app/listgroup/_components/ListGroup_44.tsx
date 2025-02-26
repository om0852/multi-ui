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

const waveFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const bubbleRise = keyframes`
  0% {
    transform: translateY(100%) scale(0.8);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100%) scale(1.2);
    opacity: 0;
  }
`;

const shimmerEffect = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #006994, #003366);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 105, 148, 0.3),
    inset 0 0 60px rgba(0, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(
        45deg,
        transparent 30%,
        rgba(0, 255, 255, 0.1) 50%,
        transparent 70%
      );
    background-size: 200% 200%;
    animation: ${waveFlow} 10s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    filter: blur(4px);
    animation: ${bubbleRise} 8s ease-in infinite;
    left: ${() => Math.random() * 100}%;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(0, 149, 199, 0.3)' : 
    'rgba(0, 149, 199, 0.1)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(0, 255, 255, 0.3)' : 
    'rgba(0, 255, 255, 0.1)'
  };
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(0, 255, 255, 0.2),
        transparent
      );
      background-size: 200% 200%;
      animation: ${shimmerEffect} 2s linear infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(0, 149, 199, 0.2);
      border-color: rgba(0, 255, 255, 0.2);
      box-shadow: 0 4px 12px rgba(0, 105, 148, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#00ffff' : 'rgba(0, 255, 255, 0.7)'};
  background: ${props => props.$active ? 
    'rgba(0, 149, 199, 0.3)' : 
    'rgba(0, 149, 199, 0.1)'
  };
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(0, 255, 255, 0.3),
        transparent 70%
      );
      animation: ${waveFlow} 3s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 0 10px rgba(0, 255, 255, 0.5)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(0, 149, 199, 0.3)'};
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmerEffect} 2s linear infinite;
  }
`;

const OceanListGroup: React.FC<ListGroupProps> = ({
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

export default OceanListGroup; 