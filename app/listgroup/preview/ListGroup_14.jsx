
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

const ListItem = styled.li`
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

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.$active ? '#4caf50' : '#e8f5e9'};
  color: ${props => props.$active ? 'white' : '#2e7d32'};
  border-radius: 12px;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#1b5e20' : '#2e7d32'};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Description = styled.div`
  color: #558b2f;
  font-size: 12px;
`;

const Badge = styled.span`
  padding: 4px 12px;
  background: ${props => props.$color || '#e8f5e9'};
  color: ${props => props.$color ? 'white' : '#2e7d32'};
  font-size: 12px;
  border-radius: 12px;
`;

const NatureListGroup = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  const handleSelect = (item) => {
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

const ListGroupExample = () => {
  const [activeItem, setActiveItem] = React.useState('item1');
  
  const items = [
    {
      id: 'item1',
      title: 'Forest Trails',
      description: 'Explore the green canopy',
      icon: '🌲',
      badge: 'Popular',
      badgeColor: '#4caf50'
    },
    {
      id: 'item2',
      title: 'Mountain Peaks',
      description: 'Reach new heights',
      icon: '⛰️',
      badge: 'Challenging',
      badgeColor: '#8bc34a'
    },
    {
      id: 'item3',
      title: 'Lake View',
      description: 'Peaceful waters',
      icon: '🏞️',
      disabled: false
    },
    {
      id: 'item4',
      title: 'Garden Walk',
      description: 'Floral paradise',
      icon: '🌷',
      badge: 'Easy',
      badgeColor: '#43a047'
    },
  ];

  const handleSelect = (item) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      console.log('Selected:', item.title);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h3 className="text-lg font-medium mb-4 text-green-800 text-center">Nature Trails</h3>
        <NatureListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
