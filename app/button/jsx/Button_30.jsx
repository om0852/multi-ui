import React from "react";

const Button30 = ({
  text,
  color = "bg-gradient-to-r from-cyan-500 to-blue-500",
  size = "w-40 h-12",
  onClick,
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white font-bold rounded-lg overflow-hidden group`}
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-300">
          <div className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 animate-shimmer" />
        </div>
      </div>
      <span className="relative z-10">{text}</span>
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-200%) skewX(-45deg);
            }
            100% {
              transform: translateX(300%) skewX(-45deg);
            }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite linear;
          }
        `}
      </style>
    </button>
  );
};

export default Button30;
