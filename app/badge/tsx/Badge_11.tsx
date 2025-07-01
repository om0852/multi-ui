import React, {  useState } from "react";

type OrbitingDotsBadgeProps = {
  text: string;
  color?: string;
  dotColor?: string;
};

const OrbitingDotsBadge: React.FC<OrbitingDotsBadgeProps> = ({
  text,
  color = "bg-purple-600",
  dotColor = "bg-pink-400",
  ...props
}) => {
  const [dots] = useState(new Array(6).fill(0)); // 6 dots orbiting

  return (
    <div className="relative flex items-center justify-center" {...props}>
      <span
        className={`relative z-10 px-6 py-3 text-white font-semibold rounded-full ${color}`}
      >
        {text}
      </span>
      {dots.map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 ${dotColor} rounded-full`}
          style={{
            animation: `orbit 2s linear infinite`,
            animationDelay: `${i * 0.3}s`,
            transformOrigin: "center",
          }}
        ></div>
      ))}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translate(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translate(60px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitingDotsBadge;
