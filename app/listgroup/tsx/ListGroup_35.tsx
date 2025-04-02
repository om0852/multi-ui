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

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const crystalGlow = keyframes`
  0%, 100% {
    filter: brightness(1) saturate(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.2) saturate(1.2);
    transform: scale(1.02);
  }
`;

const prismRotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.3;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #1a1f35, #2a3045);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(41, 196, 255, 0.2),
    inset 0 0 60px rgba(41, 196, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 20%,
      rgba(41, 196, 255, 0.1) 40%,
      rgba(41, 196, 255, 0.1) 60%,
      transparent 80%
    );
    animation: ${prismRotate} 10s linear infinite;
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
    'linear-gradient(135deg, rgba(41, 196, 255, 0.15), rgba(41, 196, 255, 0.05))' : 
    'rgba(41, 196, 255, 0.05)'
  };
  border: 2px solid ${props => props.$active ? 
    'rgba(41, 196, 255, 0.5)' : 
    'rgba(41, 196, 255, 0.1)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    animation: ${crystalGlow} 3s ease-in-out infinite;
    box-shadow: 
      0 0 20px rgba(41, 196, 255, 0.2),
      inset 0 0 20px rgba(41, 196, 255, 0.1);

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
        rgba(41, 196, 255, 0.2),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmer} 3s linear infinite;
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, 
        rgba(41, 196, 255, 0.2),
        rgba(41, 196, 255, 0),
        rgba(41, 196, 255, 0.2)
      );
      border-radius: inherit;
      z-index: -1;
      animation: ${prismRotate} 6s linear infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(41, 196, 255, 0.1);
      border-color: rgba(41, 196, 255, 0.3);
      box-shadow: 0 5px 15px rgba(41, 196, 255, 0.15);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#29C4FF' : 'rgba(41, 196, 255, 0.7)'};
  background: ${props => props.$active ? 
    'rgba(41, 196, 255, 0.15)' : 
    'rgba(41, 196, 255, 0.05)'
  };
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,
      transparent,
      rgba(41, 196, 255, 0.1),
      transparent
    );
    animation: ${shimmer} 2s linear infinite;
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#29C4FF' : 'rgba(41, 196, 255, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 0 10px rgba(41, 196, 255, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(41, 196, 255, 0.9)' : 
    'rgba(41, 196, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(41, 196, 255, 0.1)'};
  color: ${props => props.$color ? 'white' : '#29C4FF'};
  min-width: 20px;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
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
    animation: ${shimmer} 2s linear infinite;
  }
`;

const CrystallineListGroup: React.FC<ListGroupProps> = ({
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

export default CrystallineListGroup; 