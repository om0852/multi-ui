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

const press = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #e0e5ec;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 
    20px 20px 60px #bec3c9,
    -20px -20px 60px #ffffff;
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
  position: relative;
  padding: 16px;
  background: #e0e5ec;
  border-radius: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;

  ${props => props.$active ? `
    box-shadow: inset 6px 6px 12px #bec3c9,
                inset -6px -6px 12px #ffffff;
  ` : `
    box-shadow: 6px 6px 12px #bec3c9,
                -6px -6px 12px #ffffff;
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      box-shadow: 8px 8px 16px #bec3c9,
                  -8px -8px 16px #ffffff;
    `}
  }

  &:active {
    ${props => !props.$disabled && !props.$active && css`
      animation: ${press} 0.2s ease-in-out;
      box-shadow: inset 6px 6px 12px #bec3c9,
                  inset -6px -6px 12px #ffffff;
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #e0e5ec;
  border-radius: 12px;
  color: ${props => props.$active ? '#6366f1' : '#64748b'};
  transition: all 0.3s ease;

  ${props => props.$active ? `
    box-shadow: inset 4px 4px 8px #bec3c9,
                inset -4px -4px 8px #ffffff;
  ` : `
    box-shadow: 4px 4px 8px #bec3c9,
                -4px -4px 8px #ffffff;
  `}

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#6366f1' : '#1f2937'};
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
`;

const Description = styled.div`
  color: #64748b;
  font-size: 14px;
  margin-top: 4px;
  font-weight: 400;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 6px 12px;
  background: #e0e5ec;
  color: ${props => props.$color || '#64748b'};
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 4px 4px 8px #bec3c9,
              -4px -4px 8px #ffffff;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 4px 4px 8px #bec3c9,
                inset -4px -4px 8px #ffffff;
  }
`;

const NeumorphicListGroup: React.FC<ListGroupProps> = ({
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

export default NeumorphicListGroup; 