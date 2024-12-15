"use client"
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from 'react';

export const Menubar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="relative inline-block">{children}</div>;
};

export const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  { children: ReactNode; onClick?: () => void }
>(({ children, onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      {children}
    </button>
  );
});

MenubarTrigger.displayName = 'MenubarTrigger';

export const MenubarContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState<"top" | "bottom">(
    "bottom"
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef.current && menuRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const menuHeight = menuRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate whether there's enough space below the trigger
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
  }, [isVisible]);

  return (
    <div className="relative">
      <MenubarTrigger onClick={toggleMenu} ref={triggerRef}>
        Trigger
      </MenubarTrigger>
      {isVisible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: dynamicPosition === "top" ? -10 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: dynamicPosition === "top" ? -10 : 10 }}
          className={`absolute ${
            dynamicPosition === "top" ? "bottom-full" : "top-full"
          } left-0 mt-2 w-48 bg-white shadow-lg rounded-lg`}
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
export const MenubarItem: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </li>
  );
};

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

export const MenubarRadioGroup: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};

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

export const MenubarSeparator: React.FC = () => (
  <hr className="border-t border-gray-300 my-2" />
);

export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <span className="text-gray-500 ml-auto">{children}</span>;

export const MenubarSub: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="relative">{children}</div>;
};

export const MenubarSubTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
      {children}
    </button>
  );
};

export const MenubarSubContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
