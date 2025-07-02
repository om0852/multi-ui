const Button29 = ({
  text = 'Bubble Up',
  color = "bg-purple-600",
  size = "w-36 h-12",
  onClick = () => console.log('Bubble button clicked!'),
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes bubble {
            0% {
              transform: translateY(0);
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100px);
              opacity: 0;
            }
          }
          .group:hover .bubble {
            opacity: 1;
            animation: bubble 1.5s ease-out infinite;
          }
        `}
      </style>
      <button
        className={`relative ${size} ${color} text-white font-bold rounded-lg overflow-hidden group`}
        onClick={onClick}
        {...props}
      >
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className="bubble absolute w-4 h-4 bg-white rounded-full opacity-0"
              style={{
                animationDelay: `${index * 0.2}s`,
                top: "100%",
                left: `${20 * index}%`,
              }}
            ></span>
          ))}
        </div>
        <span className="relative z-10">{text}</span>
      </button>
    </>
  );
};

render(<Button29 />);
