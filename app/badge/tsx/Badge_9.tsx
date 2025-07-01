import React from "react";

type GradientBorderBadgeProps = {
  text: string;
  color?: string;
};

const GradientBorderBadge: React.FC<GradientBorderBadgeProps> = ({ text, color = "bg-slate-800", ...props }) => {
  return (
    <div className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500" {...props}>
      <div className={`${color} px-4 py-2 rounded-lg text-white font-semibold`}>
        {text}
      </div>
    </div>
  );
};

export default GradientBorderBadge; 