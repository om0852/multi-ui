const Button8 = ({
  text = 'Bounce Me',
  color = "bg-red-500",
  textColor = "text-white",
  size = "px-6 py-3",
  onClick = () => console.log('Bounce button clicked!'),
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full transition-transform transform hover:animate-bounce`}
      {...props}
    >
      {text}
    </button>
  );
};

render(<Button8 />);
