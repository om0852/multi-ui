const Button30 = ({
  text = 'Split Slide',
  color1 = "bg-green-500",
  color2 = "bg-green-700",
  size = "w-40 h-12",
  onClick = () => console.log('Split slide button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative ${size} text-white font-bold rounded-lg overflow-hidden group`}
      onClick={onClick}
      {...props}
    >
      <span
        className={`absolute inset-0 ${color1} group-hover:translate-x-full transition-transform duration-300`}
      ></span>
      <span
        className={`absolute inset-0 ${color2} translate-x-full group-hover:translate-x-0 transition-transform duration-300`}
      ></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

render(<Button30 />);
