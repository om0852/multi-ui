import React from "react";

type OrbitButtonProps = {
  text: string;
  size: string;
  color: string;
};

const Button31: React.FC<OrbitButtonProps> = ({ text, size, color }) => {
  return (
    <button
      className={`relative ${color} ${size} text-white font-medium px-8 py-3 rounded-full`}
    >
      {text}
      <span className="absolute inset-0 flex items-center justify-center orbit-container pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <span
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full orbit-dot"
          />
        ))}
      </span>
      <style>
        {`
          .orbit-container .orbit-dot {
            animation: orbit-animation 2s linear infinite;
          }
          .orbit-dot:nth-child(1) { animation-delay: 0s; transform: rotate(0deg) translate(40px); }
          .orbit-dot:nth-child(2) { animation-delay: 0.25s; transform: rotate(45deg) translate(40px); }
          .orbit-dot:nth-child(3) { animation-delay: 0.5s; transform: rotate(90deg) translate(40px); }
          .orbit-dot:nth-child(4) { animation-delay: 0.75s; transform: rotate(135deg) translate(40px); }
          .orbit-dot:nth-child(5) { animation-delay: 1s; transform: rotate(180deg) translate(40px); }
          .orbit-dot:nth-child(6) { animation-delay: 1.25s; transform: rotate(225deg) translate(40px); }
          .orbit-dot:nth-child(7) { animation-delay: 1.5s; transform: rotate(270deg) translate(40px); }
          .orbit-dot:nth-child(8) { animation-delay: 1.75s; transform: rotate(315deg) translate(40px); }

          @keyframes orbit-animation {
            0% { transform: rotate(0deg) translate(40px); }
            100% { transform: rotate(360deg) translate(40px); }
          }
        `}
      </style>
    </button>
  );
};

export default Button31;
