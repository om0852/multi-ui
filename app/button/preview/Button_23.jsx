const Button23 = ({
  text = 'Pulse Glow',
  color = "bg-indigo-500",
  size = "w-36 h-12",
  onClick = () => console.log('Pulse glow button clicked!'),
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
            100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
          }
        `}
      </style>
      <button
        className={`relative ${size} ${color} text-white font-bold rounded-lg flex items-center justify-center overflow-hidden cursor-pointer`}
        onClick={onClick}
        {...props}
      >
        <span className="absolute inset-0 rounded-lg bg-indigo-500 opacity-50 blur-lg animate-pulse"></span>
        <span className="relative">{text}</span>
      </button>
    </>
  );
};

render(<Button23 />);
