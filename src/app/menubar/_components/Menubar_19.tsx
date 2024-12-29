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

// MenubarTrigger Component with Bold, Modern Button Design
export const MenubarTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; toggleMenu?: () => void }>(({ children, toggleMenu }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-xl transition-transform transform hover:scale-105"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

// MenubarContent Component with Slide-In Animation and Soft Shadow
export const MenubarContent: React.FC<{ children: React.ReactNode; isVisible?: boolean; closeMenu?: () => void }> = ({
  children,
  isVisible = false,
  closeMenu,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-2xl z-20"
        >
          <ul className="py-3 px-4">{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MenubarItem with Bold Hover Effects and Rounded Design
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 text-indigo-800 mb-1 font-semibold bg-indigo-100 hover:bg-indigo-200 rounded-lg cursor-pointer transition duration-200 ease-in-out"
    >
      {children}
    </li>
  );
};

// MenubarSub with Sliding Submenu and Bold Hover Effects
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
            className="absolute left-full top-0 ml-4 w-56 bg-gradient-to-r from-yellow-100 to-yellow-300 rounded-lg shadow-xl z-30"
          >
            <ul className="py-3 px-4">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarRadioGroup with Vertical Layout and Modern Style
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="flex flex-col space-y-3">{children}</ul>;
};

// MenubarRadioItem with Bold Active State and Smooth Hover
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
      className={`px-4 py-2 text-yellow-700 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-yellow-200 ${
        checked ? "bg-yellow-300 font-semibold shadow-md" : ""
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

// MenubarSeparator with Gradient Divider Line
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-3 border-t border-gradient-to-r from-purple-400 to-indigo-400" />;
};

// MenubarCheckboxItem with Bold Checkbox Style
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
    <li className="px-4 py-2 text-purple-700 bg-purple-100 hover:bg-purple-200 cursor-pointer rounded-lg shadow-sm transition duration-200 ease-in-out">
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

// MenubarShortcut with Small and Modern Styling
export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-gray-500 text-xs ml-auto">{children}</span>;
};
