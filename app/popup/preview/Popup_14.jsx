const Popup14 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Menu',
  centerColor = 'bg-amber-500',
  menuColor = 'bg-orange-400',
  centerRadius = 'w-16 h-16',
  menuItemRadius = 'w-12 h-12',
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
        transform: 'translate(0px, 0px) scale(0.5)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.3s ease-out',
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: 'visible',
      transition: `transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  // Add keyframes for the elastic-bounce animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes elastic-bounce {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      75% {
        transform: scale(0.9);
      }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-amber-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 shadow-lg hover:shadow-xl`}
          style={{
            transform: isChecked ? 'scale(1.1)' : 'scale(1)',
            animation: isChecked ? 'elastic-bounce 1s infinite' : 'none',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">+</span>
            <span className="text-xs mt-1">{label}</span>
          </div>
        </button>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg`}
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
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Elastic Bounce Menu</h1>
    <Popup14 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Bounce</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-amber-500 to-orange-500"
      menuColor="bg-gradient-to-br from-orange-400 to-red-400"
    />
  </div>
);

render(<App />);
