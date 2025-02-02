import React from "react";

type BlurBadgeProps = {
  text: string;
  color?: string;
};

const BlurBadge: React.FC<BlurBadgeProps> = ({ text, color = "bg-orange-500" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
      hover:blur-[1px] hover:scale-110 transition-all duration-300 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default BlurBadge; 