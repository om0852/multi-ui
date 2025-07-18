
const starField = keyframes`
  0% { transform: translateZ(0); }
  100% { transform: translateZ(100px); }
`;

const nebula = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #0f0f1e;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 0 40px rgba(88, 88, 255, 0.2);
  position: relative;
  perspective: 1000px;
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
    'linear-gradient(135deg, rgba(88, 88, 255, 0.2), rgba(136, 88, 255, 0.2))' : 
    'rgba(20, 20, 40, 0.6)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(136, 88, 255, 0.5)' : 
    'rgba(88, 88, 255, 0.2)'
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
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #5858ff, #8858ff);
      opacity: 0.1;
      border-radius: inherit;
      animation: ${nebula} 8s linear infinite;
      background-size: 200% 200%;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      transform: translateX(8px);
      background: rgba(88, 88, 255, 0.1);
      border-color: rgba(136, 88, 255, 0.3);
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#8858ff' : '#5858ff'};
  background: rgba(88, 88, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$active && css`
    animation: ${starTwinkle} 2s ease-in-out infinite;
  `}
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  text-shadow: ${props => props.$active ? '0 0 10px rgba(136, 88, 255, 0.5)' : 'none'};
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
  background: ${props => props.$color || 'linear-gradient(135deg, #5858ff, #8858ff)'};
  color: white;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(136, 88, 255, 0.3);
`;

const CosmicListGroup = ({
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
      title: 'Galactic Explorer',
      description: 'Explore the cosmos',
      icon: '🚀',
      badge: 'New',
      badgeColor: 'linear-gradient(135deg, #5858ff, #8858ff)'
    },
    {
      id: 'item2',
      title: 'Stellar Navigation',
      description: 'Set course to new worlds',
      icon: '🧭',
      badge: '3',
      badgeColor: 'linear-gradient(135deg, #ff58a8, #ff8a58)'
    },
    {
      id: 'item3',
      title: 'Wormhole Generator',
      description: 'Create space-time bridges',
      icon: '🌀',
      disabled: true,
      badge: 'Offline'
    },
    {
      id: 'item4',
      title: 'Cosmic Database',
      description: 'Access interstellar records',
      icon: '📚',
      badge: 'Updated',
      badgeColor: 'linear-gradient(135deg, #58ffa8, #58d1ff)'
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
        <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          COSMIC INTERFACE
        </h3>
        <CosmicListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
