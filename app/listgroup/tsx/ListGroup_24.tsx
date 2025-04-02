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

const frostShimmer = keyframes`
  0% {
    background-position: -200% center;
    opacity: 0.5;
  }
  100% {
    background-position: 200% center;
    opacity: 0.8;
  }
`;

const iceGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 5px rgba(148, 216, 255, 0.3),
      0 0 10px rgba(148, 216, 255, 0.2),
      0 0 15px rgba(148, 216, 255, 0.1);
  }
  50% {
    box-shadow: 
      0 0 10px rgba(148, 216, 255, 0.5),
      0 0 20px rgba(148, 216, 255, 0.3),
      0 0 30px rgba(148, 216, 255, 0.2);
  }
`;

const crystalGrow = keyframes`
  0% {
    transform: scale(0.95) rotate(0deg);
  }
  50% {
    transform: scale(1.05) rotate(1deg);
  }
  100% {
    transform: scale(0.95) rotate(0deg);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #e8f4ff, #f0f9ff);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 
    0 10px 30px rgba(148, 216, 255, 0.2),
    0 1px 3px rgba(148, 216, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: ${frostShimmer} 8s linear infinite;
    background-size: 200% 100%;
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
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.5)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(148, 216, 255, 0.8)' : 
    'rgba(148, 216, 255, 0.3)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    animation: ${iceGlow} 3s ease-in-out infinite;
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      border-color: rgba(148, 216, 255, 0.8);
      background: rgba(255, 255, 255, 0.8);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: inherit;
    opacity: ${props => props.$active ? 0.8 : 0.4};
    transition: opacity 0.3s ease;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#3b82f6' : '#60a5fa'};
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${crystalGrow} 3s ease-in-out infinite;
  `}

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      135deg,
      rgba(148, 216, 255, 0.2) 0%,
      rgba(148, 216, 255, 0) 100%
    );
    animation: ${frostShimmer} 3s linear infinite;
    background-size: 200% 200%;
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
  position: relative;
  z-index: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#1e40af' : '#3b82f6'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#3b82f6' : '#60a5fa'};
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(148, 216, 255, 0.2)'};
  color: ${props => props.$color ? 'white' : '#3b82f6'};
  min-width: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(148, 216, 255, 0.2);
  border: 1px solid rgba(148, 216, 255, 0.3);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
`;

const FrostListGroup: React.FC<ListGroupProps> = ({
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

export default FrostListGroup; 