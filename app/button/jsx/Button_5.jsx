import React from "react";

function Button5({ text, color = "bg-blue-600", textColor = "text-white", size = "px-6 py-3", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded overflow-hidden group`}
    >
      <span className="absolute inset-0 bg-gray-900 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
      <span className="relative">{text}</span>
    </button>
  );
}

export default Button5;
