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

const lavaFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const magmaPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const emberFloat = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #1a0f0f, #2d1414);
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(255, 0, 0, 0.2),
    inset 0 0 60px rgba(255, 87, 34, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      #ff5722,
      #ff9800,
      #ff5722,
      #ff9800
    );
    opacity: 0.1;
    background-size: 400% 400%;
    animation: ${lavaFlow} 15s ease infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ff5722;
    border-radius: 50%;
    filter: blur(2px);
    animation: ${emberFloat} 3s ease-out infinite;
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
    'rgba(255, 87, 34, 0.2)' : 
    'rgba(255, 87, 34, 0.1)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(255, 87, 34, 0.4)' : 
    'rgba(255, 87, 34, 0.2)'
  };
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${magmaPulse} 2s ease-in-out infinite;
    box-shadow: 
      0 4px 12px rgba(255, 87, 34, 0.2),
      inset 0 0 20px rgba(255, 87, 34, 0.2);

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
        rgba(255, 87, 34, 0.2),
        transparent
      );
      background-size: 200% 200%;
      animation: ${lavaFlow} 3s linear infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(255, 87, 34, 0.15);
      border-color: rgba(255, 87, 34, 0.3);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#ff5722' : 'rgba(255, 87, 34, 0.8)'};
  background: ${props => props.$active ? 
    'rgba(255, 87, 34, 0.2)' : 
    'rgba(255, 87, 34, 0.1)'
  };
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(255, 87, 34, 0.3),
        transparent 70%
      );
      animation: ${magmaPulse} 2s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(255, 87, 34, 0.3));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ff5722' : 'rgba(255, 87, 34, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 2px 4px rgba(255, 87, 34, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(255, 87, 34, 0.9)' : 
    'rgba(255, 87, 34, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(255, 87, 34, 0.2)'};
  color: ${props => props.$color ? '#ffffff' : '#ff5722'};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 4px;
  min-width: 20px;
  text-align: center;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${lavaFlow} 2s linear infinite;
  }
`;

const VolcanicListGroup: React.FC<ListGroupProps> = ({
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

export default VolcanicListGroup; 