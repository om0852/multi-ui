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

const hologramFlicker = keyframes`
  0%, 100% {
    opacity: 1;
    transform: skew(0deg);
  }
  50% {
    opacity: 0.9;
    transform: skew(0.5deg);
  }
  75% {
    opacity: 0.8;
    transform: skew(-0.5deg);
  }
`;

const scanLine = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const dataFlow = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #0a192f, #112240);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 40px rgba(66, 211, 255, 0.2),
    inset 0 0 20px rgba(66, 211, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg,
        transparent 0%,
        rgba(66, 211, 255, 0.1) 45%,
        rgba(66, 211, 255, 0.1) 55%,
        transparent 100%);
    animation: ${scanLine} 4s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 20px,
        rgba(66, 211, 255, 0.05) 20px,
        rgba(66, 211, 255, 0.05) 40px
      );
    opacity: 0.5;
    animation: ${dataFlow} 20s linear infinite;
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
    'rgba(66, 211, 255, 0.1)' : 
    'rgba(66, 211, 255, 0.05)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(66, 211, 255, 0.3)' : 
    'rgba(66, 211, 255, 0.1)'
  };
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    animation: ${hologramFlicker} 2s infinite;
    box-shadow: 
      0 0 20px rgba(66, 211, 255, 0.1),
      inset 0 0 10px rgba(66, 211, 255, 0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(66, 211, 255, 0.1),
        transparent
      );
      animation: ${dataFlow} 2s linear infinite;
      pointer-events: none;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(8px);
      background: rgba(66, 211, 255, 0.08);
      border-color: rgba(66, 211, 255, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#42d3ff' : 'rgba(66, 211, 255, 0.7)'};
  background: ${props => props.$active ? 
    'rgba(66, 211, 255, 0.1)' : 
    'rgba(66, 211, 255, 0.05)'
  };
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at center,
        rgba(66, 211, 255, 0.2),
        transparent 70%
      );
      animation: ${hologramFlicker} 2s infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 0 5px rgba(66, 211, 255, 0.5));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#42d3ff' : 'rgba(66, 211, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 0 10px rgba(66, 211, 255, 0.5)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(66, 211, 255, 0.9)' : 
    'rgba(66, 211, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(66, 211, 255, 0.1)'};
  color: ${props => props.$color ? '#ffffff' : '#42d3ff'};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 4px;
  min-width: 20px;
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${dataFlow} 2s linear infinite;
  }
`;

const FuturisticListGroup: React.FC<ListGroupProps> = ({
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

export default FuturisticListGroup; 