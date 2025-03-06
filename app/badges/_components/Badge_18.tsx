import React from "react";

type RippleHoverBadgeProps = {
  text: string;
  color?: string;
};

const RippleHoverBadge: React.FC<RippleHoverBadgeProps> = ({
  text,
  color = "bg-red-500",
}) => {
  return (
    <span
      className={`relative inline-block px-4 py-2 text-white text-sm font-medium rounded-full shadow-lg ${color} overflow-hidden`}
    >
      {text}
      <span className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-700 hover:animate-ripple" />
      <style>
        {`
          @keyframes ripple {
            from {
              transform: scale(1);
              opacity: 0.5;
            }
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }
          .hover\\:animate-ripple:hover {
            animation: ripple 1s ease-out;
          }
        `}
      </style>
    </span>
  );
};

export default RippleHoverBadge;
