const Button27 = ({
  text = 'Tilt Hover',
  color = "bg-orange-400",
  size = "w-36 h-12",
  onClick = () => console.log('Tilt button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white font-bold rounded-lg flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 hover:rotate-6 hover:scale-105`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

render(<Button27 />);
