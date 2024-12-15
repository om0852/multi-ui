"use client";
import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";

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
          toggleMenu, // Pass toggleMenu function directly
          isVisible,  // Pass visibility status
          closeMenu,  // Pass closeMenu function
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
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = "MenubarTrigger";

// MenubarContent Component
export const MenubarContent: React.FC<{
  children: ReactNode;
  isVisible?: boolean;
  closeMenu?: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}> = ({ children, isVisible = false, closeMenu, triggerRef }) => {
  const [dynamicPosition, setDynamicPosition] = useState<"top" | "bottom">("bottom");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef?.current && menuRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const menuHeight = menuRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Check if there's enough space below the button
        if (triggerRect.bottom + menuHeight > viewportHeight) {
          setDynamicPosition("top");
        } else {
          setDynamicPosition("bottom");
        }
      }
    };

    if (isVisible) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isVisible, triggerRef]);

  return (
    <div className="relative">
      {isVisible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: dynamicPosition === "top" ? -10 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: dynamicPosition === "top" ? -10 : 10 }}
          className={`absolute ${
            dynamicPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"
          } left-0 w-48 bg-white shadow-lg rounded-lg z-10`}
        >
          <ul className="py-2">
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement, {
                onClick: closeMenu,
              })
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

// MenubarItem Component
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </li>
  );
};

// MenubarCheckboxItem Component
export const MenubarCheckboxItem: React.FC<{
  label: string;
  checked: boolean;
  onChange: () => void;
}> = ({ label, checked, onChange }) => (
  <div
    onClick={onChange}
    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
  >
    <input
      type="checkbox"
      checked={checked}
      readOnly
      className="mr-2 cursor-pointer"
    />
    {label}
  </div>
);

// MenubarRadioGroup Component
export const MenubarRadioGroup: React.FC<{ name: string; children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

// MenubarRadioItem Component
export const MenubarRadioItem: React.FC<{
  label: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}> = ({ label, value, selectedValue, onChange }) => (
  <div
    onClick={() => onChange(value)}
    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
  >
    <input
      type="radio"
      checked={selectedValue === value}
      readOnly
      className="mr-2 cursor-pointer"
    />
    {label}
  </div>
);

// MenubarSeparator Component
export const MenubarSeparator: React.FC = () => (
  <hr className="border-t border-gray-300 my-2" />
);

// MenubarShortcut Component
export const MenubarShortcut: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="text-gray-500 ml-auto">{children}</span>
);

// MenubarSub Component


// MenubarSubTrigger Component
export const MenubarSubTrigger: React.FC<{
  children: ReactNode;
  toggleSubmenu?: () => void;
  isSubmenuVisible?: boolean;
}> = ({ children, toggleSubmenu, isSubmenuVisible }) => {
  return (
    <li
      onClick={toggleSubmenu}
      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
        isSubmenuVisible ? "bg-gray-100" : ""
      }`}
    >
      {children}
    </li>
  );
};

// MenubarSub Component
export const MenubarSub: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuVisible((prev) => !prev);
  };

  const closeSubmenu = () => {
    setIsSubmenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close submenu if clicked outside of the menu
      closeSubmenu();
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
      {/* Passing down the toggle function and visibility status to MenubarSubTrigger */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          toggleSubmenu,
          isSubmenuVisible,
        })
      )}

      {/* Submenu Content */}
      {isSubmenuVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10"
        >
          <ul className="py-2">{children}</ul>
        </motion.div>
      )}
    </div>
  );
};

// MenubarSubContent Component
export const MenubarSubContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
    >
      <ul className="py-2">{children}</ul>
    </motion.div>
  );
};
