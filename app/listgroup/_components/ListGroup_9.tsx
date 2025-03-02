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

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(-4px) rotate(1deg);
  }
  75% {
    transform: translateY(4px) rotate(-1deg);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${() => css`${float} ${3 + Math.random() * 2}s ease-in-out infinite`};
  animation-delay: ${() => Math.random() * 2}s;

  ${props => props.$active && `
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      #f6d365 0%,
      #fda085 25%,
      #f6d365 50%,
      #fda085 75%,
      #f6d365 100%
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    opacity: ${props => props.$active ? 1 : 0};
    transition: opacity 0.4s ease;
    background-size: 200% 200%;
    animation: ${css`${gradientShift}`} 3s linear infinite;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 12px;
  color: white;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${props => props.$active && `
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    transform: scale(1.1);
  `}

  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: white;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.4s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  ${props => props.$active && `
    transform: scale(1.02);
  `}
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 4px;
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 6px 12px;
  background: ${props => props.$color ? 
    `linear-gradient(135deg, ${props.$color}80, ${props.$color}40)` : 
    'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'
  };
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  transition: all 0.4s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const GradientListGroup: React.FC<ListGroupProps> = ({
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

export default GradientListGroup; 