import React from "react";

type SlideInBadgeProps = {
  text: string;
  color?: string;
};

const SlideInBadge: React.FC<SlideInBadgeProps> = ({
  text,
  color = "bg-purple-600",
}) => {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-medium rounded-full shadow-lg ${color} animate-slide-in`}
    >
      {text}
      <style>
        {`
          @keyframes slide-in {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slide-in 0.8s ease-out;
          }
        `}
      </style>
    </span>
  );
};

export default SlideInBadge;
