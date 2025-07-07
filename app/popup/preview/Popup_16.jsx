const Popup16 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Menu',
  centerColor = 'bg-emerald-500',
  menuColor = 'bg-lime-400',
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
      transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  // Add keyframes for the glow-pulse animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes glow-pulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
        transform: translate(var(--x), var(--y)) scale(1);
      }
      50% {
        box-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
        transform: translate(var(--x), var(--y)) scale(1.1);
      }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-emerald-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 shadow-lg`}
          style={{
            transform: isChecked ? 'scale(1.1)' : 'scale(1)',
            animation: isChecked ? 'glow-pulse 2s infinite' : 'none',
            boxShadow: isChecked ? '0 0 20px rgba(16, 185, 129, 0.6)' : 'none',
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
              animation: isChecked ? `glow-pulse ${2 + index * 0.2}s infinite ${index * 0.1}s` : 'none',
            }}
            className={`absolute ${menuColor} ${menuItemRadius} text-gray-800 rounded-full flex items-center justify-center text-xl cursor-pointer hover:brightness-110 shadow-lg`}
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
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Glowing Pulse Menu</h1>
    <Popup16 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Glow</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-emerald-500 to-green-500"
      menuColor="bg-gradient-to-br from-lime-400 to-emerald-400"
    />
  </div>
);

render(<App />);
