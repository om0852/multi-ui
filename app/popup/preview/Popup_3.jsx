const Popup3 = ({
  menuItems = [
    { id: 'home', content: '🏠', href: '#', onClick: () => console.log('Home clicked') },
    { id: 'search', content: '🔍', href: '#', onClick: () => console.log('Search clicked') },
    { id: 'add', content: '➕', href: '#', onClick: () => console.log('Add clicked') },
    { id: 'favorite', content: '❤️', href: '#', onClick: () => console.log('Favorite clicked') },
    { id: 'user', content: '👤', href: '#', onClick: () => console.log('User clicked') },
  ],
  distance = 180,
  centralContent = 'Menu',
  centerColor = 'bg-indigo-500',
  menuColor = 'bg-pink-400',
  centerRadius = 'w-32 h-32',
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
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-4">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id="popup3-checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        <label
          htmlFor="popup3-checkbox"
          onClick={onCenterClick}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-2xl font-bold cursor-pointer relative z-10 transition-all duration-300 transform shadow-lg hover:shadow-xl`}
          style={{
            transform: isChecked ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg)',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl">+</span>
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
            {item.content}
          </a>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Circular Menu with Icons</h1>
    <Popup3 
      centralContent={
        <div className="flex flex-col items-center">
          <span className="text-4xl">+</span>
          <span className="text-sm mt-1">Options</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-indigo-600 to-purple-600"
      menuColor="bg-gradient-to-br from-pink-500 to-rose-500"
      onCenterClick={() => console.log('Center button clicked')}
    />
  </div>
);

render(<App />);
