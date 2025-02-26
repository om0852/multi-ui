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

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const glow = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  overflow: hidden;
  padding: 8px;
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
  position: relative;
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.15)' : 
    'rgba(255, 255, 255, 0.05)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: ${props => !props.$disabled && 'translateY(-2px)'};
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${css`${shimmer}`} 3s linear infinite;
    opacity: ${props => props.$active ? 1 : 0};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 12px;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1)
    ) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  transition: all 0.3s ease;
  animation: ${css`${glow}`} 2s ease-in-out infinite;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-top: 4px;
  font-weight: 400;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color ? 
    `${props.$color}40` : 
    'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => props.$color || '#fff'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid ${props => props.$color ? 
    `${props.$color}80` : 
    'rgba(255, 255, 255, 0.2)'
  };
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
`;

const GlassmorphicListGroup: React.FC<ListGroupProps> = ({
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

export default GlassmorphicListGroup; 