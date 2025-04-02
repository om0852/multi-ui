import React from "react";

type RotatingBadgeProps = {
  text: string;
  color?: string; // Allows customization of badge background color
};

const RotatingBadge: React.FC<RotatingBadgeProps> = ({
  text,
  color = "bg-green-500",
}) => {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-medium rounded-full shadow-lg ${color} animate-rotate`}
    >
      {text}
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-rotate:hover {
            animation: rotate 1s linear infinite;
          }
        `}
      </style>
    </span>
  );
};

export default RotatingBadge;
