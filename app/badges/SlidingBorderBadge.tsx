import React from "react";

type SlidingBorderBadgeProps = {
  text: string;
  color?: string;
};

const SlidingBorderBadge: React.FC<SlidingBorderBadgeProps> = ({
  text,
  color = "bg-indigo-500"
}) => {
  return (
    <div className="relative inline-block group">
      <div
        className={`px-4 py-2 text-white font-semibold rounded-lg ${color} 
        cursor-pointer z-10 relative`}
      >
        {text}
      </div>
      <div className="absolute inset-0 bg-white rounded-lg opacity-25 
        transform scale-x-0 group-hover:scale-x-100 transition-transform 
        duration-300 origin-left"></div>
    </div>
  );
};

export default SlidingBorderBadge; 