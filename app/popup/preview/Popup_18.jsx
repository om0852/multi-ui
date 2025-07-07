const Popup18 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Menu',
  centerColor = 'bg-sky-500',
  menuColor = 'bg-blue-400',
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
        transform: 'translate(0px, 0px) scale(0.5) rotate(0deg)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
      };
    }

    return {
      '--x': `${x}px`,
      '--y': `${y}px`,
      transform: 'translate(var(--x), var(--y)) scale(1) rotate(360deg)',
      opacity: 1,
      visibility: 'visible',
      transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 * index}s, opacity 0.4s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  // Add keyframes for the swirl animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes swirl {
      0% {
        transform: translate(0px, 0px) scale(0.5) rotate(0deg);
      }
      100% {
        transform: translate(var(--x), var(--y)) scale(1) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-sky-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 shadow-lg`}
          style={{
            transform: isChecked ? 'scale(1.1) rotate(180deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">+</span>
            <span className="text-xs mt-1">{label}</span>
          </div>
        </button>
        {menuItems.map((item, index) => {
          const angle = (angles[index] * Math.PI) / 180;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          return (
            <div
              key={index}
              onClick={() => handleMenuItemClick(item)}
              style={{
                ...menuStyles(index),
                '--x': `${x}px`,
                '--y': `${y}px`,
                animation: isChecked ? `swirl ${0.8 + index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s` : 'none',
              }}
              className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:brightness-110 shadow-lg backdrop-blur-sm bg-opacity-90`}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Swirling Menu</h1>
    <Popup18 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Swirl</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-sky-500 to-blue-500"
      menuColor="bg-gradient-to-br from-blue-400 to-indigo-400"
    />
  </div>
);

render(<App />);
