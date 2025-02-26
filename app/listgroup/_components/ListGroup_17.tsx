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

const neonPulse = keyframes`
  0% {
    box-shadow: 0 0 5px #ff00ff,
                0 0 10px #ff00ff,
                0 0 20px #ff00ff,
                0 0 40px #ff00ff;
  }
  100% {
    box-shadow: 0 0 10px #ff00ff,
                0 0 20px #ff00ff,
                0 0 40px #ff00ff,
                0 0 80px #ff00ff;
  }
`;

const textGlow = keyframes`
  0% {
    text-shadow: 0 0 4px #fff,
                 0 0 8px #fff,
                 0 0 12px #ff00ff;
  }
  100% {
    text-shadow: 0 0 2px #fff,
                 0 0 4px #fff,
                 0 0 6px #ff00ff;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #0a0a0a;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.2);
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
  background: ${props => props.$active ? 'rgba(255, 0, 255, 0.1)' : 'rgba(10, 10, 10, 0.8)'};
  border: 1px solid ${props => props.$active ? '#ff00ff' : 'rgba(255, 0, 255, 0.3)'};
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${neonPulse} 1.5s ease-in-out infinite alternate;
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      border-color: #ff00ff;
      background: rgba(255, 0, 255, 0.05);
      box-shadow: 0 0 10px rgba(255, 0, 255, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${props => props.$active ? '#ff00ff' : 'rgba(255, 0, 255, 0.7)'};
  transition: all 0.3s ease;

  ${props => props.$active && css`
    animation: ${textGlow} 1.5s ease-in-out infinite alternate;
  `}

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
  font-weight: 500;
  margin-bottom: 4px;
  transition: all 0.3s ease;

  ${props => props.$active && css`
    animation: ${textGlow} 1.5s ease-in-out infinite alternate;
  `}
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 0.875rem;
  transition: all 0.3s ease;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || '#ff00ff'};
  color: white;
  min-width: 20px;
  text-align: center;
`;

const NeonListGroup: React.FC<ListGroupProps> = ({
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

export default NeonListGroup; 