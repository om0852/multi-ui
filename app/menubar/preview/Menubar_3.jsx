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
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-xl z-20 dark:bg-gray-800"
        >
          <ul className="py-2">
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
      className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-700 cursor-pointer rounded-md transition"
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-xl z-20 dark:bg-gray-800"
            ref={submenuRef}
          >
            <ul className="py-2">
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
    <li className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-700 cursor-pointer rounded-md">
      <label className="flex items-center">
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
  return <ul>{children}</ul>;
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
      className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-700 cursor-pointer rounded-md"
    >
      <label className="flex items-center">
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
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`p-8 min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold dark:text-white">Modern Menu</h1>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      
      <Menubar>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open File</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          
          <MenubarSub label="Export">
            <MenubarItem>As PDF</MenubarItem>
            <MenubarItem>As Image</MenubarItem>
            <MenubarItem>As HTML</MenubarItem>
          </MenubarSub>
          
          <MenubarSeparator />
          
          <MenubarCheckboxItem 
            checked={checked}
            onChange={(isChecked) => setChecked(isChecked)}
          >
            Auto-save
          </MenubarCheckboxItem>
          
          <MenubarSub label="Themes">
            <MenubarRadioGroup>
              <MenubarRadioItem 
                checked={radioValue === "option1"}
                onChange={setRadioValue}
                value="option1"
              >
                Default
              </MenubarRadioItem>
              <MenubarRadioItem 
                checked={radioValue === "option2"}
                onChange={setRadioValue}
                value="option2"
              >
                Dark
              </MenubarRadioItem>
              <MenubarRadioItem 
                checked={radioValue === "option3"}
                onChange={setRadioValue}
                value="option3"
              >
                High Contrast
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </Menubar>
    </div>
  );
};

render(<ExampleMenu />);
