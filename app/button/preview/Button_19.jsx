const Button19 = ({
  text = 'Zoom Effect',
  color = "bg-purple-500",
  size = "w-32 h-12",
  onClick = () => console.log('Zoom button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-lg flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300`}
      onClick={onClick}
      {...props}
    >
      <span className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></span>
      <span className="relative">{text}</span>
    </button>
  );
};

render(<Button19 />);
