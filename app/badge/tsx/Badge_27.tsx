import React from "react";

type SwingingBadgeProps = {
  text: string;
  color?: string;
};

const SwingingBadge: React.FC<SwingingBadgeProps> = ({
  text,
  color = "bg-purple-600",
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`px-6 py-3 text-white font-bold rounded-full ${color} animate-swing`}
      >
        {text}
      </div>
      <style>
        {`
          @keyframes swing {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-15deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-swing {
            animation: swing 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default SwingingBadge;
