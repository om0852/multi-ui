
const Button21 = ({
  text = 'Floating Bubbles',
  color = "bg-red-500",
  size = "w-36 h-12",
  onClick = () => console.log('Floating bubble button clicked!'),
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
          }
        `}
      </style>
      <button
        className={`relative ${size} ${color} text-white rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
        onClick={onClick}
        {...props}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="absolute w-4 h-4 bg-white rounded-full animate-[floating_3s_infinite] opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          ></span>
        ))}
        <span className="relative">{text}</span>
      </button>
    </>
  );
};

render(<Button21 />);
