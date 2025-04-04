'use client';

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const oldFilm = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.7;
  }
`;

const typewriter = keyframes`
  0% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-3px);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f4e9d9;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 
    0 4px 12px rgba(139, 69, 19, 0.1),
    inset 0 0 80px rgba(139, 69, 19, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    animation: ${oldFilm} 4s ease-in-out infinite;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.li`
  padding: 20px;
  background: ${props => props.$active ? '#fff7e6' : '#faf3e3'};
  border: 1px solid #d4b483;
  border-radius: 2px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 2px 2px 0 rgba(139, 69, 19, 0.1);

  ${props => props.$active && css`
    border-color: #b38b4d;
    box-shadow: 
      3px 3px 0 rgba(139, 69, 19, 0.15),
      inset 0 0 20px rgba(139, 69, 19, 0.05);

    &::before {
      content: '✦';
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      color: #b38b4d;
      font-size: 0.8rem;
      animation: ${typewriter} 2s ease-in-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translate(-2px, -2px);
      box-shadow: 4px 4px 0 rgba(139, 69, 19, 0.15);
      border-color: #c4a473;
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#8b4513' : '#b38b4d'};
  background: ${props => props.$active ? '#fff7e6' : 'transparent'};
  border: 1px solid ${props => props.$active ? '#b38b4d' : '#d4b483'};
  border-radius: 50%;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
`;

const Description = styled.div`
  color: ${props => props.$active ? '#a67b5b' : '#c4a473'};
  font-size: 0.9rem;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.01em;
  line-height: 1.4;
`;

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => props.$color || '#fff7e6'};
  color: ${props => props.$color ? 'white' : '#8b4513'};
  min-width: 20px;
  text-align: center;
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.02em;
  border: 1px solid ${props => props.$color || '#d4b483'};
  box-shadow: 1px 1px 0 rgba(139, 69, 19, 0.1);
`;

const VintageListGroup = ({
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

VintageListGroup.propTypes = {
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

export default VintageListGroup; 