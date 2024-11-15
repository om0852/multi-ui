import React from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  profileImage: string;
  options: { id: string; label: string; icon: string; disabled?: boolean }[];
}

const ProfileDropdown: React.FC<DropdownProps> = ({ profileImage, options }) => {
  return (
    <div className="relative group">
      {/* Profile Image */}
      <div
        className="h-12 w-12 rounded-full bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${profileImage})` }}
      ></div>

      {/* Dropdown Menu */}
      <motion.div
        className="absolute top-16 left-[-7.5rem] hidden group-hover:block bg-gray-900 text-gray-100 rounded-md shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Triangle Pointer */}
        <div className="absolute right-[30%] top-[-0.75rem] w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-b-gray-900"></div>

        <ul className="list-none w-48">
          {options.map((option) => (
            <li
              key={option.id}
              className={`flex items-center gap-2 p-4 cursor-pointer transition-all duration-100 ease-in-out ${
                option.disabled
                  ? "text-gray-500 cursor-not-allowed"
                  : "hover:bg-gray-800 hover:border-l-4 hover:border-emerald-500"
              }`}
              onClick={() => !option.disabled && console.log(option.label)}
            >
              <i className={`text-xl ${option.icon}`}></i>
              {option.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProfileDropdown;
