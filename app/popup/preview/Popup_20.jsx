const Popup20 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 150,
  label = 'Menu',
  centerColor = 'bg-red-500',
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
        '--x': '0px',
        '--y': '0px',
        transform: 'translate(0px, 0px) scale(0.5)',
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

  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 30 * Math.PI) / 180,
    delay: i * 0.1,
  }));

  // Add keyframes for the animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-burst {
      0% {
        transform: rotate(0deg) translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: rotate(0deg) translateY(${distance * 0.8}px) scale(0);
        opacity: 0;
      }
    }
    @keyframes burst-out {
      0% {
        transform: translate(0px, 0px) scale(0.5);
        opacity: 0;
      }
      50% {
        transform: translate(var(--x), var(--y)) scale(1.2);
        opacity: 0.8;
      }
      100% {
        transform: translate(var(--x), var(--y)) scale(1);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-red-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white font-bold cursor-pointer relative z-10 transition-all duration-300 shadow-lg`}
          style={{
            transform: isChecked ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">+</span>
            <span className="text-xs mt-1">{label}</span>
          </div>
        </button>
        {isChecked && particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            style={{
              animation: `particle-burst 1s ease-out ${particle.delay}s forwards`,
              transform: `rotate(${particle.angle}rad)`,
            }}
          />
        ))}
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
                animation: isChecked ? `burst-out 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s` : 'none',
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
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Particle Burst Menu</h1>
    <Popup20 
      label={
        <div className="flex flex-col items-center">
          <span className="text-2xl">+</span>
          <span className="text-xs mt-1">Burst</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-red-500 to-orange-500"
      menuColor="bg-gradient-to-br from-orange-400 to-yellow-400"
    />
  </div>
);

render(<App />);
