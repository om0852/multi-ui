const Popup17 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Menu',
  centerColor = 'bg-rose-500',
  menuColor = 'bg-pink-400',
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
        '--x': '0px',
        '--y': '0px',
        transform: 'translate(var(--x), var(--y)) scale(0.5)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
      };
    }

    return {
      '--x': `${x}px`,
      '--y': `${y}px`,
      transform: 'translate(var(--x), var(--y)) scale(1)',
      opacity: 1,
      visibility: 'visible',
      transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s, opacity 0.4s ease-out ${0.15 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  // Add keyframes for the animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fade-pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
    @keyframes staggered-fade {
      0%, 100% {
        opacity: 1;
        transform: translate(var(--x), var(--y)) scale(1);
      }
      50% {
        opacity: 0.6;
        transform: translate(var(--x), var(--y)) scale(0.95);
      }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-rose-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 shadow-lg`}
          style={{
            transform: isChecked ? 'scale(1.1)' : 'scale(1)',
            animation: isChecked ? 'fade-pulse 2s infinite' : 'none',
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
            style={{
              ...menuStyles(index),
              animation: isChecked ? `staggered-fade ${1 + index * 0.2}s infinite ${index * 0.15}s` : 'none',
            }}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:brightness-110 shadow-lg backdrop-blur-sm bg-opacity-90`}
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
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Fading Pulse Menu</h1>
    <Popup17 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Pulse</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-rose-500 to-pink-500"
      menuColor="bg-gradient-to-br from-pink-400 to-rose-400"
    />
  </div>
);

render(<App />);
