const Button15 = ({
  text = 'Elastic Button',
  color = "bg-green-500",
  size = "w-32 h-10",
  onClick = () => console.log('Elastic button clicked!'),
  ...props
}) => {
  return (
    <button
      className={`relative ${size} ${color} text-white rounded-full flex items-center justify-center transform transition-all hover:scale-105 active:scale-90`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

render(<Button15 />);
