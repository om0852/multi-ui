import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Menubar Component
export const Menubar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
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
        React.cloneElement(child as React.ReactElement, {
          toggleMenu,
          isVisible,
          closeMenu,
        })
      )}
    </div>
  );
};

// MenubarTrigger Component
export const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  { children: ReactNode; toggleMenu?: () => void }
>(({ children, toggleMenu }, ref) => {
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

// MenubarContent Component
export const MenubarContent: React.FC<{
  children: React.ReactNode;
  isVisible?: boolean;
  closeMenu?: () => void;
}> = ({ children, isVisible = false, closeMenu }) => {
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
              React.cloneElement(child as React.ReactElement, {
                onClick: closeMenu,
              })
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MenubarItem Component
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({
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

// MenubarSub Component (submenu handling)
export const MenubarSub: React.FC<{ label: ReactNode; children: React.ReactNode }> = ({
  label,
  children,
}) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  const toggleSubmenu = () => setIsSubmenuVisible((prev) => !prev);
  const closeSubmenu = () => setIsSubmenuVisible(false);

  // Close the submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
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
            <ul className="py-2 px-3 space-y-1">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarSeparator Component
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-2 border-gray-200 dark:border-gray-700" />;
};

// MenubarCheckboxItem Component
export const MenubarCheckboxItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean, value: string) => void;
  value?: string;
  id?: string;
  disabled?: boolean;
}> = ({ children, checked = false, onChange, value = "", id, disabled = false }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

// MenubarRadioGroup Component
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="gap-2">{children}</ul>;
};

// MenubarRadioItem Component
export const MenubarRadioItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  id?: string;
  disabled?: boolean;
}> = ({ children, checked = false, onChange, value = "", id, disabled = false }) => {
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

// MenubarShortcut Component
export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-gray-500 text-sm ml-auto dark:text-gray-400">{children}</span>;
};
