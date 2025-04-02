import React, { useState } from "react";

const Button13 = ({
  text,
  color = "bg-blue-500",
  size = "w-40 h-12",
  onClick,
}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = () => {
    const id = Date.now();
    setRipples((prev) => [...prev, id]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r !== id)), 600);
    if (onClick) onClick();
  };

  return (
    <div
      className={`relative overflow-hidden ${size} ${color} text-white rounded-lg flex items-center justify-center cursor-pointer`}
      onClick={handleClick}
    >
      {text}
      {ripples.map((ripple) => (
        <span
          key={ripple}
          className="absolute rounded-full border-2 border-white opacity-50 animate-ping"
          style={{
            width: "150%",
            height: "150%",
          }}
        />
      ))}
    </div>
  );
};

export default Button13;