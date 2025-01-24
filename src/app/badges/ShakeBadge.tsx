import React from "react";

type ShakeBadgeProps = {
  text: string;
  color?: string;
};

const ShakeBadge: React.FC<ShakeBadgeProps> = ({ text, color = "bg-green-500" }) => {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-medium rounded-full shadow-lg ${color} hover:animate-shake`}
    >
      {text}
      <style>
        {`
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-5px);
            }
            75% {
              transform: translateX(5px);
            }
          }
          .hover\\:animate-shake:hover {
            animation: shake 0.3s ease-in-out;
          }
        `}
      </style>
    </span>
  );
};

export default ShakeBadge;
