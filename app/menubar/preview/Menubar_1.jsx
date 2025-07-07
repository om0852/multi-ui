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
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 dark:bg-gray-800 dark:shadow-gray-900"
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
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700"
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
      <MenubarItem onClick={toggleSubmenu}>{label}</MenubarItem>
      {isSubmenuVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 dark:bg-gray-800 dark:shadow-gray-900"
          ref={submenuRef}
        >
          <ul className="py-2">{children}</ul>
        </motion.div>
      )}
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
    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700">
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

const MenubarShortcut = ({ children }) => {
  return <span className="ml-auto text-xs opacity-60">{children}</span>;
};

// Example usage
const ExampleMenu = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");

  return (
    <div className="p-8">
      <Menubar>
        <MenubarTrigger>Click me</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open File</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarSub label="Preferences">
            <MenubarItem>Settings</MenubarItem>
            <MenubarItem>Extensions</MenubarItem>
          </MenubarSub>
          <MenubarCheckboxItem 
            checked={checked}
            onChange={(isChecked) => setChecked(isChecked)}
          >
            Toggle Option
          </MenubarCheckboxItem>
          <MenubarRadioGroup>
            <MenubarItem 
              onClick={() => setRadioValue("option1")}
              className={radioValue === "option1" ? "bg-blue-100 dark:bg-blue-900" : ""}
            >
              Option 1
            </MenubarItem>
            <MenubarItem 
              onClick={() => setRadioValue("option2")}
              className={radioValue === "option2" ? "bg-blue-100 dark:bg-blue-900" : ""}
            >
              Option 2
            </MenubarItem>
          </MenubarRadioGroup>
          <MenubarItem>
            Keyboard Shortcuts
            <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>
    </div>
  );
};

render(<ExampleMenu />);
