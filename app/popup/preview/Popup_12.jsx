const Popup12 = ({
  menuItems = [
    { label: '🏠', onClick: () => console.log('Home clicked') },
    { label: '🔍', onClick: () => console.log('Search clicked') },
    { label: '➕', onClick: () => console.log('Add clicked') },
    { label: '❤️', onClick: () => console.log('Favorite clicked') },
    { label: '👤', onClick: () => console.log('User clicked') },
  ],
  distance = 120,
  label = '☰',
  centerColor = 'bg-blue-600',
  menuColor = 'bg-yellow-500',
  centerRadius = 'w-14 h-14',
  menuItemRadius = 'w-10 h-10',
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
        transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease-out',
      };
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(1)`,
      opacity: 1,
      visibility: 'visible',
      transition: `transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${0.1 * index}s, opacity 0.3s ease-out ${0.1 * index}s`,
    };
  };

  const handleMenuItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsChecked(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`${centerColor} ${centerRadius} rounded-full flex items-center justify-center text-white text-2xl font-bold cursor-pointer relative z-10 transform transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl ${
            isChecked ? 'rotate-90' : 'rotate-0'
          }`}
        >
          {label}
        </button>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item)}
            style={menuStyles(index)}
            className={`absolute ${menuColor} ${menuItemRadius} text-gray-800 rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-110`}
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
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Radial Menu</h1>
    <Popup12 
      label={
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-2xl">☰</span>
        </div>
      }
      centerColor="bg-gradient-to-br from-blue-600 to-indigo-600"
      menuColor="bg-gradient-to-br from-yellow-400 to-amber-400"
    />
  </div>
);

render(<App />);
