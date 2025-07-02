const Button16 = ({
  text = 'Slide Effect',
  color = "bg-gray-800",
  highlightColor = "bg-blue-400",
  size = "w-48 h-14",
  onClick = () => console.log('Slide button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative overflow-hidden ${size} ${color} text-white rounded-lg flex items-center justify-center group`}
      onClick={onClick}
      {...props}
    >
      <span
        className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ${highlightColor}`}
      ></span>
      <span className="relative">{text}</span>
    </button>
  );
};

render(<Button16 />);
