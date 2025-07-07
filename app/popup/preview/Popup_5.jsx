const Popup5 = ({
  menuItems = [
    { id: 'home', content: '🏠', onClick: () => console.log('Home clicked') },
    { id: 'search', content: '🔍', onClick: () => console.log('Search clicked') },
    { id: 'add', content: '➕', onClick: () => console.log('Add clicked') },
    { id: 'favorite', content: '❤️', onClick: () => console.log('Favorite clicked') },
    { id: 'user', content: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 120,
  centralContent = 'Open Menu',
  centerColor = 'bg-green-500',
  menuColor = 'bg-purple-500',
  centerRadius = 'w-24 h-24',
  menuItemRadius = 'w-12 h-12',
  onCenterClick
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const angles = Array.from({ length: menuItems.length }, (_, index) =>
    (360 / menuItems.length) * index
  );

  const menuStyles = (index) => {
    const angle = (angles[index] * Math.PI) / 180;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    if (!isChecked) {
      return {
        transform: 'translate(0px, 0px)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      };
    }

    return {
      transform: `translate(${x}px, ${y}px)`,
      opacity: 1,
      visibility: 'visible',
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-4">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id="popup5-checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        <label
          htmlFor="popup5-checkbox"
          onClick={onCenterClick}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer relative z-10 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl`}
          style={{
            transform: isChecked ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl">+</span>
            <span className="text-xs mt-1">{centralContent}</span>
          </div>
        </label>
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-2xl no-underline transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 hover:shadow-lg`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Minimal Circular Menu</h1>
    <Popup5 
      centralContent={
        <div className="flex flex-col items-center">
          <span className="text-3xl">+</span>
          <span className="text-xs mt-1">Menu</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-green-500 to-emerald-500"
      menuColor="bg-gradient-to-br from-purple-500 to-pink-500"
      onCenterClick={() => console.log('Center button clicked')}
    />
  </div>
);

render(<App />);
