const Button20 = ({
  text = 'Shimmer Effect',
  color = "bg-blue-500",
  size = "w-40 h-12",
  onClick = () => console.log('Shimmer button clicked!'),
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(100%) rotate(45deg); }
          }
          .animate-shimmer {
            animation: shimmer 1.5s infinite;
          }
        `}
      </style>
      <button
        className={`relative ${size} ${color} text-white rounded-lg flex items-center justify-center overflow-hidden`}
        onClick={onClick}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 animate-shimmer"></span>
        <span className="relative">{text}</span>
      </button>
    </>
  );
};

render(<Button20 />);
