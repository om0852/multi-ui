import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenubarChildProps {
  toggleMenu?: () => void;
  isVisible?: boolean;
  closeMenu?: () => void;
  onClick?: () => void;
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
        React.cloneElement(child as React.ReactElement<MenubarChildProps>, {
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
      className="px-5 py-3 font-bold text-white bg-pastel-blue rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all"
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="absolute top-full left-0 mt-2 w-64 bg-pastel-yellow rounded-lg shadow-lg z-20 border border-yellow-300"
        >
          <ul className="py-4 space-y-4 px-4">{children}</ul>
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
      className="px-4 py-2 text-pastel-purple font-medium bg-pastel-green hover:bg-pastel-light-green rounded-md shadow-sm hover:shadow-lg transition-all cursor-pointer"
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
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            className="absolute left-full top-0 ml-3 w-48 bg-pastel-purple rounded-lg shadow-lg border border-purple-200 z-30"
          >
            <ul className="py-3 px-4 space-y-4">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// MenubarRadioGroup Component
export const MenubarRadioGroup: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="space-y-4 px-2">{children}</ul>;
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
      className={`px-4 py-2 rounded-md cursor-pointer ${
        checked
          ? "bg-pastel-blue text-white font-semibold shadow-lg"
          : "bg-pastel-light-blue hover:bg-pastel-blue hover:text-white shadow-sm"
      } transition-all`}
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
  return <hr className="my-3 border-pastel-green" />;
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
    <li className="px-4 py-2 text-pastel-blue bg-pastel-light-yellow hover:bg-pastel-yellow cursor-pointer rounded-lg shadow-sm hover:shadow-lg transition-all">
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
  return <span className="text-pastel-purple text-sm ml-auto">{children}</span>;
};
