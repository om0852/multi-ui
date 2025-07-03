
const Collapsible_12 = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const menuData = [
    {
      id: 'products',
      title: 'Products',
      items: [
        { id: 'electronics', name: 'Electronics' },
        { id: 'clothing', name: 'Clothing' },
        { id: 'books', name: 'Books' },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions',
      items: [
        { id: 'business', name: 'For Business' },
        { id: 'education', name: 'For Education' },
        { id: 'startups', name: 'For Startups' },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        { id: 'blog', name: 'Blog' },
        { id: 'tutorials', name: 'Tutorials' },
        { id: 'support', name: 'Support Center' },
      ],
    },
  ];

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenus({});
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Multi-level Dropdown Menu</h1>
        
        <div className="relative" ref={menuRef}>
          <div className="flex space-x-1">
            {menuData.map((menu) => (
              <div key={menu.id} className="relative">
                <button
                  onClick={() => {
                    toggleMenu(menu.id);
                    setActiveMenu(activeMenu === menu.id ? null : menu.id);
                  }}
                  className={`px-4 py-2 rounded-md flex items-center ${
                    activeMenu === menu.id 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {menu.title}
                  <span className="ml-1">
                    {openMenus[menu.id] ? (
                      <FiChevronDown size={16} />
                    ) : (
                      <FiChevronRight size={16} />
                    )}
                  </span>
                </button>

                {openMenus[menu.id] && (
                  <div className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200">
                    {menu.items.map((item) => (
                      <a
                        key={item.id}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Selected: ${item.name}`);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Interactive Features:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Click on any menu to expand/collapse its dropdown</li>
            <li>Click outside to close all dropdowns</li>
            <li>Hover over items for visual feedback</li>
            <li>Responsive design that works on all screen sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

render(<Collapsible_12 />);
