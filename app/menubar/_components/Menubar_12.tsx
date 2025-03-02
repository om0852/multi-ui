import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface MenubarChildProps {
  toggleMenu?: () => void;
  isVisible?: boolean;
  closeMenu?: () => void;
  onClick?: () => void;
}


// Define the props interface
interface MenubarChildProps {
  toggleMenu?: () => void;
  isVisible?: boolean;
}

// Menubar Component
export const Menubar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
        setIsVisible(false);
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
        if (React.isValidElement<MenubarChildProps>(child)) {
          return React.cloneElement(child, {
            toggleMenu,
            isVisible,
          });
        }
        return child;
      })}
    </div>
  );
};

// MenubarTrigger Component
export const MenubarTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; toggleMenu?: () => void }>(({ children, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 focus:outline-none"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

// MenubarContent Component
export const MenubarContent: React.FC<{ children: React.ReactNode; isVisible?: boolean }> = ({
  children,
  isVisible = false,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="absolute top-full left-0 mt-3 w-80 bg-gradient-to-b from-purple-600 to-pink-500 rounded-xl shadow-xl z-20 border border-purple-700"
        >
          <ul className="py-3 space-y-2 px-4">{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MenubarItem Component
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-6 py-3 text-gray-900 bg-white hover:bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
    >
      {children}
    </li>
  );
};

// MenubarSub Component
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
            className="absolute left-full top-0 ml-3 w-60 bg-gradient-to-t from-green-200 to-teal-400 rounded-lg shadow-lg border border-green-500 z-30"
          >
            <ul className="py-3 px-4 space-y-2">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarRadioGroup Component
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="space-y-2 px-3">{children}</ul>;
};

// MenubarRadioItem Component
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
      className={`px-6 py-3 text-white rounded-md cursor-pointer transition-all ${
        checked
          ? "bg-teal-200 text-white font-semibold shadow-lg"
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

// MenubarSeparator Component
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-3 border-gray-400" />;
};

// MenubarCheckboxItem Component
export const MenubarCheckboxItem: React.FC<{ children: React.ReactNode; checked?: boolean; onChange?: (checked: boolean) => void }> = ({ children, checked = false, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <li className="px-6 py-3 text-indigo-900 bg-indigo-100 hover:bg-indigo-200 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all">
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
  return <span className="text-yellow-600 text-xs ml-auto">{children}</span>;
};
