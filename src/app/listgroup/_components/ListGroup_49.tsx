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

const sparkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) rotate(180deg);
  }
`;

const runeGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 2px rgba(147, 112, 219, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(147, 112, 219, 0.8));
  }
`;

const magicParticles = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid #4a3b78;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.15),
    inset 0 0 80px rgba(147, 112, 219, 0.1);

  &::before {
    content: '✨';
    position: absolute;
    font-size: 24px;
    opacity: 0.3;
    animation: ${sparkle} 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, 
      rgba(147, 112, 219, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
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
    'rgba(74, 59, 120, 0.4)' : 
    'rgba(26, 26, 46, 0.6)'
  };
  border: 1px solid ${props => props.$active ? 
    '#9370db' : 
    '#4a3b78'
  };
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(4px);

  ${props => props.$active && css`
    &::before,
    &::after {
      content: '🌟';
      position: absolute;
      font-size: 12px;
      animation: ${magicParticles} 2s ease-out infinite;
    }

    &::before {
      left: 10px;
      animation-delay: 0.5s;
    }

    &::after {
      right: 10px;
      animation-delay: 1s;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(74, 59, 120, 0.2);
      border-color: #9370db;
      box-shadow: 0 4px 12px rgba(147, 112, 219, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#9370db' : '#6c5b9e'};
  background: rgba(147, 112, 219, 0.1);
  border: 1px solid ${props => props.$active ? '#9370db' : '#4a3b78'};
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${runeGlow} 2s ease-in-out infinite;
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(147, 112, 219, 0.3));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#9370db' : '#6c5b9e'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  letter-spacing: 0.03em;
  text-shadow: ${props => props.$active ? 
    '0 0 8px rgba(147, 112, 219, 0.5)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#b8a2e3' : 
    '#8571be'
  };
  font-size: 0.875rem;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.02em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(147, 112, 219, 0.2)'};
  color: ${props => props.$color ? '#ffffff' : '#9370db'};
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${props => props.$color || '#4a3b78'};
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(2px);

  ${props => !props.$color && css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(147, 112, 219, 0.3),
        transparent
      );
      animation: ${runeGlow} 2s ease-in-out infinite;
    }
  `}
`;

const MysticListGroup: React.FC<ListGroupProps> = ({
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

export default MysticListGroup; 