import React from "react";

type SparkleButtonProps = {
  text: string;
  color: string;
  size: string;
};

const Button33: React.FC<SparkleButtonProps> = ({ text, color, size }) => {
  return (
    <button
      className={`relative ${color} ${size} text-white rounded-lg px-6 py-3 font-medium overflow-hidden`}
    >
      <span className="absolute inset-0 flex items-center justify-center sparkle-container pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="absolute w-2 h-2 rounded-full bg-white opacity-0 sparkle"
          />
        ))}
      </span>
      {text}
      <style>
        {`
          .sparkle-container .sparkle {
            animation: sparkle-animation 1.5s infinite;
          }
          .sparkle:nth-child(1) { animation-delay: 0.1s; }
          .sparkle:nth-child(2) { animation-delay: 0.2s; }
          .sparkle:nth-child(3) { animation-delay: 0.3s; }
          .sparkle:nth-child(4) { animation-delay: 0.4s; }
          .sparkle:nth-child(5) { animation-delay: 0.5s; }
          .sparkle:nth-child(6) { animation-delay: 0.6s; }
          .sparkle:nth-child(7) { animation-delay: 0.7s; }
          .sparkle:nth-child(8) { animation-delay: 0.8s; }
          .sparkle:nth-child(9) { animation-delay: 0.9s; }
          .sparkle:nth-child(10) { animation-delay: 1s; }

          @keyframes sparkle-animation {
            0% { opacity: 0; transform: translate(0, 0); }
            50% { opacity: 1; transform: translate(10px, -10px); }
            100% { opacity: 0; transform: translate(20px, -20px); }
          }
        `}
      </style>
    </button>
  );
};

export default Button33;
