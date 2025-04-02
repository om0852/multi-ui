import React from "react";

const Button14 = ({
  text,
  color = "bg-pink-500",
  size = "w-36 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-lg shadow-lg transition-transform hover:scale-110`}
      style={{
        boxShadow: `0 0 20px rgba(255, 105, 180, 0.5)`,
        animation: "pulse 2s infinite",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button14;