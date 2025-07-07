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
      className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-full shadow-md hover:shadow-lg transition"
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
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute top-full left-0 mt-3 w-64 bg-white rounded-lg shadow-2xl z-20 border border-gray-200 dark:bg-gray-800"
        >
          <ul className="py-2 px-4 space-y-2">
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
      className="px-4 py-2 rounded-md hover:bg-teal-100 text-teal-600 font-medium cursor-pointer dark:hover:bg-gray-700 dark:text-gray-300 transition"
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
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-full top-0 mt-2 w-56 bg-white rounded-lg shadow-md z-20 border border-gray-200 dark:bg-gray-800"
          >
            <ul className="py-2 px-4 space-y-2">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenubarRadioGroup = ({ children }) => {
  return <ul className="space-y-4">{children}</ul>;
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
      className={`px-4 py-2 rounded-lg cursor-pointer transition ${
        checked
          ? "bg-teal-200 text-teal-700 font-semibold dark:bg-teal-600 dark:text-white"
          : "hover:bg-teal-100 text-teal-600 dark:hover:bg-teal-700 dark:text-gray-300"
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
  return <hr className="my-2 border-gray-300 dark:border-gray-600" />;
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
    <li className="px-4 py-2 rounded-md cursor-pointer hover:bg-teal-100 dark:hover:bg-gray-700">
      <label className="flex items-center text-teal-600 dark:text-gray-300">
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
  return <span className="text-gray-400 text-sm ml-auto dark:text-gray-500">{children}</span>;
};

// Example usage
const ExampleMenu = () => {
  const [checkedItems, setCheckedItems] = useState({
    autoSave: true,
    darkMode: false,
    spellCheck: true,
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
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Modern UI Menu
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
                <MenubarCheckboxItem 
                  checked={checkedItems.autoSave}
                  onChange={handleCheckboxChange('autoSave')}
                >
                  Auto-save
                </MenubarCheckboxItem>
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
                  checked={checkedItems.spellCheck}
                  onChange={handleCheckboxChange('spellCheck')}
                >
                  Spell Check
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
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Modern UI Menu Component</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This is a clean, modern menu component with smooth animations and a beautiful gradient button.
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
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white"
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
