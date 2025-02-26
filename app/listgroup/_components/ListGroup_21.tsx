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
  0% {
    transform: perspective(1000px) rotateX(-90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(1000px) rotateX(0);
    opacity: 1;
  }
`;

const paperWave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
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
  background: ${props => props.$active ? '#f8f9fa' : '#ffffff'};
  border: 1px solid ${props => props.$active ? '#e9ecef' : '#f1f3f5'};
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  transform-origin: top;
  animation: ${unfold} 0.5s ease-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #fff;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
    left: 8px;
    right: 8px;
    height: 1px;
    transform: scaleX(0);
  }

  &::after {
    bottom: 0;
    left: 8px;
    right: 8px;
    height: 1px;
    transform: scaleX(0);
  }

  ${props => props.$active && css`
    border-color: #dee2e6;
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.05),
      0 1px 3px rgba(0, 0, 0, 0.1);
    animation: ${paperWave} 2s ease-in-out infinite;

    &::before,
    &::after {
      transform: scaleX(1);
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      transform: translateY(-2px) scale(1.01);
      border-color: #dee2e6;
      box-shadow: 
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.1);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#495057' : '#868e96'};
  background: ${props => props.$active ? '#f1f3f5' : '#f8f9fa'};
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
    opacity: ${props => props.$active ? 1 : 0};
    transition: opacity 0.3s ease;
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
  color: ${props => props.$active ? '#212529' : '#495057'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Noto Sans', sans-serif;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#495057' : '#868e96'};
  font-size: 0.875rem;
  font-family: 'Noto Sans', sans-serif;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || '#f8f9fa'};
  color: ${props => props.$color ? '#fff' : '#495057'};
  min-width: 20px;
  text-align: center;
  border: 1px solid ${props => props.$color || '#e9ecef'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const OrigamiListGroup: React.FC<ListGroupProps> = ({
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

export default OrigamiListGroup; 