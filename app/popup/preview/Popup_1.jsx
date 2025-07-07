const Popup1 = ({
  menuItems = [
    { id: 'home', label: '🏠', href: '#' },
    { id: 'search', label: '🔍', href: '#' },
    { id: 'add', label: '➕', href: '#' },
    { id: 'favorite', label: '❤️', href: '#' },
    { id: 'user', label: '👤', href: '#' },
  ],
  distance = 192,
  centralContent = 'Click me',
  centerColor = 'bg-blue-500',
  menuColor = 'bg-orange-400',
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
        transform: `translate(0px, 0px) rotate(360deg)`,
        opacity: 0,
        visibility: 'hidden',
        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1,
      visibility: 'visible',
      transitionDelay: `${0.1 * index}s`,
    };
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        <label
          htmlFor="checkbox"
          className={`${centerColor} w-40 h-40 rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10 hover:scale-105 transition-transform`}
        >
          {centralContent}
        </label>
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            style={menuStyles(index)}
            className={`absolute ${menuColor} w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl no-underline transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg`}
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
    <h1 className="text-3xl font-bold text-center mb-8">Circular Menu Demo</h1>
    <Popup1 
      centralContent={
        <div className="flex flex-col items-center">
          <span className="text-2xl">☰</span>
          <span className="text-xs mt-1">Menu</span>
        </div>
      }
      centerColor="bg-purple-600"
      menuColor="bg-pink-500"
    />
  </div>
);

render(<App />);
