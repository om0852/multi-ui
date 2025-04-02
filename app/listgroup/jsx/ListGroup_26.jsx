'use client';

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const brushStroke = keyframes`
  0% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleX(1);
    opacity: 1;
  }
`;

const inkDrop = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #2d2d2d;
    transform-origin: left;
    animation: ${brushStroke} 0.6s ease-out forwards;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  padding: 16px;
  background: ${props => props.$active ? '#ffffff' : 'transparent'};
  border: 1px solid ${props => props.$active ? '#2d2d2d' : '#e5e5e5'};
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      left: -2px;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 70%;
      background: #2d2d2d;
      animation: ${inkDrop} 0.3s ease-out forwards;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      background: #ffffff;
      border-color: #2d2d2d;
      transform: translateX(4px);
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${props => props.$active ? '#2d2d2d' : '#666666'};
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#2d2d2d' : '#4a4a4a'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
`;

const Description = styled.div`
  color: ${props => props.$active ? '#4a4a4a' : '#666666'};
  font-size: 0.875rem;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span`
  padding: 2px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || '#f0f0f0'};
  color: ${props => props.$color ? 'white' : '#2d2d2d'};
  min-width: 20px;
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: 0.02em;
  border: 1px solid ${props => props.$color || '#e0e0e0'};
`;

const ZenListGroup = ({
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

ZenListGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
      badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      badgeColor: PropTypes.string,
      disabled: PropTypes.bool
    })
  ).isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  activeItem: PropTypes.string
};

export default ZenListGroup; 