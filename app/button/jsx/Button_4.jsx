import React from "react";

function Button4({ text, color = "bg-purple-500", textColor = "text-white", size = "px-6 py-3", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all focus:outline-none hover:animate-pulse`}
    >
      {text}
    </button>
  );
}

export default Button4;
