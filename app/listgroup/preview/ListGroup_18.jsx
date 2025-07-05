
const unfold = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f5e6d3;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 
    0 1px 3px rgba(139, 69, 19, 0.1),
    0 10px 20px rgba(139, 69, 19, 0.05);
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  padding: 16px;
  background: ${props => props.$active ? '#fff' : '#f8f4ec'};
  border: 1px solid #d4b59e;
  border-radius: 6px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  animation: ${unfold} 0.4s ease-out;
  transform-origin: top;

  ${props => props.$active && `
    border-color: #8b4513;
    box-shadow: 
      0 2px 4px rgba(139, 69, 19, 0.1),
      0 0 0 2px rgba(139, 69, 19, 0.1);
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      background: #fff;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(139, 69, 19, 0.1);
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  background: ${props => props.$active ? '#fff' : 'transparent'};
  border: 2px solid currentColor;
  border-radius: 8px;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  font-weight: 600;
  font-family: 'Crimson Text', serif;
  margin-bottom: 4px;
  font-size: 1.1rem;
`;

const Description = styled.div`
  color: ${props => props.$active ? '#8b4513' : '#a67b5b'};
  font-size: 0.875rem;
  font-family: 'Crimson Text', serif;
  opacity: 0.8;
`;

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || '#8b4513'};
  color: white;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(139, 69, 19, 0.2);
`;

const PaperListGroup = ({
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
            style={{ animationDelay: `${index * 0.1}s` }}
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
      title: 'Journal Entry',
      description: 'Personal thoughts and reflections',
      icon: '📔',
      badge: 'New',
      badgeColor: '#8b4513'
    },
    {
      id: 'item2',
      title: 'Meeting Notes',
      description: 'Team discussion points',
      icon: '📝',
      badge: '3'
    },
    {
      id: 'item3',
      title: 'To-Do List',
      description: 'Tasks and reminders',
      icon: '✅',
      disabled: false
    },
    {
      id: 'item4',
      title: 'Sketchbook',
      description: 'Creative ideas and drawings',
      icon: '✏️',
      badge: 'Updated',
      badgeColor: '#8b4513'
    },
  ];

  const handleSelect = (item) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      console.log('Selected:', item.title);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-amber-50 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h3 className="text-2xl font-serif mb-6 text-center text-amber-900">
          Paper Notebook
        </h3>
        <PaperListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
