"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  label: string;
  subItems?: DropdownItem[];
};

type MultiLevelDropdownProps = {
  label: string;
  items: DropdownItem[];
  onClick?: (value: string) => void;
};

const DropdownItemComponent = ({
  item,
  onClick,
  level = 1,
}: {
  item: DropdownItem;
  onClick?: (value: string) => void;
  level?: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick(item.label);
    if (item.subItems) setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`flex items-center justify-between px-4 py-2 w-full text-left text-gray-800 rounded hover:bg-gray-200 ${
          level === 1 ? "bg-gray-100" : ""
        }`}
      >
        {item.label}
        {item.subItems && (
          <motion.img
            src="https://img.icons8.com/android/24/expand-arrow.png"
            alt="expand-arrow"
            width="24"
            height="24"
            className={`ml-2 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>
      {item.subItems && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative pl-6"
            >
              {item.subItems.map((subItem, index) => (
                <DropdownItemComponent
                  key={index}
                  item={subItem}
                  onClick={onClick}
                  level={level + 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export const MultiLevelDropdown = ({
  label,
  items,
  onClick,
}: MultiLevelDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="px-4 py-2 text-white bg-blue-600 rounded-md"
      >
        {label}
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 w-56 bg-white rounded-md shadow-lg z-10"
          >
            {items.map((item, index) => (
              <DropdownItemComponent key={index} item={item} onClick={onClick} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
