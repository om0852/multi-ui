import React from "react";

type FlipBadgeProps = {
  text: string;
  color?: string;
};

const FlipBadge: React.FC<FlipBadgeProps> = ({ text, color = "bg-rose-500", ...props }) => {
  return (
    <div className="group perspective" {...props}>
      <div className={`relative preserve-3d hover:rotate-y-180 duration-500 cursor-pointer`}>
        <div className={`${color} px-4 py-2 text-white font-semibold rounded-lg backface-hidden`}>
          {text}
        </div>
        <div className={`absolute inset-0 ${color} px-4 py-2 text-white font-semibold 
          rounded-lg backface-hidden rotate-y-180 bg-opacity-80`}>
          ✨
        </div>
      </div>
    </div>
  );
};

export default FlipBadge; 