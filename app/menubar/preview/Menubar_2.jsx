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
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800"
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
    <div className="relative">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-2 w-56 bg-gray-50 shadow-xl rounded-lg z-10 dark:bg-gray-900 dark:shadow-gray-700"
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
    </div>
  );
};

const MenubarItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500 cursor-pointer transition-colors duration-150 rounded-md dark:text-gray-200 dark:hover:bg-blue-700"
    >
      {children}
    </li>
  );
};

const MenubarSub = ({ label, children }) => {
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
      {isSubmenuVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute left-full top-0 mt-2 w-56 bg-gray-50 shadow-xl rounded-lg z-10 dark:bg-gray-900 dark:shadow-gray-700"
          ref={submenuRef}
        >
          <ul className="py-2">
            {children}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

const MenubarSeparator = () => {
  return <hr className="my-2 border-gray-300 dark:border-gray-700" />;
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
    <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer rounded-md dark:hover:bg-blue-900">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          disabled={disabled}
          className="mr-2 accent-blue-500 dark:accent-blue-700"
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
    <li onClick={handleChange} className="px-4 py-2 hover:bg-blue-50 cursor-pointer rounded-md dark:hover:bg-blue-900">
      <label className="flex items-center">
        <input
          type="radio"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          disabled={disabled}
          className="mr-2 accent-blue-500 dark:accent-blue-700"
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

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Menubar>
        <MenubarTrigger>Actions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open File</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarSub label="Preferences">
            <MenubarItem>Settings</MenubarItem>
            <MenubarItem>Extensions</MenubarItem>
            <MenubarItem>Keyboard Shortcuts</MenubarItem>
          </MenubarSub>
          <MenubarCheckboxItem 
            checked={checked}
            onChange={(isChecked) => setChecked(isChecked)}
          >
            Dark Mode
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarSub label="View">
            <MenubarRadioGroup>
              <MenubarRadioItem 
                checked={radioValue === "option1"}
                onChange={setRadioValue}
                value="option1"
              >
                Option 1
              </MenubarRadioItem>
              <MenubarRadioItem 
                checked={radioValue === "option2"}
                onChange={setRadioValue}
                value="option2"
              >
                Option 2
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
        </MenubarContent>
      </Menubar>
    </div>
  );
};

render(<ExampleMenu />);
