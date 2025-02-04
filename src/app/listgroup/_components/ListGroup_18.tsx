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

const unfold = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f5e6d3;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 
    0 1px 3px rgba(139, 69, 19, 0.1),
    0 10px 20px rgba(139, 69, 19, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
    opacity: 0.5;
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
  background: ${props => props.$active ? '#fff' : '#f8f4ec'};
  border: 1px solid #d4b59e;
  border-radius: 6px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  animation: ${unfold} 0.4s ease-out;
  transform-origin: top;

  ${props => props.$active && `
    border-color: #8b4513;
    box-shadow: 
      0 2px 4px rgba(139, 69, 19, 0.1),
      0 0 0 2px rgba(139, 69, 19, 0.1);
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      background: #fff;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(139, 69, 19, 0.1);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
    opacity: 0.1;
    pointer-events: none;
    border-radius: inherit;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  background: ${props => props.$active ? '#fff' : 'transparent'};
  border: 2px solid currentColor;
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
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  font-weight: 600;
  font-family: 'Crimson Text', serif;
  margin-bottom: 4px;
  font-size: 1.1rem;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  font-size: 0.875rem;
  font-family: 'Crimson Text', serif;
  opacity: 0.8;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || '#8b4513'};
  color: white;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(139, 69, 19, 0.2);
`;

const PaperListGroup: React.FC<ListGroupProps> = ({
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

export default PaperListGroup; 