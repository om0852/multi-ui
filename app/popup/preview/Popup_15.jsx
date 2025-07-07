const Popup15 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Menu',
  centerColor = 'bg-violet-500',
  menuColor = 'bg-fuchsia-400',
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
        transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
      };
    }

    return {
      '--x': `${x}px`,
      '--y': `${y}px`,
      transform: `translate(var(--x), var(--y)) scale(1)`,
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

  // Add keyframes for the float animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% {
        transform: translate(var(--x), var(--y)) translateY(0px);
      }
      50% {
        transform: translate(var(--x), var(--y)) translateY(-10px);
      }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-violet-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 shadow-lg hover:shadow-xl`}
          style={{
            transform: isChecked ? 'scale(1.1)' : 'scale(1)',
            animation: isChecked ? 'float 2s infinite' : 'none',
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
              animation: isChecked ? `float ${2 + index * 0.2}s infinite ${index * 0.1}s` : 'none',
            }}
            className={`absolute ${menuColor} ${menuItemRadius} text-white rounded-full flex items-center justify-center text-xl cursor-pointer hover:brightness-110 shadow-lg`}
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
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Floating Menu</h1>
    <Popup15 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Float</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-violet-500 to-purple-600"
      menuColor="bg-gradient-to-br from-fuchsia-400 to-pink-400"
    />
  </div>
);

render(<App />);
