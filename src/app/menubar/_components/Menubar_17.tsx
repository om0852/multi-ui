import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Menubar Component
export const Menubar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

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

// MenubarTrigger Component with New Design
export const MenubarTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; toggleMenu?: () => void }>(({ children, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className="px-8 py-4 text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-300"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

// MenubarContent Component with a New Layout
export const MenubarContent: React.FC<{ children: React.ReactNode; isVisible?: boolean; closeMenu?: () => void }> = ({
  children,
  isVisible = false,
  closeMenu,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 mt-3 w-72 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-lg shadow-2xl z-20 p-4"
        >
          <ul className="flex flex-col space-y-2">{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MenubarItem with New Design and Layout
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-6 py-3 text-gray-100 bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer transition-all duration-200 transform hover:scale-105"
    >
      {children}
    </li>
  );
};

// MenubarSub with a New Design (submenus now slide in from the right)
export const MenubarSub: React.FC<{ label: ReactNode; children: React.ReactNode }> = ({ label, children }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <div className="relative">
      <MenubarItem onClick={() => setIsSubmenuVisible((prev) => !prev)}>{label}</MenubarItem>

      <AnimatePresence>
        {isSubmenuVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-full top-0 ml-4 w-64 bg-gradient-to-bl from-indigo-700 to-indigo-900 rounded-lg shadow-lg z-30 p-3"
          >
            <ul className="space-y-2">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarRadioGroup Component with Vertical Layout
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="flex flex-col space-y-2">{children}</ul>;
};

// MenubarRadioItem with New Layout (Radio items now have a new structure)
export const MenubarRadioItem: React.FC<{ children: React.ReactNode; checked?: boolean; onChange?: (value: string) => void; value?: string; id?: string }> = ({
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
      className={`px-6 py-3 text-white rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 ${
        checked
          ? "bg-indigo-500 font-semibold shadow-lg"
          : "hover:bg-indigo-400 hover:text-indigo-100"
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

// MenubarSeparator with New Style
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-3 border-t-2 border-indigo-400" />;
};

// MenubarCheckboxItem with New Design
export const MenubarCheckboxItem: React.FC<{ children: React.ReactNode; checked?: boolean; onChange?: (checked: boolean) => void }> = ({
  children,
  checked = false,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <li className="px-6 py-3 text-gray-100 bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
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

// MenubarShortcut with New Style
export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-yellow-400 text-sm ml-auto">{children}</span>;
};
