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

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const steam = keyframes`
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 0.6; }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #2c2420;
  border: 4px solid #8b7355;
  border-radius: 8px;
  padding: 8px;
  position: relative;
  box-shadow: 
    inset 0 0 20px rgba(139, 115, 85, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 20px;
    width: 20px;
    height: 30px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent);
    animation: ${steam} 3s ease-out infinite;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? '#3d2f28' : '#2c2420'};
  border: 2px solid ${props => props.$active ? '#cd9b1d' : '#8b7355'};
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -4px;
    width: 8px;
    height: 8px;
    background: ${props => props.$active ? '#cd9b1d' : '#8b7355'};
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    ${props => !props.$disabled && css`
      border-color: #cd9b1d;
      background: #3d2f28;
      transform: translateX(4px);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.$active ? '#cd9b1d' : '#8b7355'};
  color: #2c2420;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    border: 2px solid currentColor;
    border-radius: 50%;
    animation: ${rotate} 10s linear infinite;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#cd9b1d' : '#8b7355'};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.div`
  color: #a89888;
  font-size: 12px;
  font-family: 'Courier New', monospace;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || '#8b7355'};
  color: #2c2420;
  font-size: 12px;
  border-radius: 2px;
  font-family: 'Courier New', monospace;
  border: 1px solid #cd9b1d;
`;

const SteampunkListGroup: React.FC<ListGroupProps> = ({
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

export default SteampunkListGroup; 