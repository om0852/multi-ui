const Popup2 = ({
  menuItems = [
    { id: 'home', label: '🏠', href: '#', onClick: () => console.log('Home clicked') },
    { id: 'search', label: '🔍', href: '#', onClick: () => console.log('Search clicked') },
    { id: 'add', label: '➕', href: '#', onClick: () => console.log('Add clicked') },
    { id: 'favorite', label: '❤️', href: '#', onClick: () => console.log('Favorite clicked') },
    { id: 'user', label: '👤', href: '#', onClick: () => console.log('User clicked') },
  ],
  distance = 180,
  centralContent = 'Menu',
  centerColor = 'bg-green-500',
  menuColor = 'bg-purple-400',
  centerRadius = 'w-36 h-36',
  menuItemRadius = 'w-14 h-14',
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
    if (!isChecked) {
      return {
        transform: 'scale(0) rotate(0deg)',
        opacity: 0,
        visibility: 'hidden',
        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: 'visible',
      transitionDelay: `${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id="popup2-checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        <label
          htmlFor="popup2-checkbox"
          onClick={onCenterClick}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-2xl font-bold cursor-pointer relative z-10 transition-all duration-300 transform shadow-lg hover:shadow-xl`}
          style={{
            transform: isChecked ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg)',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl">+</span>
            <span className="text-sm mt-1">{centralContent}</span>
          </div>
        </label>
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(item);
            }}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-2xl no-underline transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Circular Menu with Rotation</h1>
    <Popup2 
      centralContent={
        <div className="flex flex-col items-center">
          <span className="text-3xl">+</span>
          <span className="text-sm mt-1">Actions</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-green-500 to-teal-500"
      menuColor="bg-gradient-to-br from-purple-500 to-pink-500"
      onCenterClick={() => console.log('Center button clicked')}
    />
  </div>
);

render(<App />);
