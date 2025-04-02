import React from "react";

function Button8({
  text,
  color = "bg-red-500",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full transition-transform transform hover:animate-bounce`}
    >
      {text}
    </button>
  );
}

export default Button8;
