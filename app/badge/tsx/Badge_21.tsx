import React from "react";

type ShakeBadgeProps = {
  text: string;
  color?: string;
};

const ShakeBadge: React.FC<ShakeBadgeProps> = ({ text, color = "bg-yellow-500" }) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-md ${color} 
      hover:animate-[wiggle_0.3s_ease-in-out_infinite] cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default ShakeBadge;
