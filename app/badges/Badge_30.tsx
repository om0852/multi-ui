import React from "react";

type WavePulsingBadgeProps = {
  text: string;
  color?: string;
};

const WavePulsingBadge: React.FC<WavePulsingBadgeProps> = ({
  text,
  color = "bg-teal-500",
}) => {
  return (
    <span className="relative inline-block px-4 py-2 text-white text-sm font-semibold rounded-full overflow-hidden">
      <span
        className={`absolute inset-0 rounded-full ${color} animate-pulse opacity-20`}
      ></span>
      <span
        className={`absolute inset-0 rounded-full ${color} opacity-50 animate-wave`}
      ></span>
      <span className={`relative z-10 ${color}`}>{text}</span>
      <style>
        {`
          @keyframes wave {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            100% {
              transform: scale(3);
              opacity: 0;
            }
          }
          .animate-wave {
            animation: wave 1.5s infinite linear;
          }
        `}
      </style>
    </span>
  );
};

export default WavePulsingBadge;
