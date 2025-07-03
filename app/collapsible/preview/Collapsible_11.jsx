
const Collapsible_11 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome className="text-xl" /> },
    { name: 'Profile', icon: <FiUser className="text-xl" /> },
    { name: 'Messages', icon: <FiMail className="text-xl" /> },
    { name: 'Notifications', icon: <FiBell className="text-xl" /> },
    { name: 'Settings', icon: <FiSettings className="text-xl" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-indigo-600 text-white"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`${isOpen ? 'w-64' : 'w-20'} bg-indigo-700 text-white transition-all duration-300 fixed h-full`}
      >
        <div className={`p-4 ${isOpen ? 'pl-6' : 'pl-5'} pt-16`}>
          {menuItems.map((item) => (
            <div 
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors ${activeItem === item.name ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className={`ml-4 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0 w-0'} transition-all duration-300 overflow-hidden`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'} p-8`}>
        <h1 className="text-3xl font-bold mb-6">{activeItem}</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700">
            This is the {activeItem.toLowerCase()} content. The sidebar can be toggled and will smoothly animate.
            The active item is highlighted for better user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_11 />);
