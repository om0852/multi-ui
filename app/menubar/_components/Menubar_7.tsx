"use client"
import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the props interface
interface MenubarChildProps {
  toggleMenu?: () => void;
  isVisible?: boolean;
  closeMenu?: () => void;
}

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
        React.isValidElement<MenubarChildProps>(child)
          ? React.cloneElement(child, {
              toggleMenu,
              isVisible,
              closeMenu,
            })
          : child
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
      className="px-5 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
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
}> = ({ children, isVisible = false }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl z-20 border border-gray-200"
        >
          <ul className="py-3 space-y-2 px-2">{children}</ul>
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
      className="px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition"
    >
      {children}
    </li>
  );
};

// MenubarSub Component
export const MenubarSub: React.FC<{ label: ReactNode; children: React.ReactNode }> = ({
  label,
  children,
}) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <div className="relative">
      <MenubarItem onClick={() => setIsSubmenuVisible((prev) => !prev)}>{label}</MenubarItem>

      <AnimatePresence>
        {isSubmenuVisible && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-30"
          >
            <ul className="py-3 px-2 space-y-2">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarRadioGroup Component
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="space-y-3 px-2">{children}</ul>;
};

// MenubarRadioItem Component
export const MenubarRadioItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  id?: string;
}> = ({ children, checked = false, onChange, value = "", id }) => {
  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <li
      onClick={handleChange}
      className={`px-4 py-2 text-gray-700 rounded-md cursor-pointer transition ${
        checked
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-100 hover:text-blue-500"
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

// MenubarSeparator Component
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-2 border-gray-300" />;
};

// MenubarCheckboxItem Component
export const MenubarCheckboxItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}> = ({ children, checked = false, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <li className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer">
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

// MenubarShortcut Component
export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-gray-500 text-sm ml-auto">{children}</span>;
};
