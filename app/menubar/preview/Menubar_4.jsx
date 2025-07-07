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
      className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:shadow-xl transition"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

const MenubarContent = ({
  children,
  isVisible = false,
  closeMenu,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl z-20 dark:bg-gray-800"
        >
          <ul className="py-2 px-3 space-y-1">
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
      className="px-4 py-2 bg-gray-50 hover:bg-purple-100 rounded-lg cursor-pointer text-gray-800 font-medium dark:bg-gray-700 dark:hover:bg-purple-700 dark:text-gray-100 transition"
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
  const submenuRef = useRef(null);

  const toggleSubmenu = () => setIsSubmenuVisible((prev) => !prev);
  const closeSubmenu = () => setIsSubmenuVisible(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        closeSubmenu();
      }
    };

    if (isSubmenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubmenuVisible]);

  return (
    <div className="relative">
      <MenubarItem onClick={toggleSubmenu}>
        {label}
        <span className="ml-auto">›</span>
      </MenubarItem>
      <AnimatePresence>
        {isSubmenuVisible && (
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-full top-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-20 dark:bg-gray-800"
            ref={submenuRef}
          >
            <ul className="py-2 px-3 space-y-1">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenubarSeparator = () => {
  return <hr className="my-2 border-gray-200 dark:border-gray-700" />;
};

const MenubarCheckboxItem = ({
  children,
  checked = false,
  onChange,
  value = "",
  id,
  disabled = false,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked, value);
    }
  };

  return (
    <li className="px-4 py-2 bg-gray-50 hover:bg-purple-100 rounded-lg cursor-pointer dark:bg-gray-700 dark:hover:bg-purple-700 transition">
      <label className="flex items-center text-gray-800 dark:text-gray-100">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          disabled={disabled}
          className="mr-2"
        />
        {children}
      </label>
    </li>
  );
};

const MenubarRadioGroup = ({ children }) => {
  return <ul className="gap-2">{children}</ul>;
};

const MenubarRadioItem = ({
  children,
  checked = false,
  onChange,
  value = "",
  id,
  disabled = false,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <li
      onClick={handleChange}
      className="px-4 py-2 bg-gray-50 my-1 hover:bg-purple-100 rounded-lg cursor-pointer dark:bg-gray-700 dark:hover:bg-purple-700 transition"
    >
      <label className="flex items-center text-gray-800 dark:text-gray-100">
        <input
          type="radio"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          disabled={disabled}
          className="mr-2"
        />
        {children}
      </label>
    </li>
  );
};

const MenubarShortcut = ({ children }) => {
  return <span className="text-gray-500 text-sm ml-auto dark:text-gray-400">{children}</span>;
};

// Example usage
const ExampleMenu = () => {
  const [checkedItems, setCheckedItems] = useState({
    autoSave: false,
    darkMode: false,
    notifications: true,
  });
  
  const [radioValue, setRadioValue] = useState("light");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleCheckboxChange = (key) => (checked) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const toggleTheme = (theme) => {
    setSelectedTheme(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  return (
    <div className={`p-8 min-h-screen ${selectedTheme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-2xl font-bold ${selectedTheme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Modern UI Menu
        </h1>
        <div className="flex gap-2">
          <button 
            onClick={() => toggleTheme(selectedTheme === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center gap-2"
          >
            {selectedTheme === 'light' ? '🌙' : '☀️'}
            {selectedTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
      
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
            
            <MenubarSub label={
              <span className="flex items-center">
                <span className="mr-2">⚙️</span>
                Settings
              </span>
            }>
              <MenubarCheckboxItem 
                checked={checkedItems.autoSave}
                onChange={handleCheckboxChange('autoSave')}
              >
                Auto-save
              </MenubarCheckboxItem>
              <MenubarCheckboxItem 
                checked={checkedItems.notifications}
                onChange={handleCheckboxChange('notifications')}
              >
                Notifications
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarSub label={
                <span className="flex items-center">
                  <span className="mr-2">🎨</span>
                  Theme
                </span>
              }>
                <MenubarRadioGroup>
                  <MenubarRadioItem 
                    checked={radioValue === "light"}
                    onChange={setRadioValue}
                    value="light"
                  >
                    Light
                  </MenubarRadioItem>
                  <MenubarRadioItem 
                    checked={radioValue === "dark"}
                    onChange={setRadioValue}
                    value="dark"
                  >
                    Dark
                  </MenubarRadioItem>
                  <MenubarRadioItem 
                    checked={radioValue === "system"}
                    onChange={setRadioValue}
                    value="system"
                  >
                    System
                  </MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarSub>
            </MenubarSub>
            
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
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <span className="flex items-center">
                <span className="mr-2">✂️</span>
                Cut
              </span>
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <span className="flex items-center">
                <span className="mr-2">📋</span>
                Copy
              </span>
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <span className="flex items-center">
                <span className="mr-2">📝</span>
                Paste
              </span>
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </Menubar>
      </div>
    </div>
  );
};

render(<ExampleMenu />);
