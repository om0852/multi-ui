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

const sway = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f0f7f4;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? '#e1f0e9' : 'white'};
  border-radius: 16px;
  border: 1px solid ${props => props.$active ? '#4caf50' : '#e0e7e3'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    ${props => !props.$disabled && css`
      transform-origin: center left;
      animation: ${sway} 2s ease infinite;
      border-color: #4caf50;
      background: ${props.$active ? '#d4e9db' : '#f8faf9'};
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.$active ? '#4caf50' : '#e8f5e9'};
  color: ${props => props.$active ? 'white' : '#2e7d32'};
  border-radius: 12px;
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#1b5e20' : '#2e7d32'};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Description = styled.div`
  color: #558b2f;
  font-size: 12px;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || '#e8f5e9'};
  color: ${props => props.$color ? 'white' : '#2e7d32'};
  font-size: 12px;
  border-radius: 12px;
`;

const NatureListGroup: React.FC<ListGroupProps> = ({
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

export default NatureListGroup; 