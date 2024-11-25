import React, { useState } from 'react';

const PopMenu: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const distance = 12 * 16; // 12em in pixels
  const angles = [0, 72, 144, 216, 288]; // Divide the circle into 5 parts (360/5)

  const menuStyles = (index: number) => {
    if (!isChecked) {
      return {
        transform: `translate(0px, 0px) rotate(360deg)`,
        opacity: 0,
        transitionDelay: `${0.1 * index}s`,
      };
    }

    const angle = (angles[index] * Math.PI) / 180; // Convert to radians
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return {
      transform: `translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1,
      transitionDelay: `${0.1 * index}s`,
    };
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="hidden"
        />
        <label
          htmlFor="checkbox"
          className="bg-blue-500 w-40 h-40 rounded-full flex items-center justify-center text-white text-lg cursor-pointer relative z-10"
        >
          Click me
        </label>
        {['GitHub', 'Facebook', 'Twitter', 'Link', 'WeChat'].map(
          (platform, index) => (
            <a
              key={platform}
              href="#"
              style={menuStyles(index)}
              className="absolute bg-orange-400 w-16 h-16 text-white rounded-full flex items-center justify-center text-sm no-underline transition-all duration-300 ease-in-out"
            >
              {platform}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default PopMenu;
