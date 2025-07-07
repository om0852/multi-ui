const { useState, useEffect, useRef, forwardRef } = React;

const Menubar = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div ref={menubarRef} className="relative inline-block">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            toggleMenu,
            isVisible,
            closeMenu,
          });
        }
        return child;
      })}
    </div>
  );
};

const MenubarTrigger = forwardRef(({ children, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className="px-6 py-3 font-semibold text-white bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

const MenubarContent = ({
  children,
  isVisible = false,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-pink-200 to-yellow-300 rounded-lg shadow-xl z-20 border border-pink-400"
        >
          <ul className="py-3 space-y-2 px-4">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onClick: () => closeMenu?.(),
              })
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenubarItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
    >
      {children}
    </li>
  );
};

const MenubarSub = ({ label, children }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <div className="relative">
      <MenubarItem onClick={() => setIsSubmenuVisible((prev) => !prev)}>
        {label}
        <span className="ml-auto">›</span>
      </MenubarItem>

      <AnimatePresence>
        {isSubmenuVisible && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-full top-0 ml-3 w-56 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg shadow-md border border-teal-300 z-30"
          >
            <ul className="py-3 px-4 space-y-2">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenubarRadioGroup = ({ children }) => {
  return <ul className="space-y-2 px-3">{children}</ul>;
};

const MenubarRadioItem = ({
  children,
  checked = false,
  onChange,
  value = "",
  id,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <li
      onClick={handleChange}
      className={`px-4 py-2 text-teal-800 rounded-md cursor-pointer transition ${
        checked
          ? "bg-teal-200 font-semibold shadow-lg"
          : "hover:bg-teal-100 hover:text-teal-600 shadow-sm hover:shadow-md"
      }`}
    >
      <label className="flex items-center">
        <input
          type="radio"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          className="mr-3"
        />
        {children}
      </label>
    </li>
  );
};

const MenubarSeparator = () => {
  return <hr className="my-3 border-gray-300" />;
};

const MenubarCheckboxItem = ({
  children,
  checked = false,
  onChange,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <li className="px-4 py-2 text-teal-900 bg-teal-100 hover:bg-teal-200 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="mr-3"
        />
        {children}
      </label>
    </li>
  );
};

const MenubarShortcut = ({ children }) => {
  return <span className="text-indigo-600 text-sm ml-auto">{children}</span>;
};

// Example usage
const ExampleMenu = () => {
  const [checkedItems, setCheckedItems] = useState({
    autoSave: true,
    darkMode: false,
    notifications: true,
  });
  
  const [viewMode, setViewMode] = useState("list");
  const [theme, setTheme] = useState("light");

  const handleCheckboxChange = (key) => (checked) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-orange-800">Modern UI Menu</h1>
          <div className="flex gap-4">
            <Menubar>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <span className="flex items-center">
                    <span className="mr-2">📄</span>
                    New File
                  </span>
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <span className="flex items-center">
                    <span className="mr-2">📂</span>
                    Open File
                  </span>
                  <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <span className="flex items-center">
                    <span className="mr-2">💾</span>
                    Save
                  </span>
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <span className="flex items-center">
                    <span className="mr-2">⚙️</span>
                    Settings
                  </span>
                  <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <span className="flex items-center text-red-500">
                    <span className="mr-2">🚪</span>
                    Exit
                  </span>
                </MenubarItem>
              </MenubarContent>
            </Menubar>
            
            <Menubar>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup>
                  <MenubarRadioItem 
                    checked={viewMode === "list"}
                    onChange={setViewMode}
                    value="list"
                  >
                    List View
                  </MenubarRadioItem>
                  <MenubarRadioItem 
                    checked={viewMode === "grid"}
                    onChange={setViewMode}
                    value="grid"
                  >
                    Grid View
                  </MenubarRadioItem>
                  <MenubarRadioItem 
                    checked={viewMode === "details"}
                    onChange={setViewMode}
                    value="details"
                  >
                    Details View
                  </MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarCheckboxItem 
                  checked={checkedItems.darkMode}
                  onChange={handleCheckboxChange('darkMode')}
                >
                  Dark Mode
                </MenubarCheckboxItem>
                <MenubarCheckboxItem 
                  checked={checkedItems.notifications}
                  onChange={handleCheckboxChange('notifications')}
                >
                  Notifications
                </MenubarCheckboxItem>
              </MenubarContent>
            </Menubar>
            
            <Menubar>
              <MenubarTrigger>Theme</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setTheme("light")}>
                  <span className="flex items-center">
                    <span className="mr-2">☀️</span>
                    Light
                  </span>
                </MenubarItem>
                <MenubarItem onClick={() => setTheme("dark")}>
                  <span className="flex items-center">
                    <span className="mr-2">🌙</span>
                    Dark
                  </span>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={toggleTheme}>
                  <span className="flex items-center">
                    <span className="mr-2">🔄</span>
                    Toggle Theme
                  </span>
                  <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </Menubar>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Modern UI Menu Component</h2>
          <p className="text-orange-700 mb-6">
            This is a vibrant, modern menu component with a beautiful orange and red color scheme.
            The menu includes various interactive elements like checkboxes, radio buttons, and submenus.
          </p>
          
          <div className="flex items-center gap-4">
            <Menubar>
              <MenubarTrigger>Try it out!</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Action 1</MenubarItem>
                <MenubarItem>Action 2</MenubarItem>
                <MenubarSub label={
                  <span className="flex items-center">
                    <span className="mr-2">🔽</span>
                    More Actions
                  </span>
                }>
                  <MenubarItem>Submenu Item 1</MenubarItem>
                  <MenubarItem>Submenu Item 2</MenubarItem>
                  <MenubarItem>Submenu Item 3</MenubarItem>
                </MenubarSub>
              </MenubarContent>
            </Menubar>
            
            <button 
              onClick={toggleTheme}
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition"
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<ExampleMenu />);
