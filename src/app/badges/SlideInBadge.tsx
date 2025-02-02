import React from "react";

type SlideInBadgeProps = {
  text: string;
  color?: string;
};

const SlideInBadge: React.FC<SlideInBadgeProps> = ({
  text,
  color = "bg-pink-500",
}) => {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
      hover:-translate-x-2 hover:translate-y-1 transition-all duration-300 cursor-pointer
      hover:shadow-lg`}
    >
      {text}
    </div>
  );
};

export default SlideInBadge;
