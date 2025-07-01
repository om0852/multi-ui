import React, { useEffect, useState } from "react";

type FallingConfettiBadgeProps = {
  text: string;
  color?: string;
};

const FallingConfettiBadge: React.FC<FallingConfettiBadgeProps> = ({
  text,
  color = "bg-purple-500",
  ...props
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component only animates after hydration.
  }, []);

  if (!isClient) {
    return null; // Prevent rendering mismatches during SSR.
  }

  return (
    <div className="relative inline-block" {...props}>
      <span
        className={`text-white ${color} px-4 py-2 rounded-md font-semibold`}
      >
        {text}
      </span>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-400 rounded-full absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px);
            opacity: 1;
          }
          100% {
            transform: translateY(150px);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FallingConfettiBadge;
