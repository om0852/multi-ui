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

const woodGrain = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const burnEffect = keyframes`
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.02);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #8b4513;
  background-image: 
    repeating-linear-gradient(
      45deg,
      rgba(139, 69, 19, 0.8),
      rgba(139, 69, 19, 0.8) 10px,
      rgba(160, 82, 45, 0.8) 10px,
      rgba(160, 82, 45, 0.8) 20px
    );
  border-radius: 8px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    inset 0 2px 10px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/></svg>');
    opacity: 0.1;
    animation: ${woodGrain} 20s linear infinite;
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
    'rgba(205, 133, 63, 0.3)' : 
    'rgba(205, 133, 63, 0.1)'
  };
  border: 2px solid ${props => props.$active ? 
    '#cd853f' : 
    'rgba(205, 133, 63, 0.3)'
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
    animation: ${burnEffect} 3s ease-in-out infinite;
    box-shadow: 
      0 4px 12px rgba(139, 69, 19, 0.2),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at center,
        rgba(205, 133, 63, 0.2),
        transparent 70%
      );
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(205, 133, 63, 0.2);
      border-color: rgba(205, 133, 63, 0.4);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'};
  background: ${props => props.$active ? 
    '#cd853f' : 
    'rgba(205, 133, 63, 0.5)'
  };
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.2),
        transparent 70%
      );
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 2px 4px rgba(0, 0, 0, 0.2)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || '#cd853f'};
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 2px;
  min-width: 20px;
  text-align: center;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.02em;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }
`;

const RusticListGroup: React.FC<ListGroupProps> = ({
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

export default RusticListGroup; 