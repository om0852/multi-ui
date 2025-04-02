import React from "react";

type RotatingButtonProps = {
  text: string;
  size: string;
};

const Button32: React.FC<RotatingButtonProps> = ({ text, size }) => {
  return (
    <button
      className={`relative ${size} text-white font-bold px-6 py-3 rounded-lg overflow-hidden`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-rotate"></span>
      <span className="relative z-10">{text}</span>
      <style>
        {`
          .animate-rotate {
            animation: rotate-bg 5s linear infinite;
          }
          @keyframes rotate-bg {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
};

export default Button32;
