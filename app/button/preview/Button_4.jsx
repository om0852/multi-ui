const Button4 = ({
  text = 'Pulse Me',
  color = "bg-purple-500",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick = () => console.log('Pulse button clicked!'),
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all focus:outline-none hover:animate-pulse`}
      {...props}
    >
      {text}
    </button>
  );
};

render(<Button4 />);
