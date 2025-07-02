const Button6 = ({
  text = 'Glow Effect',
  color = "bg-cyan-500",
  textColor = "text-black",
  size = "px-6 py-3",
  onClick = () => console.log('Glow button clicked!'),
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${color} ${textColor} ${size} font-semibold rounded-full transition-shadow shadow-md hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.6)]`}
      {...props}
    >
      {text}
    </button>
  );
};

render(<Button6 />);
