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

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pixelate = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #1a1a1a;
  border: 4px solid #33ff33;
  border-radius: 4px;
  padding: 4px;
  position: relative;
  font-family: 'Press Start 2P', monospace;
  image-rendering: pixelated;
  box-shadow: 0 0 20px rgba(51, 255, 51, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(51, 255, 51, 0.5);
    animation: ${scanline} 2s linear infinite;
    pointer-events: none;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 12px;
  background: ${props => props.$active ? '#003300' : '#000000'};
  border: 2px solid ${props => props.$active ? '#33ff33' : '#1a1a1a'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  transition: all 0.2s steps(4);

  &:hover {
    ${props => !props.$disabled && css`
      animation: ${pixelate} 0.2s steps(2) infinite;
      border-color: #33ff33;
      background: ${props.$active ? '#004400' : '#001100'};
    `}
  }

  &::before {
    content: '>';
    position: absolute;
    left: 4px;
    color: #33ff33;
    opacity: ${props => props.$active ? 1 : 0};
    animation: ${blink} 1s steps(2) infinite;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${props => props.$active ? '#33ff33' : '#1a991a'};
  margin-left: 16px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#33ff33' : '#1a991a'};
  font-size: 12px;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::after {
    content: '';
    display: ${props => props.$active ? 'inline-block' : 'none'};
    width: 8px;
    height: 12px;
    background: #33ff33;
    margin-left: 4px;
    animation: ${blink} 1s steps(2) infinite;
  }
`;

const Description = styled.div`
  color: #117711;
  font-size: 10px;
  font-family: monospace;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 8px;
  background: #000000;
  color: ${props => props.$color || '#33ff33'};
  font-size: 10px;
  border: 1px solid currentColor;
  min-width: 24px;
  text-align: center;
`;

const RetroGamingListGroup: React.FC<ListGroupProps> = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  const handleSelect = (item: ListGroupItem) => {
    if (!item.disabled && onSelect) {
      onSelect(item);
    }
  };

  return (
    <Container className={className}>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleSelect(item)}
            $active={activeItem === item.id}
            $disabled={!!item.disabled}
          >
            {item.icon && (
              <IconWrapper $active={activeItem === item.id}>
                {item.icon}
              </IconWrapper>
            )}
            <Content>
              <Title $active={activeItem === item.id}>
                {item.title}
              </Title>
              {item.description && (
                <Description>{item.description}</Description>
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

export default RetroGamingListGroup; 