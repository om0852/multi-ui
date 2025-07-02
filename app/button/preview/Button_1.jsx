
const Button1 = ({
  label = 'Click Me',
  onClick = () => console.log('Button clicked!'),
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-medium text-white rounded-full transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      {...props}
    >
      <span className="absolute inset-0 transition-transform duration-300 scale-110 opacity-0 bg-white rounded-full mix-blend-overlay hover:opacity-20"></span>
      {label}
    </button>
  );
};

render(<Button1 />);