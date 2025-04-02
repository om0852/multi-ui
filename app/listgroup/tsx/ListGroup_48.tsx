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

const gearRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const steamPuff = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-20px) scale(1.5);
    opacity: 0;
  }
`;

const brassShine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #2b2522;
  border: 8px solid #8b7355;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 60px rgba(139, 115, 85, 0.2);

  &::before {
    content: '⚙️';
    position: absolute;
    font-size: 80px;
    top: -20px;
    right: -20px;
    opacity: 0.1;
    animation: ${gearRotate} 20s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(139, 115, 85, 0.1) 10px,
        rgba(139, 115, 85, 0.1) 20px
      );
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
    '#3d3632' : 
    '#332e2a'
  };
  border: 2px solid ${props => props.$active ? 
    '#8b7355' : 
    '#5c4c3d'
  };
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      width: 30px;
      height: 30px;
      background: #8b7355;
      border-radius: 50%;
      transform: translateY(-50%);
      animation: ${gearRotate} 4s linear infinite;
      clip-path: polygon(
        50% 0%,
        63% 38%,
        100% 38%,
        69% 59%,
        82% 100%,
        50% 75%,
        18% 100%,
        31% 59%,
        0% 38%,
        37% 38%
      );
    }

    &::after {
      content: '💨';
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 16px;
      animation: ${steamPuff} 2s ease-out infinite;
      opacity: 0.3;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(8px);
      background: #3d3632;
      border-color: #8b7355;
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#d4af37' : '#8b7355'};
  background: ${props => props.$active ? 
    '#3d3632' : 
    '#332e2a'
  };
  border: 2px solid ${props => props.$active ? '#d4af37' : '#8b7355'};
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(212, 175, 55, 0.2),
        transparent
      );
      background-size: 200% 100%;
      animation: ${brassShine} 2s linear infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(139, 115, 85, 0.3));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#d4af37' : '#8b7355'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'UnifrakturMaguntia', cursive;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 2px 4px rgba(212, 175, 55, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#a67c00' : 
    '#8b7355'
  };
  font-size: 0.875rem;
  font-family: 'Courier Prime', monospace;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || '#3d3632'};
  color: ${props => props.$color ? '#ffffff' : '#d4af37'};
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${props => props.$color || '#8b7355'};
  border-radius: 2px;
  min-width: 20px;
  text-align: center;
  font-family: 'Courier Prime', monospace;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${brassShine} 2s linear infinite;
  }
`;

const SteampunkListGroup: React.FC<ListGroupProps> = ({
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

export default SteampunkListGroup; 