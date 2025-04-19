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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      {React.Children.map(children, (child) => {
        if (React.isValidElement<MenubarChildProps>(child)) {
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

// MenubarTrigger Component with Minimal Design
export const MenubarTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; toggleMenu?: () => void }>(({ children, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className="px-6 py-2 font-medium text-gray-800 bg-transparent border-2 border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none transition duration-200"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

// MenubarContent Component with Minimalist Design
export const MenubarContent: React.FC<{ children: React.ReactNode; isVisible?: boolean;  }> = ({
  children,
  isVisible = false,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-20"
        >
          <ul className="py-2">{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MenubarItem with Subtle Hover Effects
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-200 rounded-md cursor-pointer transition duration-150"
    >
      {children}
    </li>
  );
};

// MenubarSub with Slide-In Submenu Animation
export const MenubarSub: React.FC<{ label: ReactNode; children: React.ReactNode }> = ({ label, children }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <div className="relative">
      <MenubarItem onClick={() => setIsSubmenuVisible((prev) => !prev)}>{label}</MenubarItem>

      <AnimatePresence>
        {isSubmenuVisible && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 ml-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-30"
          >
            <ul className="py-2">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarRadioGroup with a Simple Vertical Layout
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="flex flex-col space-y-2">{children}</ul>;
};

// MenubarRadioItem with Minimal Radio Button Style
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
      className={`px-4 py-2 text-gray-700 rounded-md cursor-pointer transition duration-150 hover:bg-gray-200 ${
        checked ? "bg-gray-300" : "hover:bg-gray-100"
      }`}
    >
      <label className="flex items-center">
        <input
          type="radio"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          className="mr-2"
        />
        {children}
      </label>
    </li>
  );
};

// MenubarSeparator with a Thin Line
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-2 border-t border-gray-300" />;
};

// MenubarCheckboxItem with Minimal Design
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
    <li className="px-4 py-2 text-gray-700 bg-transparent hover:bg-gray-100 rounded-md cursor-pointer transition duration-150">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="mr-2"
        />
        {children}
      </label>
    </li>
  );
};

// MenubarShortcut with a Minimal Style
export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-gray-500 text-sm ml-auto">{children}</span>;
};
