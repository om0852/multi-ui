import React, { useState } from "react";
import { motion } from "framer-motion";

// ProfileDropdown Component
interface DropdownProps {
  profileImage: string;
  options: { label: string; icon: string }[];
}

const ProfileDropdown: React.FC<DropdownProps> = ({
  profileImage,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="w-full h-full">
      {/* Profile Image Dropdown */}
      <div className="relative">
        <label
          htmlFor="profile-dropdown-toggle"
          className="block h-12 w-12 bg-white cursor-pointer rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${profileImage})` }}
          onClick={toggleDropdown}
        />
        <motion.div
          className="absolute top-16 left-[-7.5rem] p-4 text-gray-100 bg-gray-900 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Triangle Pointer */}
          <div className="absolute right-[30%] top-[-0.75rem] w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-b-gray-900" />

          <ul className="list-none w-48">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex items-center gap-2 p-5 cursor-pointer transition-all duration-100 ease-in-out hover:bg-gray-800 hover:border-l-4 hover:border-emerald-500"
              >
                <i className={`text-xl ion-icon ${option.icon}`} />
                {option.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default ProfileDropdown;
