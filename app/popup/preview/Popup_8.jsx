const Popup8 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Click Me',
  centerColor = 'bg-blue-500',
  menuColor = 'bg-purple-500',
  centerRadius = 'w-16 h-16',
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
        transform: 'translate(0px, 0px) rotate(360deg)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) rotate(${angles[index]}deg)`,
      opacity: 1,
      visibility: 'visible',
      transition: `transform 0.4s ease-out ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  // Add keyframes for the bounce animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-purple-900 p-4">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id="popup8-checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        <label
          htmlFor="popup8-checkbox"
          onClick={onCenterClick}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl`}
          style={{
            animation: isChecked ? 'bounce 0.6s infinite' : 'none',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">+</span>
            <span className="text-xs mt-1">{label}</span>
          </div>
        </label>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-xl no-underline transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 hover:shadow-lg`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Bouncing Circular Menu</h1>
    <Popup8 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Menu</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-blue-500 to-indigo-500"
      menuColor="bg-gradient-to-br from-purple-500 to-pink-500"
      onCenterClick={() => console.log('Center button clicked')}
    />
  </div>
);

render(<App />);
