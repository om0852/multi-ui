
const waves = keyframes`
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

const ripple = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.3);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 255, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #081b29;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li`
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(0, 255, 255, 0.1)' : 
    'rgba(8, 27, 41, 0.8)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(0, 255, 255, 0.5)' : 
    'rgba(0, 255, 255, 0.2)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);

  ${props => props.$active && css`
    animation: ${float} 3s ease-in-out infinite;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, 
        rgba(0, 255, 255, 0.1) 0%,
        rgba(0, 255, 255, 0) 100%
      );
      border-radius: inherit;
      animation: ${waves} 3s linear infinite;
      background-size: 200% 200%;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      transform: translateY(-2px);
      border-color: rgba(0, 255, 255, 0.3);
      animation: ${ripple} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#00ffff' : 'rgba(0, 255, 255, 0.7)'};
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(45deg, 
      rgba(0, 255, 255, 0.2) 0%,
      rgba(0, 255, 255, 0) 100%
    );
    animation: ${waves} 3s linear infinite;
    background-size: 200% 200%;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  text-shadow: ${props => props.$active ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none'};
`;

const Description = styled.div`
  color: ${props => props.$active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 0.875rem;
`;

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(0, 255, 255, 0.2)'};
  color: white;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 255, 0.3);
`;

const AquaListGroup = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  return (
    <Container className={className}>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            $active={activeItem === item.id}
            $disabled={!!item.disabled}
            onClick={() => !item.disabled && onSelect?.(item)}
            style={{ transitionDelay: `${index * 0.1}s` }}
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

const ListGroupExample = () => {
  const [activeItem, setActiveItem] = React.useState('item1');
  
  const items = [
    {
      id: 'item1',
      title: 'Ocean Explorer',
      description: 'Dive into the deep blue',
      icon: '🌊',
      badge: 'New',
      badgeColor: 'rgba(0, 200, 255, 0.3)'
    },
    {
      id: 'item2',
      title: 'Marine Life',
      description: 'Discover sea creatures',
      icon: '🐠',
      badge: '5',
      badgeColor: 'rgba(0, 255, 200, 0.3)'
    },
    {
      id: 'item3',
      title: 'Coral Reefs',
      description: 'Explore vibrant ecosystems',
      icon: '🐚',
      disabled: false
    },
    {
      id: 'item4',
      title: 'Underwater Caves',
      description: 'Hidden depths await',
      icon: '🕳️',
      badge: 'Danger',
      badgeColor: 'rgba(255, 100, 100, 0.3)'
    },
  ];

  const handleSelect = (item) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      console.log('Selected:', item.title);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          AQUA INTERFACE
        </h3>
        <AquaListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
