const { useState, useEffect, useRef, forwardRef } = React;

// Pastel color definitions
const pastelColors = {
  blue: '#A7C7E7',
  lightBlue: '#C1E1FF',
  purple: '#C3B1E1',
  lightPurple: '#D8BFD8',
  green: '#B5EAD7',
  lightGreen: '#C7F0DB',
  yellow: '#FDFD96',
  lightYellow: '#FFFACD',
  pink: '#FFD1DC',
  lightPink: '#FFE4E1',
};

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
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          toggleMenu,
          isVisible,
          closeMenu,
        })
      )}
    </div>
  );
};

const MenubarTrigger = forwardRef(({ children, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className="px-5 py-3 font-bold text-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all"
      style={{ backgroundColor: pastelColors.blue }}
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg z-20 border"
          style={{ 
            backgroundColor: pastelColors.yellow,
            borderColor: pastelColors.green 
          }}
        >
          <ul className="py-4 space-y-4 px-4">
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

const MenubarItem = ({
  children,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 font-medium rounded-md shadow-sm hover:shadow-lg transition-all cursor-pointer"
      style={{
        color: pastelColors.purple,
        backgroundColor: pastelColors.green,
        '&:hover': {
          backgroundColor: pastelColors.lightGreen,
        }
      }}
    >
      {children}
    </li>
  );
};

const MenubarSub = ({
  label,
  children,
}) => {
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
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            className="absolute left-full top-0 ml-3 w-48 rounded-lg shadow-lg z-30 border"
            style={{
              backgroundColor: pastelColors.purple,
              borderColor: pastelColors.lightPurple
            }}
          >
            <ul className="py-3 px-4 space-y-4">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenubarRadioGroup = ({ children }) => {
  return <ul className="space-y-4 px-2">{children}</ul>;
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
      className={`px-4 py-2 rounded-md cursor-pointer transition-all ${
        checked ? 'font-semibold shadow-lg' : 'shadow-sm'
      }`}
      style={{
        color: checked ? 'white' : 'inherit',
        backgroundColor: checked ? pastelColors.blue : pastelColors.lightBlue,
        '&:hover': {
          backgroundColor: pastelColors.blue,
          color: 'white',
        },
      }}
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
  return <hr className="my-3" style={{ borderColor: pastelColors.green }} />;
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
    <li 
      className="px-4 py-2 cursor-pointer rounded-lg shadow-sm hover:shadow-lg transition-all"
      style={{
        color: pastelColors.blue,
        backgroundColor: pastelColors.lightYellow,
        '&:hover': {
          backgroundColor: pastelColors.yellow,
        },
      }}
    >
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
  return <span className="text-sm ml-auto" style={{ color: pastelColors.purple }}>{children}</span>;
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
    <div 
      className="min-h-screen p-8"
      style={{ 
        background: `linear-gradient(135deg, ${pastelColors.lightPink} 0%, ${pastelColors.lightBlue} 100%)`
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 
            className="text-3xl font-bold"
            style={{ color: pastelColors.purple }}
          >
            Pastel UI Menu
          </h1>
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
                  <span className="flex items-center" style={{ color: '#FF6B6B' }}>
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
        
        <div 
          className="p-8 rounded-2xl shadow-lg border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderColor: pastelColors.green
          }}
        >
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: pastelColors.purple }}
          >
            Pastel UI Menu Component
          </h2>
          <p 
            className="mb-6"
            style={{ color: pastelColors.purple }}
          >
            This is a delightful pastel-themed menu component with soft colors and smooth animations.
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
              className="px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
              style={{
                backgroundColor: pastelColors.pink,
                color: pastelColors.purple,
                '&:hover': {
                  backgroundColor: pastelColors.lightPink,
                },
              }}
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
