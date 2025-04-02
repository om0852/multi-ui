import React from "react";

function Button6({ text, color = "bg-cyan-500", textColor = "text-black", size = "px-6 py-3", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full transition-shadow shadow-md hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.6)]`}
    >
      {text}
    </button>
  );
}

export default Button6;
