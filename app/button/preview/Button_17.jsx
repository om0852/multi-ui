const Button17 = ({
  text = 'Gear Button',
  color = "bg-red-500",
  size = "w-36 h-36",
  onClick = () => console.log('Gear button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative overflow-hidden ${size} ${color} text-white rounded-full flex items-center justify-center`}
      onClick={onClick}
      {...props}
    >
      <span className="absolute w-16 h-16 border-4 border-white rounded-full animate-spin"></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

render(<Button17 />);
