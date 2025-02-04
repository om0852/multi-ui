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

const snowfall = keyframes`
  0% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(10px) rotate(360deg);
    opacity: 0;
  }
`;

const frostGlow = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f8f9fb;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 
    0 8px 30px rgba(200, 215, 235, 0.2),
    0 0 0 1px #e8eef7;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, #e8eef7, #c8d7eb, #e8eef7);
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? '#ffffff' : 'transparent'};
  border: 1px solid ${props => props.$active ? '#c8d7eb' : '#e8eef7'};
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$active && css`
    box-shadow: 0 4px 20px rgba(200, 215, 235, 0.15);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(200, 215, 235, 0.1), rgba(255, 255, 255, 0.1));
      border-radius: inherit;
      animation: ${frostGlow} 3s ease-in-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      background: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(200, 215, 235, 0.1);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${props => props.$active ? '#4a5f7b' : '#8195b0'};
  background: ${props => props.$active ? '#f0f5fa' : 'transparent'};
  border-radius: 8px;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#2c3e50' : '#4a5f7b'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#4a5f7b' : '#8195b0'};
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.005em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || '#f0f5fa'};
  color: ${props => props.$color ? 'white' : '#4a5f7b'};
  min-width: 20px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.01em;
  border: 1px solid ${props => props.$color || '#e8eef7'};
`;

const NordicListGroup: React.FC<ListGroupProps> = ({
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

export default NordicListGroup; 