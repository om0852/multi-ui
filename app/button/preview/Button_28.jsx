const Button28 = ({
  text = 'Expand Outline',
  color = "text-blue-500",
  size = "w-40 h-12",
  onClick = () => console.log('Expanding outline button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} border-2 border-blue-500 rounded-lg flex items-center justify-center font-bold overflow-hidden group`}
      onClick={onClick}
      {...props}
    >
      <span
        className="absolute inset-0 bg-blue-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
        style={{ zIndex: -1 }}
      ></span>
      <span className="relative group-hover:text-white transition-colors duration-300">{text}</span>
    </button>
  );
};

render(<Button28 />);
