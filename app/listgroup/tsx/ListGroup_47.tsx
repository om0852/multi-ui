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

const leafSway = keyframes`
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
`;

const vineGrow = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 0.2;
  }
`;

const lightFilter = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #2d5a27, #1e3d1a);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(45, 90, 39, 0.3),
    inset 0 0 60px rgba(76, 175, 80, 0.1);

  &::before {
    content: '🌿';
    position: absolute;
    font-size: 100px;
    opacity: 0.1;
    top: -20px;
    right: -20px;
    transform-origin: center;
    animation: ${leafSway} 10s ease-in-out infinite;
  }

  &::after {
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
        rgba(76, 175, 80, 0.1) 50%,
        transparent 70%
      );
    animation: ${lightFilter} 5s ease-in-out infinite;
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
    'rgba(76, 175, 80, 0.2)' : 
    'rgba(76, 175, 80, 0.1)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(76, 175, 80, 0.4)' : 
    'rgba(76, 175, 80, 0.2)'
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
    box-shadow: 
      0 4px 12px rgba(76, 175, 80, 0.2),
      inset 0 0 20px rgba(76, 175, 80, 0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #4caf50;
      transform-origin: top;
      animation: ${vineGrow} 0.5s ease-out forwards;
    }

    &::after {
      content: '🌱';
      position: absolute;
      bottom: -5px;
      right: 10px;
      font-size: 20px;
      opacity: 0.2;
      transform-origin: bottom;
      animation: ${leafSway} 4s ease-in-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(8px);
      background: rgba(76, 175, 80, 0.15);
      border-color: rgba(76, 175, 80, 0.3);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#4caf50' : 'rgba(76, 175, 80, 0.8)'};
  background: ${props => props.$active ? 
    'rgba(76, 175, 80, 0.2)' : 
    'rgba(76, 175, 80, 0.1)'
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
        rgba(76, 175, 80, 0.3),
        transparent 70%
      );
      animation: ${lightFilter} 3s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(76, 175, 80, 0.3));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#4caf50' : 'rgba(76, 175, 80, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 2px 4px rgba(76, 175, 80, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(76, 175, 80, 0.9)' : 
    'rgba(76, 175, 80, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(76, 175, 80, 0.2)'};
  color: ${props => props.$color ? '#ffffff' : '#4caf50'};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
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
    animation: ${lightFilter} 2s linear infinite;
  }
`;

const JungleListGroup: React.FC<ListGroupProps> = ({
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

export default JungleListGroup; 